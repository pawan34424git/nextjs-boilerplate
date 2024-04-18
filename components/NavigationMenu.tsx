import { classNames } from "@/utils/css-utils";
import { Disclosure } from "@headlessui/react";
import { INavigationData } from "./NavigationBar";

interface INavigationMenuProps {
  item: INavigationData;
  isActive?: boolean;
}
const NavigationMenu = ({ item, isActive = false }: INavigationMenuProps) => {
  return (
    <Disclosure.Button
      key={item.name}
      as="a"
      href={item.href}
      className={classNames(
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "block rounded-md px-3 py-2 text-base font-medium"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.name}
    </Disclosure.Button>
  );
};

export default NavigationMenu;
