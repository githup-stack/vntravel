import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "vntravel",
  description: "Welcome to vntravel",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
