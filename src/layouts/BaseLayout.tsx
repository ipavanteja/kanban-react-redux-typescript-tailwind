import React, { ReactNode } from "react";
import Header from "../components/Header";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="p-8">
      {/* Heder Section */}
      <Header />
      {/* Main Content Section */}
      <div className="bg-white rounded-lg shadow">{children}</div>
    </div>
  );
};

export default BaseLayout;
