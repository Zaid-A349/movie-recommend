import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="px-8 md:px-20 max-w-7xl mx-auto w-full">
      {children}
    </div>
  );
};

export default Layout;