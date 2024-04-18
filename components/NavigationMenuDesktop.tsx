import { classNames } from "@/utils/css-utils";
import { INavigationData } from "./NavigationBar";

interface INavigationMenuDesktopProps {
  item: INavigationData;
  isActive?: boolean;
}
const NavigationMenuDesktop = ({
  item,
  isActive = false,
}: INavigationMenuDesktopProps) => {
  return (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.name}
    </a>
  );
};

export default NavigationMenuDesktop;
