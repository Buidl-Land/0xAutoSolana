'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTodayApiCalls, getTodayPointsConsumed, getTopAgentsByApiCalls } from './actions';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const [todayCalls, setTodayCalls] = useState<number | null>(null);
  const [pointsConsumed, setPointsConsumed] = useState<number | null>(null);
  const [topAgents, setTopAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 加载仪表盘数据
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [calls, points, agents] = await Promise.all([
          getTodayApiCalls(),
          getTodayPointsConsumed(),
          getTopAgentsByApiCalls()
        ]);
        
        setTodayCalls(calls);
        setPointsConsumed(points);
        setTopAgents(agents);
        setLoading(false);
      } catch (error) {
        console.error("加载仪表盘数据失败:", error);
        toast.error("无法加载仪表盘数据");
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">仪表盘</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 今日API调用卡片 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">今日API调用</h2>
            <p className="text-4xl font-bold">{todayCalls || 0}</p>
          </div>
        </div>

        {/* 今日消耗积分卡片 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">今日消耗积分</h2>
            <p className="text-4xl font-bold">{pointsConsumed || 0}</p>
          </div>
        </div>
      </div>

      {/* 排名前代理部分 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">代理排名 (今日调用次数)</h2>
          {topAgents.length === 0 ? (
            <div className="text-center py-4 text-base-content/70">
              暂无数据
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-zebra table-sm">
                <thead>
                  <tr>
                    <th>排名</th>
                    <th>代理名称</th>
                    <th>调用次数</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {topAgents.map((agent, index) => (
                    <tr key={agent.id}>
                      <th>{index + 1}</th>
                      <td>{agent.name}</td>
                      <td>{agent.calls}</td>
                      <td>
                        <Link href={`/agents/${agent.id}`}>
                          <button className="btn btn-xs btn-outline">详情</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;