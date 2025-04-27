"use client"; // Required for useState, useEffect, and DOM manipulation

import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react'; // Added useRef, ChangeEvent, FormEvent
import { PencilSquareIcon, XMarkIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'; // Import icons
import { getCurrentUser, updateUserProfile, updateAutoRecharge, rechargePoints, deleteUserAccount } from './actions';
import toast from 'react-hot-toast'; // 需要安装: npm install react-hot-toast

const SettingPage = () => {
  // 状态定义
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light'); // Default theme

  // 表单状态
  const [username, setUsername] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [iconFile, setIconFile] = useState<File | null>(null);
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  // State for Profile Edit Modal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const profileModalRef = useRef<HTMLDialogElement>(null);

  // State for Delete Confirmation Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteModalRef = useRef<HTMLDialogElement>(null);

  // 加载用户数据
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getCurrentUser();
        setUserData(user);
        
        // 初始化表单状态
        if (user) {
          setUsername(user.username || '');
          setSystemPrompt(user.systemPrompt || '');
          setIconUrl(user.iconUrl || '/logo.png');
        }
        
        setLoading(false);
      } catch (error) {
        console.error("加载用户数据失败:", error);
        toast.error("加载用户数据失败");
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

  // Profile Modal Handlers
  const handleOpenProfileModal = () => {
    profileModalRef.current?.showModal();
  };

  const handleCloseProfileModal = () => {
    profileModalRef.current?.close();
  };

  const handleProfileIconChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIconFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfileChanges = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      let uploadedIconUrl = iconUrl;
      
      // 这里应该处理图片上传到CDN或服务器，获取URL
      // 这是一个模拟实现
      if (iconFile) {
        // 实际项目中，这里应该上传文件到服务器/CDN
        uploadedIconUrl = URL.createObjectURL(iconFile);
        // 然后获取返回的URL
      }
      
      const result = await updateUserProfile({
        username,
        systemPrompt,
        iconUrl: uploadedIconUrl,
      });
      
      if (result.success) {
        toast.success("个人资料已更新");
        // 更新本地状态
        setUserData(prev => ({
          ...prev,
          username,
          systemPrompt,
          iconUrl: uploadedIconUrl,
        }));
        handleCloseProfileModal();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("保存个人资料失败:", error);
      toast.error("保存个人资料失败");
    }
  };

  // Delete Modal Handlers
  const handleOpenDeleteModal = () => {
    deleteModalRef.current?.showModal();
  };
  const handleCloseDeleteModal = () => {
    deleteModalRef.current?.close();
  };
  const handleConfirmDelete = async () => {
    try {
      const result = await deleteUserAccount();
      
      if (result.success) {
        toast.success("账户已删除");
        // 在实际应用中，应该重定向到登出或登录页面
        window.location.href = '/';
      } else {
        toast.error(result.message);
        handleCloseDeleteModal();
      }
    } catch (error) {
      console.error("删除账户失败:", error);
      toast.error("删除账户失败");
      handleCloseDeleteModal();
    }
  };

  // Effect to load theme from local storage and apply it
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light'; // Default to light if nothing stored
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  // Function to handle theme change
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // 自动充值设置
  const handleAutoRechargeChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const newValue = e.target.checked;
      const result = await updateAutoRecharge(newValue);
      
      if (result.success) {
        toast.success("自动充值设置已更新");
        setUserData(prev => ({
          ...prev,
          autoRecharge: newValue,
        }));
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("更新自动充值设置失败:", error);
      toast.error("更新设置失败");
    }
  };

  // 充值积分
  const handleRecharge = async () => {
    try {
      // 实际应用中，这里应该打开支付流程
      // 这里简单模拟充值100积分
      const result = await rechargePoints(100);
      
      if (result.success) {
        toast.success(result.message);
        // 更新本地状态
        setUserData(prev => ({
          ...prev,
          currentPoints: prev.currentPoints + 100,
        }));
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("充值失败:", error);
      toast.error("充值处理失败");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">设置</h1>

      {/* Account Section */}
      <section className="mb-8 p-6 card bg-base-100 shadow-xl">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">账户</h2>
            <button className="btn btn-outline btn-sm" onClick={handleOpenProfileModal}>
                <PencilSquareIcon className="h-4 w-4 mr-1" /> 编辑资料
            </button>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span id="username-label" className="label-text">用户名</span>
          </label>
          <input 
            id="username-input" 
            type="text" 
            value={userData?.username || ''} 
            readOnly 
            className="input input-bordered w-full max-w-md" 
            aria-labelledby="username-label" 
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span id="system-prompt-label" className="label-text">系统提示词</span>
          </label>
          <textarea
            id="system-prompt-input"
            className="textarea textarea-bordered h-24 w-full max-w-md"
            placeholder="输入系统提示词..."
            value={userData?.systemPrompt || ''}
            readOnly
            aria-labelledby="system-prompt-label"
          ></textarea>
        </div>
        
        {/* 用户图标显示 */}
        {userData?.iconUrl && (
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">用户图标</span>
            </label>
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={userData.iconUrl} alt="用户图标" />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Billing Section */}
      <section className="mb-8 p-6 card bg-base-100 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">充值</h2>
        <div className="flex items-center mb-4 gap-4 flex-wrap"> {/* Added flex-wrap */}
           <p>当前积分: <span className="font-bold">{userData?.currentPoints || 0}</span></p>
           <button className="btn btn-primary btn-sm" onClick={handleRecharge}>充值</button> {/* Added mock onClick */}
           {/* TODO: Implement recharge flow */}
        </div>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <span className="label-text">启用自动充值</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={userData?.autoRecharge || false}
              onChange={handleAutoRechargeChange}
            />
             {/* TODO: Add auto-recharge settings */}
          </label>
        </div>
      </section>

      {/* Appearance Section */}
      <section className="mb-8 p-6 card bg-base-100 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">外观</h2>
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <span className="label-text">深色模式</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
          </label>
        </div>
      </section>

      {/* Session Section */}
      <section className="p-6 card bg-base-100 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">账户管理</h2> {/* Changed section title */}
        {/* Updated Delete button to open modal */}
        <button className="btn btn-error w-full max-w-md" onClick={handleOpenDeleteModal}>删除账户</button>
         {/* TODO: Implement account deletion functionality */}
      </section>

     {/* Profile Edit Modal */}
     <dialog id="profile_edit_modal" className="modal" ref={profileModalRef}>
       <div className="modal-box w-11/12 max-w-lg">
         <h3 className="font-bold text-lg mb-4">编辑个人资料</h3>
         
         <form onSubmit={handleSaveProfileChanges}>
           <div className="form-control mb-4">
             <label className="label"><span className="label-text">用户名</span></label>
             <input 
               type="text" 
               value={username} 
               onChange={e => setUsername(e.target.value)}
               className="input input-bordered w-full" 
               required
             />
           </div>

           <div className="form-control mb-4">
             <label className="label"><span className="label-text">个人图标</span></label>
             <div className="flex items-center gap-4">
               <div className="avatar">
                 <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                   <img src={iconUrl || '/logo.png'} alt="个人图标预览" />
                 </div>
               </div>
               <label htmlFor="profile-icon-upload-modal" className="btn btn-outline btn-sm">
                 <ArrowUpTrayIcon className="h-4 w-4 mr-1" /> 上传图标
               </label>
               <input
                 id="profile-icon-upload-modal"
                 type="file"
                 className="hidden"
                 accept="image/*"
                 onChange={handleProfileIconChange}
               />
             </div>
           </div>

           <div className="form-control mb-4">
             <label className="label"><span className="label-text">系统提示词</span></label>
             <textarea
               className="textarea textarea-bordered h-24 w-full"
               placeholder="输入默认系统提示词..."
               value={systemPrompt}
               onChange={e => setSystemPrompt(e.target.value)}
             ></textarea>
           </div>

           <div className="modal-action mt-6">
             <button type="button" className="btn btn-ghost" onClick={handleCloseProfileModal}>取消</button>
             <button type="submit" className="btn btn-primary">保存</button>
           </div>
         </form>

         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseProfileModal} aria-label="Close">
           <XMarkIcon className="h-5 w-5"/>
         </button>
       </div>
       <form method="dialog" className="modal-backdrop"><button>close</button></form>
     </dialog>

     {/* Delete Account Confirmation Modal */}
     <dialog id="delete_account_modal" className="modal" ref={deleteModalRef}>
       <div className="modal-box">
         <h3 className="font-bold text-lg text-error">确认删除账户</h3>
         <p className="py-4">您确定要永久删除您的账户吗？此操作无法撤销。</p>
         <div className="modal-action">
           <button className="btn btn-ghost" onClick={handleCloseDeleteModal}>取消</button>
           <button className="btn btn-error" onClick={handleConfirmDelete}>删除账户</button>
         </div>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseDeleteModal} aria-label="Close">
           <XMarkIcon className="h-5 w-5"/>
         </button>
       </div>
        <form method="dialog" className="modal-backdrop"><button>close</button></form>
     </dialog>

   </div>

  );
};

export default SettingPage;