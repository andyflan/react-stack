import React from 'react';


interface LayoutProps extends React.PropsWithChildren {}; // eslint-disable-line @typescript-eslint/no-empty-interface

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