import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";

interface IAppLayoutProps {
  children: ReactNode;
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <>
      <NavigationBar />
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default AppLayout;
