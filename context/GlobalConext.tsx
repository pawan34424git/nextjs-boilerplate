import { IGlobalContextProps } from "@/models/GlobalContextModels";
import { INavigationData } from "@/models/NavigationsModels";
import { IUser } from "@/models/UserModels";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const GlobalContext = createContext<IGlobalContextProps>({
  navigations: [],
  setNavigations: () => {},
  isLoggedIn: false,
  setLoggedIn: () => {},
  user: {},
  setUser: () => {},
});

export interface IGlobalContextWrapperProps {
  currentRoute: string;
}

const GlobalContextWrapper = ({
  children,
  currentRoute,
}: PropsWithChildren<IGlobalContextWrapperProps>): JSX.Element => {
  const [navigations, setNavigations] = useState<INavigationData[]>([]);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({});

  useEffect(() => {}, [currentRoute]);

  return (
    <GlobalContext.Provider
      value={{
        navigations,
        setNavigations,
        isLoggedIn,
        setLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;

export const useGlobalContext = () =>
  useContext<IGlobalContextProps>(GlobalContext);
