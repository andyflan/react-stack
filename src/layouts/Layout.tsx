import React from 'react';
import { useNavigate } from "react-router-dom";


interface LayoutProps extends React.PropsWithChildren {};

export const Layout: React.FC<LayoutProps> = ({
  children,
}) => (
  <>
    <div className="bg-slate-200 py-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-black">This is the header</h1>
      </div>
    </div>

    <div className="container mx-auto">
      {children}
    </div>
  </>
);