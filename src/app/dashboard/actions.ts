'use server';

import { prisma } from "@/lib/prisma";
import { CURRENT_USER_ID, ensureUserExists } from "@/lib/auth";

// 获取今日API调用计数
export async function getTodayApiCalls() {
  try {
    await ensureUserExists();
    
    // 获取今天的开始时间
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 计算今日日志数量作为API调用的估计
    const count = await prisma.log.count({
      where: {
        createdAt: {
          gte: today
        },
        agent: {
          userId: CURRENT_USER_ID
        }
      }
    });
    
    return count;
  } catch (error) {
    console.error("获取今日API调用失败:", error);
    throw new Error("无法获取API调用数据");
  }
}

// 获取今日消耗的积分
export async function getTodayPointsConsumed() {
  try {
    await ensureUserExists();
    
    // 这里应该根据实际的积分消耗规则计算
    // 现在简单假设每个API调用消耗0.5积分
    const apiCalls = await getTodayApiCalls();
    const pointsConsumed = Math.round(apiCalls * 0.5);
    
    return pointsConsumed;
  } catch (error) {
    console.error("获取积分消耗失败:", error);
    throw new Error("无法获取积分消耗数据");
  }
}

// 获取按调用数排名的代理
export async function getTopAgentsByApiCalls() {
  try {
    await ensureUserExists();
    
    // 获取今天的开始时间
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 查询每个代理的日志数量
    const agents = await prisma.agent.findMany({
      where: {
        userId: CURRENT_USER_ID
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            logs: {
              where: {
                createdAt: {
                  gte: today
                }
              }
            }
          }
        }
      },
      orderBy: {
        logs: {
          _count: 'desc'
        }
      },
      take: 5 // 只获取前5个
    });
    
    // 格式化结果
    return agents.map(agent => ({
      id: agent.id,
      name: agent.name,
      calls: agent._count.logs
    }));
  } catch (error) {
    console.error("获取排名前代理失败:", error);
    throw new Error("无法获取代理排名数据");
  }
} 