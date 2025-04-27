'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AgentStatus } from "@/app/generated/prisma";
import { CURRENT_USER_ID, ensureUserExists } from "@/lib/auth";

// 获取所有代理列表
export async function getAgents() {
  try {
    await ensureUserExists();
    
    const agents = await prisma.agent.findMany({
      where: { userId: CURRENT_USER_ID },
      orderBy: { updatedAt: 'desc' },
    });
    
    return agents;
  } catch (error) {
    console.error("获取代理列表失败:", error);
    throw new Error("无法获取代理列表");
  }
}

// 获取单个代理详情
export async function getAgentById(agentId: string) {
  try {
    await ensureUserExists();
    
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      include: {
        mcps: {
          include: {
            mcp: true,
          }
        },
        triggers: true,
        logs: {
          orderBy: { createdAt: 'desc' },
          take: 20, // 限制日志数量
        }
      }
    });
    
    // 检查是否是当前用户的代理
    if (agent && agent.userId !== CURRENT_USER_ID) {
      throw new Error("无权访问此代理");
    }
    
    return agent;
  } catch (error) {
    console.error("获取代理详情失败:", error);
    throw new Error("无法获取代理详情");
  }
}

// 创建新代理
export async function createAgent(data: {
  name: string;
  description?: string;
  systemPrompt?: string;
  iconUrl?: string;
}) {
  try {
    // 确保用户存在
    await ensureUserExists();
    
    const agent = await prisma.agent.create({
      data: {
        ...data,
        status: AgentStatus.STOPPED,
        userId: CURRENT_USER_ID,
      }
    });
    
    revalidatePath('/agents');
    return { success: true, message: "代理已创建", agentId: agent.id };
  } catch (error) {
    console.error("创建代理失败:", error);
    return { success: false, message: "创建代理失败" };
  }
}

// 更新代理基本信息
export async function updateAgent(agentId: string, data: {
  name?: string;
  description?: string;
  systemPrompt?: string;
  iconUrl?: string;
}) {
  try {
    // 确保用户存在
    await ensureUserExists();
    
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权更新此代理" };
    }
    
    // 过滤掉未定义的字段
    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );
    
    if (Object.keys(updateData).length === 0) {
      return { success: false, message: "没有提供更新数据" };
    }
    
    await prisma.agent.update({
      where: { id: agentId },
      data: updateData,
    });
    
    revalidatePath(`/agents/${agentId}`);
    return { success: true, message: "代理已更新" };
  } catch (error) {
    console.error("更新代理失败:", error);
    return { success: false, message: "更新代理失败" };
  }
}

// 更新代理状态
export async function updateAgentStatus(agentId: string, status: AgentStatus) {
  try {
    await ensureUserExists();
    
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权更新此代理" };
    }
    
    await prisma.agent.update({
      where: { id: agentId },
      data: { status },
    });
    
    // 记录状态变更日志
    await prisma.log.create({
      data: {
        message: `Agent status changed to ${status}`,
        agentId: agentId,
      }
    });
    
    revalidatePath(`/agents/${agentId}`);
    return { success: true, message: `代理状态已更新为 ${status}` };
  } catch (error) {
    console.error("更新代理状态失败:", error);
    return { success: false, message: "更新代理状态失败" };
  }
}

// 删除代理
export async function deleteAgent(agentId: string) {
  try {
    await ensureUserExists();
    
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权删除此代理" };
    }
    
    await prisma.agent.delete({
      where: { id: agentId },
    });
    
    revalidatePath('/agents');
    return { success: true, message: "代理已删除" };
  } catch (error) {
    console.error("删除代理失败:", error);
    return { success: false, message: "删除代理失败" };
  }
}

// 添加MCP到代理
export async function addMcpToAgent(agentId: string, mcpId: string, configuration?: any) {
  try {
    await ensureUserExists();
    
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权更新此代理" };
    }
    
    // 检查MCP是否已经添加到代理
    const existingMcp = await prisma.agentMcp.findUnique({
      where: {
        agentId_mcpId: {
          agentId,
          mcpId,
        }
      }
    });
    
    if (existingMcp) {
      return { success: false, message: "此MCP已添加到代理" };
    }
    
    await prisma.agentMcp.create({
      data: {
        agentId,
        mcpId,
        configuration: configuration || {},
      }
    });
    
    revalidatePath(`/agents/${agentId}`);
    return { success: true, message: "MCP已添加到代理" };
  } catch (error) {
    console.error("添加MCP失败:", error);
    return { success: false, message: "添加MCP失败" };
  }
}

