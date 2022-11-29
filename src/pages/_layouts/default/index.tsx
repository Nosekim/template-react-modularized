import React from "react";
import { Content } from "../../../components/Content";
import { Header } from "../../../components/Header";
import { Sidemenu } from "../../../components/Sidemenu";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="w-sreen h-screen bg-slate-100 relative flex">
      <Sidemenu />
      <main className="w-full flex flex-col">
        <Header />
        <Content>{children}</Content>
      </main>
    </div>
  );
};
