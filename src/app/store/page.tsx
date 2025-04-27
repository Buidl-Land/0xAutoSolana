'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAgentTemplates, getMcpServices } from './actions';
import toast from 'react-hot-toast';

const StorePage = () => {
  const [publicAgents, setPublicAgents] = useState<any[]>([]);
  const [mcpServices, setMcpServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 加载商店数据
  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const [templates, services] = await Promise.all([
          getAgentTemplates(),
          getMcpServices()
        ]);
        
        setPublicAgents(templates);
        setMcpServices(services);
        setLoading(false);
      } catch (error) {
        console.error("加载商店数据失败:", error);
        toast.error("无法加载商店数据");
        setLoading(false);
      }
    };
    
    fetchStoreData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">商店</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">代理模板</h2>
        {publicAgents.length === 0 ? (
          <div className="card bg-base-100 shadow-xl p-4 text-center">
            <p>暂无可用的代理模板</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicAgents.map((agent) => (
              <Link key={agent.id} href={`/store/${agent.id}`} className="card bg-base-100 shadow-xl hover:bg-base-200 transition-colors duration-200 cursor-pointer block">
                <div className="card-body">
                  <div className="tooltip w-full" data-tip={agent.name}>
                    <h3 className="card-title text-lg line-clamp-2 min-h-12">{agent.name}</h3>
                  </div>
                  <p className="text-sm text-base-content/70 mb-2 flex-grow line-clamp-2">{agent.description || '无描述'}</p>
                  <div className="text-xs text-base-content/50 mt-auto pt-2 border-t border-base-300/50">
                    创建者: {agent.creator}
                  </div>
                  {agent.tags && agent.tags.length > 0 && (
                    <div className="flex gap-1 flex-wrap mt-2">
                      {agent.tags.map((tag: string, index: number) => (
                        <span key={index} className="badge badge-sm badge-outline">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">MCP 服务</h2>
        {mcpServices.length === 0 ? (
          <div className="card bg-base-100 shadow-xl p-4 text-center">
            <p>暂无可用的MCP服务</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mcpServices.map((mcp) => (
              <Link key={mcp.id} href={`/store/${mcp.id}`} className="card bg-base-100 shadow-xl hover:bg-base-200 transition-colors duration-200 cursor-pointer block">
                <div className="card-body">
                  <div className="tooltip w-full" data-tip={mcp.name}>
                    <h3 className="card-title text-lg line-clamp-2 min-h-12">{mcp.name}</h3>
                  </div>
                  <p className="text-sm text-base-content/70 mb-2 flex-grow line-clamp-2">{mcp.description || '无描述'}</p>
                  <div className="text-xs text-base-content/50 mt-auto pt-2 border-t border-base-300/50">
                    创建者: {mcp.creator}
                  </div>
                  {mcp.tags && mcp.tags.length > 0 && (
                    <div className="flex gap-1 flex-wrap mt-2">
                      {mcp.tags.map((tag: string, index: number) => (
                        <span key={index} className="badge badge-sm badge-outline">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default StorePage;