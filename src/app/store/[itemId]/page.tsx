'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getStoreItemById, createAgentFromTemplate, configureMcpService } from '../actions';
import { ItemType } from '@/app/generated/prisma';
import toast from 'react-hot-toast';

const StoreItemDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const itemId = params?.itemId as string;
  
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  // 加载商店项目详情
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const data = await getStoreItemById(itemId);
        setItem(data);
        setLoading(false);
      } catch (error) {
        console.error("加载商店项目详情失败:", error);
        toast.error("无法加载商店项目详情");
        setLoading(false);
      }
    };
    
    if (itemId) {
      fetchItemDetails();
    }
  }, [itemId]);

  // 从模板创建代理
  const handleCreateAgentFromTemplate = async () => {
    if (!item || item.type !== ItemType.AGENT_TEMPLATE) return;
    
    try {
      setProcessing(true);
      const result = await createAgentFromTemplate(item.id);
      
      if (result.success) {
        toast.success(result.message);
        // 创建成功后重定向到新代理的详情页
        router.push(`/agents/${result.agentId}`);
      } else {
        toast.error(result.message);
        setProcessing(false);
      }
    } catch (error) {
      console.error("从模板创建代理失败:", error);
      toast.error("创建代理失败");
      setProcessing(false);
    }
  };

  // 配置MCP服务
  const handleConfigureMcpService = async () => {
    if (!item || item.type !== ItemType.MCP_SERVICE) return;
    
    try {
      setProcessing(true);
      const result = await configureMcpService(item.id);
      
      if (result.success) {
        toast.success(result.message);
        setProcessing(false);
        // 可以添加其他逻辑，例如显示配置弹窗或重定向
      } else {
        toast.error(result.message);
        setProcessing(false);
      }
    } catch (error) {
      console.error("配置MCP服务失败:", error);
      toast.error("配置服务失败");
      setProcessing(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  if (!item) {
    return <div className="text-center text-error p-10">商店项目不存在!</div>;
  }

  return (
    <div className="p-4">
      {/* 头部 */}
      <div className="mb-6">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <div className="badge badge-accent badge-outline mb-2">
              {item.type === ItemType.AGENT_TEMPLATE ? '代理模板' : 'MCP服务'}
            </div>
            <h1 className="text-3xl mb-1">{item.name}</h1>
            <p className="text-sm text-base-content/70">创建者：{item.creator}</p>
          </div>
          {item.type === ItemType.AGENT_TEMPLATE && (
            <button 
              className="btn btn-primary" 
              onClick={handleCreateAgentFromTemplate}
              disabled={processing}
            >
              {processing ? <span className="loading loading-spinner loading-sm"></span> : '添加到我的代理'}
            </button>
          )}
          {item.type === ItemType.MCP_SERVICE && (
            <button 
              className="btn btn-secondary" 
              onClick={handleConfigureMcpService}
              disabled={processing}
            >
              {processing ? <span className="loading loading-spinner loading-sm"></span> : '配置服务'}
            </button>
          )}
        </div>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex gap-2 flex-wrap">
            {item.tags.map((tag: string, index: number) => (
              <div key={index} className="badge badge-neutral">{tag}</div>
            ))}
          </div>
        )}
      </div>

      {/* 详情部分 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-2">描述</h2>
          <p className="mb-4">{item.description || '无描述'}</p>
          <h2 className="card-title mb-2">详细信息</h2>
          <p className="whitespace-pre-wrap font-mono text-sm">{item.details || '无详细信息'}</p>
          
          {/* MCP服务显示相关的MCP信息 */}
          {item.type === ItemType.MCP_SERVICE && item.mcp && (
            <div className="mt-4">
              <h2 className="card-title mb-2">关联的MCP</h2>
              <p><span className="font-semibold">MCP名称：</span> {item.mcp.name}</p>
              <p><span className="font-semibold">MCP类型：</span> {item.mcp.type}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <Link href="/store" className="btn btn-outline">&lt; 返回商店</Link>
      </div>
    </div>
  );
};

export default StoreItemDetailPage;