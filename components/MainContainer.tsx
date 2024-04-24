import { ReactNode } from "react";

interface IMainContainerProps {
  children: ReactNode;
}
const MainContainer = ({ children }: IMainContainerProps) => {
  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="flex-col rounded m-0 p-0 dark:bg-slate-800  shadow-inner px-2 py-1 ">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainContainer;
