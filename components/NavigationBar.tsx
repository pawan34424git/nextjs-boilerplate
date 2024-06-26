import { INavigationData } from "@/models/NavigationsModels";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import NavigationMenu from "./NavigationMenu";
import NavigationMenuDesktop from "./NavigationMenuDesktop";
import ProfileMenu from "./ProfileMenu";

export interface INavigationBarProps {
  navigations: INavigationData[];
}
export interface ISMNavigationBarProps {
  open: boolean;
}

const NavigationBar = ({ navigations = [] }: INavigationBarProps) => {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }: ISMNavigationBarProps) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  data-testid="menu-button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.jpg"
                    alt="Ford Pro"
                  />
                </div>
                <div
                  className="hidden sm:ml-6 sm:block"
                  data-testid="desktop-screen-nav"
                >
                  <div className="flex space-x-4">
                    {navigations.map((item) => (
                      <NavigationMenuDesktop
                        key={item.href}
                        item={item}
                        isActive={item.href === router.pathname}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ProfileMenu></ProfileMenu>
              </div>
            </div>
          </div>

          <Disclosure.Panel
            className="sm:hidden"
            data-testid="small-screen-nav-parent"
          >
            <div
              data-testid="small-screen-nav"
              className="space-y-1 px-2 pb-3 pt-2"
            >
              {navigations.map((item) => (
                <NavigationMenu
                  item={item}
                  key={item.href}
                  isActive={item.href === router.pathname}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavigationBar;
