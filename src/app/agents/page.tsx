"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAgents, createAgent, deleteAgent } from './actions';
import { AgentStatus } from '@/app/generated/prisma';
import toast from 'react-hot-toast';
import { PlusIcon, XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';

const AgentsPage = () => {
  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 新建代理的表单状态
  const [newAgentName, setNewAgentName] = useState('');
  const [newAgentDescription, setNewAgentDescription] = useState('');
  const [creatingAgent, setCreatingAgent] = useState(false);
  
  // Modal Refs
  const newAgentModalRef = React.useRef<HTMLDialogElement>(null);
  const deleteConfirmModalRef = React.useRef<HTMLDialogElement>(null);
  const [agentToDelete, setAgentToDelete] = useState<string | null>(null);

  // 加载代理列表
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();
        setAgents(data);
        setLoading(false);
      } catch (error) {
        console.error("加载代理列表失败:", error);
        toast.error("无法加载代理列表");
        setLoading(false);
      }
    };
    
    fetchAgents();
  }, []);

  // 打开新建代理模态框
  const handleOpenNewAgentModal = () => {
    setNewAgentName('');
    setNewAgentDescription('');
    newAgentModalRef.current?.showModal();
  };

  // 关闭新建代理模态框
  const handleCloseNewAgentModal = () => {
    newAgentModalRef.current?.close();
  };

  // 创建新代理
  const handleCreateAgent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newAgentName.trim()) {
      toast.error("请输入代理名称");
      return;
    }
    
    try {
      setCreatingAgent(true);
      
      const result = await createAgent({
        name: newAgentName.trim(),
        description: newAgentDescription.trim() || undefined,
      });
      
      if (result.success) {
        toast.success(result.message);
        
        // 添加新代理到列表
        const newAgent = {
          id: result.agentId,
          name: newAgentName,
          description: newAgentDescription,
          status: AgentStatus.STOPPED,
          updatedAt: new Date().toISOString(),
        };
        
        setAgents(prev => [newAgent, ...prev]);
        handleCloseNewAgentModal();
        
        // 可选：重定向到新代理详情页
        // router.push(`/agents/${result.agentId}`);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("创建代理失败:", error);
      toast.error("创建代理失败");
    } finally {
      setCreatingAgent(false);
    }
  };

  // 确认删除代理
  const handleConfirmDelete = (agentId: string) => {
    setAgentToDelete(agentId);
    deleteConfirmModalRef.current?.showModal();
  };

  // 关闭删除确认框
  const handleCloseDeleteModal = () => {
    deleteConfirmModalRef.current?.close();
    setAgentToDelete(null);
  };

  // 执行删除代理
  const handleDeleteAgent = async () => {
    if (!agentToDelete) return;
    
    try {
      const result = await deleteAgent(agentToDelete);
      
      if (result.success) {
        toast.success(result.message);
        
        // 从列表中移除被删除的代理
        setAgents(prev => prev.filter(agent => agent.id !== agentToDelete));
        handleCloseDeleteModal();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("删除代理失败:", error);
      toast.error("删除代理失败");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">我的代理</h1>
        <button className="btn btn-primary" onClick={handleOpenNewAgentModal}>
          <PlusIcon className="h-5 w-5 mr-1" />
          创建新代理
        </button>
      </div>

      {agents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-base-content/70 mb-4">您还没有创建任何代理</p>
          <button className="btn btn-primary" onClick={handleOpenNewAgentModal}>
            <PlusIcon className="h-5 w-5 mr-1" />
            创建第一个代理
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="tooltip w-full" data-tip={agent.name}>
                  <h2 className="card-title flex items-start gap-2 min-h-12">
                    <span className="line-clamp-2 flex-grow">{agent.name}</span>
                    <span className={`badge badge-sm ${
                      agent.status === 'RUNNING' ? 'badge-success' :
                      agent.status === 'STOPPED' ? 'badge-ghost' :
                      agent.status === 'ERROR' ? 'badge-error' : 'badge-neutral'
                    }`}>
                      {agent.status === 'RUNNING' ? '运行中' :
                       agent.status === 'STOPPED' ? '已停止' :
                       agent.status === 'ERROR' ? '错误' : agent.status}
                    </span>
                  </h2>
                </div>
                <p className="text-sm text-base-content/70 mb-2 line-clamp-2">{agent.description || '无描述'}</p>
                <div className="text-xs text-base-content/50 mt-2 pt-2 border-t border-base-300/50">
                  最后修改: {new Date(agent.updatedAt).toLocaleString()}
                </div>
                <div className="card-actions justify-between mt-4">
                  <button 
                    className="btn btn-sm btn-ghost text-error" 
                    onClick={() => handleConfirmDelete(agent.id)}
                  >
                    <TrashIcon className="h-4 w-4 mr-1" />
                    删除
                  </button>
                  <div>
                    <Link href={`/agents/${agent.id}`} passHref>
                      <button className="btn btn-sm btn-outline">详情</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 新建代理模态框 */}
      <dialog id="new_agent_modal" className="modal" ref={newAgentModalRef}>
        <div className="modal-box w-11/12 max-w-lg">
          <h3 className="font-bold text-lg mb-4">创建新代理</h3>
          
          <form onSubmit={handleCreateAgent}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">代理名称</span>
              </label>
              <input 
                type="text" 
                placeholder="输入代理名称"
                className="input input-bordered w-full" 
                value={newAgentName}
                onChange={(e) => setNewAgentName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">描述 (可选)</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-24" 
                placeholder="输入代理描述"
                value={newAgentDescription}
                onChange={(e) => setNewAgentDescription(e.target.value)}
              ></textarea>
            </div>
            
            <div className="modal-action">
              <button type="button" className="btn btn-ghost" onClick={handleCloseNewAgentModal}>取消</button>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={creatingAgent}
              >
                {creatingAgent ? <span className="loading loading-spinner loading-sm"></span> : '创建'}
              </button>
            </div>
          </form>
          
          <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={handleCloseNewAgentModal}
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5"/>
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>关闭</button>
        </form>
      </dialog>
      
      {/* 删除确认模态框 */}
      <dialog id="delete_confirm_modal" className="modal" ref={deleteConfirmModalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">确认删除</h3>
          <p className="py-4">
            您确定要删除这个代理吗？此操作无法撤销，所有与此代理相关的配置和日志将被永久删除。
          </p>
          <div className="modal-action">
            <button className="btn btn-ghost" onClick={handleCloseDeleteModal}>取消</button>
            <button className="btn btn-error" onClick={handleDeleteAgent}>
              <TrashIcon className="h-4 w-4 mr-1" />
              删除
            </button>
          </div>
          <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
            onClick={handleCloseDeleteModal}
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5"/>
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>关闭</button>
        </form>
      </dialog>
    </div>
  );
};

export default AgentsPage;