// 更新代理MCP配置
export async function updateAgentMcp(agentId: string, mcpId: string, configuration: any) {
  try {
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权更新此代理" };
    }
    
    await prisma.agentMcp.update({
      where: {
        agentId_mcpId: {
          agentId,
          mcpId,
        }
      },
      data: {
        configuration,
      }
    });
    
    revalidatePath(`/agents/${agentId}`);
    return { success: true, message: "MCP配置已更新" };
  } catch (error) {
    console.error("更新MCP配置失败:", error);
    return { success: false, message: "更新MCP配置失败" };
  }
}

// 从代理移除MCP
export async function removeMcpFromAgent(agentId: string, mcpId: string) {
  try {
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权更新此代理" };
    }
    
    await prisma.agentMcp.delete({
      where: {
        agentId_mcpId: {
          agentId,
          mcpId,
        }
      }
    });
    
    revalidatePath(`/agents/${agentId}`);
    return { success: true, message: "MCP已从代理移除" };
  } catch (error) {
    console.error("移除MCP失败:", error);
    return { success: false, message: "移除MCP失败" };
  }
}

// 添加触发器到代理
export async function addTriggerToAgent(agentId: string, data: {
  type: string;
  configuration: any;
}) {
  try {
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权更新此代理" };
    }
    
    await prisma.trigger.create({
      data: {
        agentId,
        type: data.type as any, // 需要使用正确的枚举类型
        configuration: data.configuration,
      }
    });
    
    revalidatePath(`/agents/${agentId}`);
    return { success: true, message: "触发器已添加" };
  } catch (error) {
    console.error("添加触发器失败:", error);
    return { success: false, message: "添加触发器失败" };
  }
}

// 更新代理触发器
export async function updateTrigger(triggerId: string, configuration: any) {
  try {
    // 获取触发器和关联的代理
    const trigger = await prisma.trigger.findUnique({
      where: { id: triggerId },
      include: { agent: { select: { userId: true } } }
    });
    
    if (!trigger) {
      return { success: false, message: "触发器不存在" };
    }
    
    if (trigger.agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权更新此触发器" };
    }
    
    await prisma.trigger.update({
      where: { id: triggerId },
      data: { configuration },
    });
    
    revalidatePath(`/agents/${trigger.agentId}`);
    return { success: true, message: "触发器已更新" };
  } catch (error) {
    console.error("更新触发器失败:", error);
    return { success: false, message: "更新触发器失败" };
  }
}

// 删除代理触发器
export async function deleteTrigger(triggerId: string) {
  try {
    // 获取触发器和关联的代理
    const trigger = await prisma.trigger.findUnique({
      where: { id: triggerId },
      include: { agent: { select: { userId: true } } }
    });
    
    if (!trigger) {
      return { success: false, message: "触发器不存在" };
    }
    
    if (trigger.agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权删除此触发器" };
    }
    
    await prisma.trigger.delete({
      where: { id: triggerId },
    });
    
    revalidatePath(`/agents/${trigger.agentId}`);
    return { success: true, message: "触发器已删除" };
  } catch (error) {
    console.error("删除触发器失败:", error);
    return { success: false, message: "删除触发器失败" };
  }
}

// 清除代理日志
export async function clearAgentLogs(agentId: string) {
  try {
    // 检查代理是否属于当前用户
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      select: { userId: true }
    });
    
    if (!agent) {
      return { success: false, message: "代理不存在" };
    }
    
    if (agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权清除此代理日志" };
    }
    
    await prisma.log.deleteMany({
      where: { agentId },
    });
    
    revalidatePath(`/agents/${agentId}`);
    return { success: true, message: "代理日志已清除" };
  } catch (error) {
    console.error("清除代理日志失败:", error);
    return { success: false, message: "清除代理日志失败" };
  }
}

// 删除单条日志
export async function deleteLog(logId: string) {
  try {
    // 获取日志和关联的代理
    const log = await prisma.log.findUnique({
      where: { id: logId },
      include: { agent: { select: { userId: true } } }
    });
    
    if (!log) {
      return { success: false, message: "日志不存在" };
    }
    
    if (log.agent.userId !== CURRENT_USER_ID) {
      return { success: false, message: "无权删除此日志" };
    }
    
    await prisma.log.delete({
      where: { id: logId },
    });
    
    revalidatePath(`/agents/${log.agentId}`);
    return { success: true, message: "日志已删除" };
  } catch (error) {
    console.error("删除日志失败:", error);
    return { success: false, message: "删除日志失败" };
  }
} 