'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ItemType } from "@/app/generated/prisma";
import { CURRENT_USER_ID, ensureUserExists } from "@/lib/auth";

// 获取所有商店项目
export async function getStoreItems() {
  try {
    await ensureUserExists();
    
    const storeItems = await prisma.storeItem.findMany({
      orderBy: { createdAt: 'desc' },
    });
    
    return storeItems;
  } catch (error) {
    console.error("获取商店项目失败:", error);
    throw new Error("无法获取商店项目");
  }
}

// 获取所有代理模板
export async function getAgentTemplates() {
  try {
    await ensureUserExists();
    
    const templates = await prisma.storeItem.findMany({
      where: { type: ItemType.AGENT_TEMPLATE },
      orderBy: { createdAt: 'desc' },
    });
    
    return templates;
  } catch (error) {
    console.error("获取代理模板失败:", error);
    throw new Error("无法获取代理模板");
  }
}

// 获取所有MCP服务
export async function getMcpServices() {
  try {
    await ensureUserExists();
    
    const services = await prisma.storeItem.findMany({
      where: { type: ItemType.MCP_SERVICE },
      orderBy: { createdAt: 'desc' },
      include: {
        mcp: true,
      }
    });
    
    return services;
  } catch (error) {
    console.error("获取MCP服务失败:", error);
    throw new Error("无法获取MCP服务");
  }
}

// 根据ID获取商店项目
export async function getStoreItemById(itemId: string) {
  try {
    await ensureUserExists();
    
    const item = await prisma.storeItem.findUnique({
      where: { id: itemId },
      include: {
        mcp: true,
      }
    });
    
    return item;
  } catch (error) {
    console.error("获取商店项目详情失败:", error);
    throw new Error("无法获取商店项目详情");
  }
}

// 从模板创建代理
export async function createAgentFromTemplate(templateId: string) {
  try {
    await ensureUserExists();
    
    // 获取模板详情
    const template = await prisma.storeItem.findUnique({
      where: { id: templateId },
    });
    
    if (!template || template.type !== ItemType.AGENT_TEMPLATE) {
      return { success: false, message: "无效的代理模板" };
    }
    
    // 解析模板配置
    const templateConfig = template.agentTemplate as any;
    
    // 创建新代理
    const agent = await prisma.agent.create({
      data: {
        name: template.name,
        description: template.description,
        status: 'STOPPED',
        systemPrompt: templateConfig?.systemPrompt,
        userId: CURRENT_USER_ID,
      }
    });
    
    // 如果模板包含MCP配置，也添加到新代理
    if (templateConfig?.mcps && Array.isArray(templateConfig.mcps)) {
      for (const mcpConfig of templateConfig.mcps) {
        await prisma.agentMcp.create({
          data: {
            agentId: agent.id,
            mcpId: mcpConfig.mcpId,
            configuration: mcpConfig.configuration || {},
          }
        });
      }
    }
    
    // 如果模板包含触发器配置，也添加到新代理
    if (templateConfig?.triggers && Array.isArray(templateConfig.triggers)) {
      for (const triggerConfig of templateConfig.triggers) {
        await prisma.trigger.create({
          data: {
            agentId: agent.id,
            type: triggerConfig.type,
            configuration: triggerConfig.configuration || {},
          }
        });
      }
    }
    
    revalidatePath('/agents');
    return { 
      success: true, 
      message: "已从模板创建代理", 
      agentId: agent.id 
    };
  } catch (error) {
    console.error("从模板创建代理失败:", error);
    return { success: false, message: "创建代理失败" };
  }
}

// 配置MCP服务
export async function configureMcpService(mcpServiceId: string) {
  try {
    await ensureUserExists();
    
    // 获取MCP服务详情
    const mcpService = await prisma.storeItem.findUnique({
      where: { id: mcpServiceId },
      include: { mcp: true }
    });
    
    if (!mcpService || mcpService.type !== ItemType.MCP_SERVICE || !mcpService.mcp) {
      return { success: false, message: "无效的MCP服务" };
    }
    
    // 这里可以添加MCP配置逻辑，比如生成API密钥等
    // 现在只是返回成功，实际应用中可能需要更多操作
    
    return { 
      success: true, 
      message: "MCP服务配置成功", 
      mcpId: mcpService.mcp.id 
    };
  } catch (error) {
    console.error("配置MCP服务失败:", error);
    return { success: false, message: "配置服务失败" };
  }
}

// 添加新商店项目（仅管理员）
export async function addStoreItem(data: {
  name: string;
  description?: string;
  details?: string;
  type: ItemType;
  creator: string;
  tags: string[];
  agentTemplate?: any;
  mcpId?: string;
}) {
  try {
    await ensureUserExists();
    
    // 这里应该检查用户是否为管理员
    // 现在简单模拟
    const isAdmin = true; // 实际应用中应从会话或数据库检查
    
    if (!isAdmin) {
      return { success: false, message: "无权添加商店项目" };
    }
    
    const item = await prisma.storeItem.create({
      data
    });
    
    revalidatePath('/store');
    return { success: true, message: "商店项目已添加", itemId: item.id };
  } catch (error) {
    console.error("添加商店项目失败:", error);
    return { success: false, message: "添加商店项目失败" };
  }
} 