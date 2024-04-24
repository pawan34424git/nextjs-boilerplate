import { INavigationData } from "@/models/NavigationsModels";
import { classNames } from "@/utils/css-utils";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";

interface INavigationMenuProps {
  item: INavigationData;
  isActive?: boolean;
}
const NavigationMenu = ({ item, isActive = false }: INavigationMenuProps) => {
  const router = useRouter();
  return (
    <Disclosure.Button
      key={item.name}
      data-testid={"menu-button-" + item.name}
      as="button"
      onClick={(e) => {
        e.preventDefault();
        router.push(item.href);
      }}
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
