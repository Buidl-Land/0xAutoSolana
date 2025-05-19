'use client'; // Needed for params and potentially state later

import React, { useState, useRef, useEffect, ChangeEvent } from 'react'; // Add useEffect
import AgentChat from '@/components/AgentChat'; // Import the new AgentChat component
import { PlusCircleIcon, PencilSquareIcon, TrashIcon, EyeIcon, XMarkIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'; // Import icons
import { getAgentById } from '../actions'; // Import the real data fetching function

// Define a simpler type for our agent data
type AgentData = {
  id: string;
  name: string;
  description: string | null;
  status: string;
  systemPrompt: string | null;
  iconUrl: string | null;
  mcps: Array<{
    id: string;
    mcp?: { name: string } | null;
    configuration?: Record<string, unknown> | null;
  }>;
  triggers: Array<{
    id: string;
    type: string;
    configuration: Record<string, unknown> | null;
  }>;
  logs: Array<{
    id: string;
    message: string;
    createdAt: string | Date;
  }>;
  [key: string]: unknown; // Allow additional properties
};

function AgentDetailPage({ params }: { params: { agentId: string } | Promise<{ agentId: string }> }) {
  // Unwrap the params Promise with React.use() before accessing agentId
  const unwrappedParams = params instanceof Promise ? React.use(params) : params;
  const agentId = unwrappedParams.agentId;
  
  // Add state for storing real agent data using a more general type
  const [agentData, setAgentData] = useState<AgentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch real agent data
  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        setLoading(true);
        const data = await getAgentById(agentId);
        setAgentData(data as AgentData);
        setError(null);
      } catch (err) {
        console.error("Error fetching agent:", err);
        setError("Failed to load agent data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchAgentData();
  }, [agentId]);
  
  const [activeTab, setActiveTab] = useState("details");
  
  // Refs for modals
  const agentModalRef = useRef<HTMLDialogElement>(null);
  const mcpModalRef = useRef<HTMLDialogElement>(null);
  const triggerModalRef = useRef<HTMLDialogElement>(null);
  const logModalRef = useRef<HTMLDialogElement>(null);
  
  // State for editing with proper types
  const [editingMcp, setEditingMcp] = useState<AgentData['mcps'][0] | null>(null);
  const [editingTrigger, setEditingTrigger] = useState<AgentData['triggers'][0] | null>(null);
  const [viewingLog, setViewingLog] = useState<AgentData['logs'][0] | null>(null);
  
  const handleOpenModal = () => {
    agentModalRef.current?.showModal();
  };

  const handleCloseAgentModal = () => {
    agentModalRef.current?.close();
  };

  const handleIconChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Handle icon change logic
      };
      reader.readAsDataURL(file);
    } else {
      // Handle no file selected
    }
  };

  // Mock save function
  const handleSaveChanges = () => {
    console.log("Mock Save: Agent details would be saved here.");
    handleCloseAgentModal();
  };

  // MCP Modal Handlers
  const handleOpenMcpModal = (mcp: AgentData['mcps'][0]) => {
    setEditingMcp(mcp);
    mcpModalRef.current?.showModal();
  };
  
  const handleCloseMcpModal = () => {
    mcpModalRef.current?.close();
    setEditingMcp(null);
  };
  
  const handleSaveMcpChanges = () => {
    console.log("Mock Save MCP:", editingMcp);
    handleCloseMcpModal();
  };

  // Trigger Modal Handlers
  const handleOpenTriggerModal = (trigger: AgentData['triggers'][0]) => {
    setEditingTrigger(trigger);
    triggerModalRef.current?.showModal();
  };
  
  const handleCloseTriggerModal = () => {
    triggerModalRef.current?.close();
    setEditingTrigger(null);
  };
  
  const handleSaveTriggerChanges = () => {
    console.log("Mock Save Trigger:", editingTrigger);
    handleCloseTriggerModal();
  };

  // Log Modal Handlers
  const handleOpenLogModal = (log: AgentData['logs'][0]) => {
    setViewingLog(log);
    logModalRef.current?.showModal();
  };
  
  const handleCloseLogModal = () => {
    logModalRef.current?.close();
    setViewingLog(null);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  
  // Show error state if any
  if (error || !agentData) {
    return (
      <div className="text-center text-error p-10">
        {error || "Agent not found!"}
      </div>
    );
  }

  // Render agent details only if agent exists
  return (
    <div className="p-4">
      {/* Header */}
      {/* Header with Edit Button */}
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-3xl mb-2">{agentData.name}</h1>
          <p className="text-base-content/70 mb-2">{agentData.description}</p>
          <span className={`badge badge-lg ${
              agentData.status === 'RUNNING' ? 'badge-success' :
              agentData.status === 'STOPPED' ? 'badge-ghost' :
              agentData.status === 'ERROR' ? 'badge-error' : 'badge-neutral'
        }`}>
            {agentData.status}
          </span>
        </div>
        <button className="btn btn-outline btn-sm" onClick={handleOpenModal}> {/* Corrected handler name */}
          <PencilSquareIcon className="h-4 w-4 mr-1" /> Edit Agent
        </button>
      </div>

      {/* Tab List */}
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <input id="tab-chat" type="radio" name="agent_tabs" role="tab" className="tab" aria-label="Chat" aria-controls="panel-chat" checked={activeTab === 'chat'} onChange={() => setActiveTab('chat')} />
        <input id="tab-mcp" type="radio" name="agent_tabs" role="tab" className="tab" aria-label="MCP" aria-controls="panel-mcp" checked={activeTab === 'mcp'} onChange={() => setActiveTab('mcp')} />
        <input id="tab-triggers" type="radio" name="agent_tabs" role="tab" className="tab" aria-label="Triggers" aria-controls="panel-triggers" checked={activeTab === 'triggers'} onChange={() => setActiveTab('triggers')} />
        <input id="tab-logs" type="radio" name="agent_tabs" role="tab" className="tab" aria-label="Logs" aria-controls="panel-logs" checked={activeTab === 'logs'} onChange={() => setActiveTab('logs')} />
        <input id="tab-settings" type="radio" name="agent_tabs" role="tab" className="tab" aria-label="Settings" aria-controls="panel-settings" checked={activeTab === 'settings'} onChange={() => setActiveTab('settings')} />
        {/* Add a dummy tab to make the border extend correctly for the last active tab */}
         <a role="tab" className="tab [--tab-border-color:transparent]"></a>
      </div>

      {/* Tab Panels (Rendered conditionally outside tablist) */}
      <div className="mt-[-1px]"> {/* Negative margin to visually connect panel with lifted tab */}
        {/* Chat Panel */}
        {activeTab === 'chat' && (
          <div id="panel-chat" role="tabpanel" aria-labelledby="tab-chat" className="bg-base-100 border-base-300 border rounded-box rounded-tl-none p-0"> {/* Removed padding p-6 */}
            <div className="h-[70vh]"> {/* Adjust height as needed */}
              <AgentChat agentName={agentData.name} />
            </div>
          </div>
        )}

        {/* MCP Panel */}
        {activeTab === 'mcp' && (
          <div id="panel-mcp" role="tabpanel" aria-labelledby="tab-mcp" className="bg-base-100 border-base-300 border rounded-box rounded-tl-none p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">MCP Configuration</h2>
              <button className="btn btn-primary btn-sm">
                <PlusCircleIcon className="h-4 w-4 mr-1" /> Add MCP
              </button>
              {/* TODO: Implement Add MCP */}
            </div>
            <p className="mb-4 text-base-content/70">Select and configure the MCP services this agent will use.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agentData.mcps && agentData.mcps.map((agentMcp: AgentData['mcps'][0]) => (
                <div key={agentMcp.id} className="card bg-base-200 shadow">
                  <div className="card-body p-4">
                    <h3 className="card-title text-lg">{agentMcp.mcp?.name || 'MCP'}</h3>
                    {/* Placeholder for MCP config details */}
                    <div className="card-actions justify-end mt-2">
                      {/* Updated MCP Edit Button onClick */}
                      <button className="btn btn-ghost btn-xs" aria-label={`Edit MCP ${agentMcp.mcp?.name || 'MCP'}`} onClick={() => handleOpenMcpModal(agentMcp)}><PencilSquareIcon className="h-4 w-4" /></button>
                      <button className="btn btn-ghost btn-xs text-error" aria-label={`Delete MCP ${agentMcp.mcp?.name || 'MCP'}`} onClick={() => alert(`Mock Delete MCP: ${agentMcp.mcp?.name || 'MCP'}`)}><TrashIcon className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Triggers Panel */}
        {activeTab === 'triggers' && (
          <div id="panel-triggers" role="tabpanel" aria-labelledby="tab-triggers" className="bg-base-100 border-base-300 border rounded-box rounded-tl-none p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Trigger Configuration</h2>
              <button className="btn btn-primary btn-sm">
                <PlusCircleIcon className="h-4 w-4 mr-1" /> Add Trigger
              </button>
              {/* TODO: Implement Add Trigger */}
            </div>
            <p className="mb-4 text-base-content/70">Define when this agent should run.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agentData.triggers && agentData.triggers.map((trigger: AgentData['triggers'][0], index: number) => (
                <div key={trigger.id || index} className="card bg-base-200 shadow">
                  <div className="card-body p-4">
                    <h3 className="card-title text-lg">{trigger.type}</h3>
                    {/* Display specific trigger details */}
                    <div className="text-sm mt-2 space-y-1">
                      {trigger.configuration && Object.entries(trigger.configuration).map(([key, value]) => (
                        <p key={key}>
                          <span className="font-semibold capitalize">{key}:</span>{' '}
                          <span className="opacity-80">{String(value)}</span>
                        </p>
                      ))}
                    </div>
                    <div className="card-actions justify-end mt-2">
                      {/* Updated Trigger Edit Button onClick */}
                      <button className="btn btn-ghost btn-xs" aria-label={`Edit Trigger ${trigger.type}`} onClick={() => handleOpenTriggerModal(trigger)}><PencilSquareIcon className="h-4 w-4" /></button>
                      <button className="btn btn-ghost btn-xs text-error" aria-label={`Delete Trigger ${trigger.type}`} onClick={() => alert(`Mock Delete Trigger: ${trigger.type}`)}><TrashIcon className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Logs Panel */}
        {activeTab === 'logs' && (
          <div id="panel-logs" role="tabpanel" aria-labelledby="tab-logs" className="bg-base-100 border-base-300 border rounded-box rounded-tl-none p-6">
            <h2 className="text-xl mb-4">Execution Logs</h2>
            <p className="mb-4 text-base-content/70">View the history of agent runs.</p>
            {/* Placeholder for Logs */}
            <div className="space-y-2">
              {agentData.logs && agentData.logs.map((log: AgentData['logs'][0]) => (
                <div key={log.id} className="card card-compact bg-base-200 shadow">
                  <div className="card-body flex-row justify-between items-center p-3">
                    <span className="text-xs font-mono">{new Date(log.createdAt).toLocaleString()}</span>
                    <p className="flex-grow px-4 text-sm">{log.message}</p>
                    <div className="card-actions">
                      {/* Updated Log View Button onClick */}
                      <button className="btn btn-ghost btn-xs" aria-label={`View Log Details ${log.id}`} onClick={() => handleOpenLogModal(log)}><EyeIcon className="h-4 w-4" /></button>
                      <button className="btn btn-ghost btn-xs text-error" aria-label={`Delete Log ${log.id}`} onClick={() => alert(`Mock Delete Log: ${log.id}`)}><TrashIcon className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Panel */}
        {activeTab === 'settings' && (
          <div id="panel-settings" role="tabpanel" aria-labelledby="tab-settings" className="bg-base-100 border-base-300 border rounded-box rounded-tl-none p-6">
            <h2 className="text-xl mb-4">Agent Settings</h2>
            {/* System Prompt */}
            <div className="form-control mb-4 max-w-md"> {/* Added max-w-md */}
              <label className="label">
                <span id="agent-system-prompt-label" className="label-text">System Prompt</span>
              </label>
              <textarea
                id="agent-system-prompt-input"
                className="textarea textarea-bordered h-24 w-full"
                placeholder="Enter agent-specific system prompt..."
                defaultValue={agentData.systemPrompt || ''}
                aria-labelledby="agent-system-prompt-label"
              ></textarea>
              {/* TODO: Implement saving */}
            </div>
            {/* Upload Icon */}
            <div className="form-control mb-4 max-w-md"> {/* Added max-w-md */}
              <label className="label">
                <span id="agent-icon-upload-label" className="label-text">Upload Agent Icon</span>
              </label>
              <input
                id="agent-icon-upload-input"
                type="file"
                className="file-input file-input-bordered w-full"
                aria-labelledby="agent-icon-upload-label"
                accept="image/*" // Accept only image files
              />
              {/* TODO: Implement upload logic */}
            </div>
            <button className="btn btn-primary max-w-md">Save Settings</button> {/* Added Save Button */}
            {/* TODO: Implement save settings */}
          </div>
        )}
      </div> {/* End of Tab Panels Container */}

      {/* Edit Agent Modal */}
      <dialog id="agent_edit_modal" className="modal" ref={agentModalRef}> {/* Updated ref */}
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg mb-4">Edit Agent Details</h3>

          {/* Form Fields */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Agent Name</span>
            </label>
            {/* Added nullish coalescing for safety */}
            <input type="text" defaultValue={agentData?.name ?? ''} className="input input-bordered w-full" />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full"
              // Added nullish coalescing for safety
              defaultValue={agentData?.description ?? ''}
            ></textarea>
          </div>

          {/* Icon Upload - Improved Styling */}
          <div className="form-control mb-4">
              <label className="label">
                  <span className="label-text">Agent Icon</span>
              </label>
              <div className="flex items-center gap-4">
                  {/* Circular Preview */}
                  <div className="avatar">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={agentData?.iconUrl || '/logo.png'} alt="Agent Icon Preview" /> {/* Fallback to default logo */}
                      </div>
                  </div>
                  {/* Upload Button */}
                  <label htmlFor="agent-icon-upload-input-modal" className="btn btn-outline btn-sm">
                      <ArrowUpTrayIcon className="h-4 w-4 mr-1" /> Upload Icon
                  </label>
                  <input
                      id="agent-icon-upload-input-modal"
                      type="file"
                      className="hidden" // Hide the default input
                      accept="image/*"
                      onChange={handleIconChange}
                  />
              </div>
          </div>


          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">System Prompt</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-32 w-full" // Increased height
              // Added nullish coalescing for safety
              defaultValue={agentData?.systemPrompt ?? ''}
            ></textarea>
          </div>


          {/* Agent Modal Actions */}
          <div className="modal-action mt-6">
            <button className="btn btn-ghost" onClick={handleCloseAgentModal}>Cancel</button> {/* Renamed handler */}
            <button className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
          </div>

          {/* Agent Modal Close button */}
           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseAgentModal} aria-label="Close"> {/* Renamed handler */}
              <XMarkIcon className="h-5 w-5"/>
           </button>
        </div>
         {/* Optional: Click backdrop to close */}
         <form method="dialog" className="modal-backdrop">
           <button>close</button>
         </form>
      </dialog>

      {/* MCP Edit Modal */}
      <dialog id="mcp_edit_modal" className="modal" ref={mcpModalRef}>
        <div className="modal-box w-11/12 max-w-lg">
          <h3 className="font-bold text-lg mb-4">Edit MCP Configuration</h3>
          {editingMcp && (
            <div>
              <div className="form-control mb-4">
                <label className="label"><span className="label-text">MCP Name</span></label>
                <input type="text" defaultValue={editingMcp.mcp?.name} className="input input-bordered w-full" />
              </div>
              {/* Enhanced MCP Fields */}
              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Variables (JSON)</span></label>
                <textarea className="textarea textarea-bordered h-24 w-full font-mono" placeholder='{\n  "apiKey": "YOUR_KEY",\n  "threshold": 0.5\n}'></textarea>
                {/* TODO: Add validation and actual data binding */}
              </div>
              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Allowed Operations (comma-separated)</span></label>
                <input type="text" placeholder="read_data, execute_trade" className="input input-bordered w-full" />
                 {/* TODO: Add actual data binding */}
              </div>
            </div>
          )}
          <div className="modal-action mt-6">
            <button className="btn btn-ghost" onClick={handleCloseMcpModal}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSaveMcpChanges}>Save MCP</button>
          </div>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseMcpModal} aria-label="Close">
            <XMarkIcon className="h-5 w-5"/>
          </button>
        </div>
        <form method="dialog" className="modal-backdrop"><button>close</button></form>
      </dialog>

      {/* Trigger Edit Modal */}
      <dialog id="trigger_edit_modal" className="modal" ref={triggerModalRef}>
        <div className="modal-box w-11/12 max-w-lg">
          <h3 className="font-bold text-lg mb-4">Edit Trigger Configuration</h3>
          {editingTrigger && (
            <div>
              <div className="form-control mb-4">
                 <label className="label"><span className="label-text">Trigger Type</span></label>
                 <input type="text" defaultValue={editingTrigger.type} readOnly className="input input-bordered w-full bg-base-200" />
              </div>
              {/* Dynamically render fields based on trigger type */}
              {Object.entries(editingTrigger).map(([key, value]) => {
                 if (key === 'type') return null; // Already shown
                 return (
                   <div key={key} className="form-control mb-4">
                     <label className="label"><span className="label-text capitalize">{key}</span></label>
                     <input type="text" defaultValue={String(value)} className="input input-bordered w-full" />
                   </div>
                 );
              })}
              {/* Enhanced Trigger Fields */}
               <div className="form-control mb-4">
                 <label className="label"><span className="label-text">Execution Statement</span></label>
                 <textarea className="textarea textarea-bordered h-24 w-full" placeholder="e.g., Check price and execute trade if condition met."></textarea>
                 {/* TODO: Add actual data binding */}
               </div>
               <div className="form-control mb-4">
                 <label className="label"><span className="label-text">Trigger Conditions (JSON)</span></label>
                 <textarea className="textarea textarea-bordered h-24 w-full font-mono" placeholder='{\n  "asset": "BTC",\n  "threshold": "-5%"\n}' defaultValue={JSON.stringify(Object.fromEntries(Object.entries(editingTrigger).filter(([k]) => k !== 'type')), null, 2)}></textarea>
                 {/* TODO: Add validation and actual data binding */}
               </div>
            </div>
          )}
          <div className="modal-action mt-6">
            <button className="btn btn-ghost" onClick={handleCloseTriggerModal}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSaveTriggerChanges}>Save Trigger</button>
          </div>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseTriggerModal} aria-label="Close">
            <XMarkIcon className="h-5 w-5"/>
          </button>
        </div>
        <form method="dialog" className="modal-backdrop"><button>close</button></form>
      </dialog>

      {/* Log Details Modal - Moved inside main div */}
      <dialog id="log_view_modal" className="modal" ref={logModalRef}>
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg mb-4">Log Details</h3>
          {viewingLog && (
            <div className="space-y-2">
              <p><span className="font-semibold">Timestamp:</span> {new Date(viewingLog.createdAt).toLocaleString()}</p>
              <div>
                <p className="font-semibold mb-1">Message:</p>
                <pre className="bg-base-200 p-3 rounded text-sm whitespace-pre-wrap break-words">
                  {viewingLog.message}
                </pre>
              </div>
              {/* Add more log details here if available */}
            </div>
          )}
          <div className="modal-action mt-6">
            <button className="btn" onClick={handleCloseLogModal}>Close</button>
          </div>
           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseLogModal} aria-label="Close">
            <XMarkIcon className="h-5 w-5"/>
          </button>
        </div>
        <form method="dialog" className="modal-backdrop"><button>close</button></form>
      </dialog>

    </div> // End of main container div
  );
}

export default AgentDetailPage;