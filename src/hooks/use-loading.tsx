import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  loadingMessage: string;
  startLoading: (message?: string) => void;
  stopLoading: () => void;
  isPageLoading: boolean;
  startPageLoading: () => void;
  stopPageLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [isPageLoading, setIsPageLoading] = useState(false);

  const startLoading = (message = 'Loading...') => {
    setIsLoading(true);
    setLoadingMessage(message);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setLoadingMessage('');
  };

  const startPageLoading = () => {
    setIsPageLoading(true);
  };

  const stopPageLoading = () => {
    setIsPageLoading(false);
  };

  const value: LoadingContextType = {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    isPageLoading,
    startPageLoading,
    stopPageLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};