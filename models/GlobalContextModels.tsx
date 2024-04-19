import { Dispatch, SetStateAction } from "react";
import { INavigationData } from "./NavigationsModels";
import { IUser } from "./UserModels";

export interface IGlobalContextProps {
  navigations: INavigationData[];
  setNavigations: Dispatch<SetStateAction<INavigationData[]>>;
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}
