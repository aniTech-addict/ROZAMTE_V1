import React from 'react';

interface LoadingAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const dotSize = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Three dots positioned in a triangular formation */}
        <div
          className={`absolute ${dotSize[size]} bg-current rounded-full opacity-60`}
          style={{
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'loading-bounce-1 1.4s ease-in-out infinite both'
          }}
        />
        
        <div
          className={`absolute ${dotSize[size]} bg-current rounded-full opacity-60`}
          style={{
            bottom: '0',
            left: '20%',
            animation: 'loading-bounce-2 1.4s ease-in-out infinite both'
          }}
        />
        
        <div
          className={`absolute ${dotSize[size]} bg-current rounded-full opacity-60`}
          style={{
            bottom: '0',
            right: '20%',
            animation: 'loading-bounce-3 1.4s ease-in-out infinite both'
          }}
        />
      </div>
    </div>
  );
};

export default LoadingAnimation;