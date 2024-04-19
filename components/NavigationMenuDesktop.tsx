import { INavigationData } from "@/models/NavigationsModels";
import { classNames } from "@/utils/css-utils";
import { useRouter } from "next/router";

interface INavigationMenuDesktopProps {
  item: INavigationData;
  isActive?: boolean;
}
const NavigationMenuDesktop = ({
  item,
  isActive = false,
}: INavigationMenuDesktopProps) => {
  const router = useRouter();

  return (
    <button
      key={item.name}
      onClick={(e) => {
        e.preventDefault();
        router.push(item.href);
      }}
      className={classNames(
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.name}
    </button>
  );
};

export default NavigationMenuDesktop;
