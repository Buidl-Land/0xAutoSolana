'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { CURRENT_USER_ID, getCurrentUser, ensureUserExists } from "@/lib/auth";

// 获取当前用户信息
export async function getCurrentUser() {
  try {
    const user = await prisma.user.findUnique({
      where: { id: CURRENT_USER_ID },
      include: { subscription: true }
    });
    
    return user;
  } catch (error) {
    console.error("获取用户信息失败:", error);
    throw new Error("无法获取用户信息");
  }
}

// 更新用户基本信息
export async function updateUserProfile(data: {
  username?: string;
  systemPrompt?: string;
  iconUrl?: string;
}) {
  try {
    await ensureUserExists();
    
    // 过滤掉未定义的字段
    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );
    
    if (Object.keys(updateData).length === 0) {
      return { success: false, message: "没有提供更新数据" };
    }
    
    await prisma.user.update({
      where: { id: CURRENT_USER_ID },
      data: updateData,
    });
    
    revalidatePath('/setting');
    return { success: true, message: "用户资料已更新" };
  } catch (error) {
    console.error("更新用户资料失败:", error);
    return { success: false, message: "更新资料失败" };
  }
}

// 自动充值设置
export async function updateAutoRecharge(autoRecharge: boolean) {
  try {
    await ensureUserExists();
    
    await prisma.user.update({
      where: { id: CURRENT_USER_ID },
      data: { autoRecharge },
    });
    
    revalidatePath('/setting');
    return { success: true, message: "自动充值设置已更新" };
  } catch (error) {
    console.error("更新自动充值设置失败:", error);
    return { success: false, message: "更新设置失败" };
  }
}

// 模拟充值积分（实际实现可能涉及支付系统）
export async function rechargePoints(amount: number) {
  try {
    const user = await ensureUserExists();
    
    if (!user) {
      return { success: false, message: "用户不存在" };
    }
    
    await prisma.user.update({
      where: { id: CURRENT_USER_ID },
      data: { currentPoints: (user.currentPoints || 0) + amount },
    });
    
    revalidatePath('/setting');
    return { success: true, message: `已充值${amount}积分` };
  } catch (error) {
    console.error("充值积分失败:", error);
    return { success: false, message: "充值失败" };
  }
}

// 删除用户账户
export async function deleteUserAccount() {
  try {
    await ensureUserExists();
    
    await prisma.user.delete({
      where: { id: CURRENT_USER_ID },
    });
    
    return { success: true, message: "账户已删除" };
  } catch (error) {
    console.error("删除账户失败:", error);
    return { success: false, message: "删除账户失败" };
  }
} 