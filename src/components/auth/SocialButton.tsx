import React from 'react';

interface SocialButtonProps {
  icon: string;
  provider: string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, provider, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors mb-3"
      style={{ 
        backgroundColor: provider === 'Google' ? '#fff' : '#000',
        color: provider === 'Google' ? '#000' : '#fff'
      }}
    >
      <img src={icon} alt={provider} className="w-6 h-6" />
      <span>Sign in with {provider}</span>
    </button>
  );
};

export default SocialButton;