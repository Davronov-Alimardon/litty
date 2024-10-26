import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto">
      {children}
    </div>
  );
};