'use client';

import React, { useState, useEffect } from 'react';
import { getCurrentSubscription, getAvailablePlans, updateSubscription } from './actions';
import { PlanType } from '@/app/generated/prisma';
import toast from 'react-hot-toast';

const SubscriptionPage = () => {
  const [currentSubscription, setCurrentSubscription] = useState<any>(null);
  const [availablePlans, setAvailablePlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [upgrading, setUpgrading] = useState(false);

  // 加载订阅数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subscription, plans] = await Promise.all([
          getCurrentSubscription(),
          getAvailablePlans()
        ]);
        
        setCurrentSubscription(subscription);
        setAvailablePlans(plans);
        setLoading(false);
      } catch (error) {
        console.error("加载数据失败:", error);
        toast.error("无法加载订阅信息");
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // 处理计划选择
  const handleChoosePlan = async (planType: PlanType) => {
    // 如果已经是当前计划，不执行任何操作
    if (currentSubscription?.planType === planType) {
      return;
    }
    
    try {
      setUpgrading(true);
      const result = await updateSubscription(planType);
      
      if (result.success) {
        toast.success(result.message);
        
        // 更新本地状态
        const selectedPlan = availablePlans.find(p => p.type === planType);
        setCurrentSubscription({
          ...currentSubscription,
          planType,
          dailyPoints: selectedPlan.dailyPoints,
          swapFee: selectedPlan.swapFee,
          startDate: new Date(),
          // 假设结束日期为一个月后
          endDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("升级计划失败:", error);
      toast.error("升级计划时出错");
    } finally {
      setUpgrading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  // 获取当前计划详情
  const currentPlanDetails = availablePlans.find(
    plan => plan.type === (currentSubscription?.planType || PlanType.FREE)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">订阅管理</h1>

      <section className="mb-8 p-6 card bg-base-100 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">当前计划</h2>
        {currentSubscription ? (
          <div>
            <p className="mb-2">您当前使用的是 <span className="font-bold">{currentPlanDetails?.name || '免费'}</span> 计划</p>
            <p className="mb-2">每日积分: <span className="font-bold">{currentSubscription.dailyPoints}</span></p>
            <p className="mb-2">交易费率: <span className="font-bold">{(currentSubscription.swapFee * 100).toFixed(1)}%</span></p>
            <p className="mb-2">
              有效期: {new Date(currentSubscription.startDate).toLocaleDateString()} 至 {
                currentSubscription.endDate 
                  ? new Date(currentSubscription.endDate).toLocaleDateString() 
                  : '永久'
              }
            </p>
          </div>
        ) : (
          <p>您当前使用的是免费计划。</p>
        )}
        <button className="btn btn-primary mt-4 max-w-xs" disabled={upgrading}>
          {upgrading ? <span className="loading loading-spinner loading-sm"></span> : '升级计划'}
        </button>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">可用计划</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {availablePlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`card bg-base-100 shadow-xl border ${
                currentSubscription?.planType === plan.type
                  ? 'border-primary'
                  : 'border-base-300'
              }`}
            >
              <div className="card-body">
                <h3 className="card-title">{plan.name}</h3>
                <p className="text-3xl font-bold">${plan.price}<span className="text-lg font-normal">/月</span></p>
                <ul className="list-disc list-inside space-y-1 text-sm mt-4 mb-6">
                  {plan.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="card-actions justify-end">
                  {currentSubscription?.planType === plan.type ? (
                    <button className="btn btn-disabled">当前计划</button>
                  ) : (
                    <button 
                      className="btn btn-primary" 
                      onClick={() => handleChoosePlan(plan.type)}
                      disabled={upgrading}
                    >
                      {upgrading ? <span className="loading loading-spinner loading-sm"></span> : `选择${plan.name}`}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;