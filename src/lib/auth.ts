import { prisma } from "./prisma";

// 模拟当前用户ID，在实际应用中应该从会话或认证系统获取
export const CURRENT_USER_ID = '1';

// 确保当前用户存在的通用函数
export async function ensureUserExists() {
  try {
    // 检查用户是否存在
    const user = await prisma.user.findUnique({
      where: { id: CURRENT_USER_ID }
    });
    
    // 如果用户不存在，创建一个新用户
    if (!user) {
      await prisma.user.create({
        data: {
          id: CURRENT_USER_ID,
          username: 'default_user',
          email: 'default@example.com',
          currentPoints: 100,
          autoRecharge: false,
        }
      });
      console.log("已创建默认用户");
    }
    
    return user;
  } catch (error) {
    console.error("确保用户存在时出错:", error);
    throw new Error("用户初始化失败");
  }
}

// 获取当前用户信息，包括订阅
export async function getCurrentUser() {
  try {
    await ensureUserExists();
    
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