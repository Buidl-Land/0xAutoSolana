'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { PlanType } from "@/app/generated/prisma";
import { CURRENT_USER_ID, ensureUserExists } from "@/lib/auth";

// 获取当前用户订阅信息
export async function getCurrentSubscription() {
  try {
    const user = await ensureUserExists();
    
    // 重新查询以获取订阅信息
    const userWithSub = await prisma.user.findUnique({
      where: { id: CURRENT_USER_ID },
      include: { subscription: true }
    });
    
    return userWithSub?.subscription;
  } catch (error) {
    console.error("获取订阅信息失败:", error);
    throw new Error("无法获取订阅信息");
  }
}

// 获取所有可用订阅计划
export async function getAvailablePlans() {
  // 这里可以从数据库获取计划数据，但目前使用硬编码的数据
  const plans = [
    {
      id: "free",
      type: PlanType.FREE,
      name: "免费",
      price: 0,
      dailyPoints: 30,
      features: ["30点数每日", "仅支持定时触发器", "交易费用: 1%"],
      swapFee: 0.01,
    },
    {
      id: "pro",
      type: PlanType.PRO,
      name: "专业版",
      price: 20,
      dailyPoints: 150,
      features: ["150点数每日", "支持更多触发器", "交易费用: 0.8%"],
      swapFee: 0.008,
    },
    {
      id: "elite",
      type: PlanType.ELITE,
      name: "精英版",
      price: 50,
      dailyPoints: 500,
      features: ["500点数每日", "支持所有触发器", "交易费用: 0.5%"],
      swapFee: 0.005,
    }
  ];
  
  return plans;
}

// 更新用户订阅计划
export async function updateSubscription(planType: PlanType) {
  try {
    const user = await ensureUserExists();
    
    if (!user) {
      return { success: false, message: "用户不存在" };
    }
    
    // 获取选择的计划详情
    const plans = await getAvailablePlans();
    const selectedPlan = plans.find(p => p.type === planType);
    
    if (!selectedPlan) {
      return { success: false, message: "无效的订阅计划" };
    }
    
    // 计算订阅结束日期（假设1个月）
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    
    // 重新查询以获取最新的订阅信息
    const userWithSub = await prisma.user.findUnique({
      where: { id: CURRENT_USER_ID },
      include: { subscription: true }
    });
    
    // 如果用户已有订阅，则更新；否则创建新订阅
    if (userWithSub?.subscription) {
      await prisma.subscription.update({
        where: { id: userWithSub.subscription.id },
        data: {
          planType,
          startDate: new Date(),
          endDate,
          dailyPoints: selectedPlan.dailyPoints,
          swapFee: selectedPlan.swapFee,
        }
      });
    } else {
      await prisma.subscription.create({
        data: {
          userId: CURRENT_USER_ID,
          planType,
          startDate: new Date(),
          endDate,
          dailyPoints: selectedPlan.dailyPoints,
          swapFee: selectedPlan.swapFee,
        }
      });
    }
    
    revalidatePath('/subscription');
    return { success: true, message: `已成功升级到${selectedPlan.name}计划` };
  } catch (error) {
    console.error("更新订阅失败:", error);
    return { success: false, message: "更新订阅失败" };
  }
} 