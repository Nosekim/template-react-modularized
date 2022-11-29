import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};
