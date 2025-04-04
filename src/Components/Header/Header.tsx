import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@heroui/react";
import React from "react";
import { AcmeLogo, CartIcon, LightModeCartIcon, SearchIcon } from "./Logos";

interface HeaderProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (props: HeaderProps) => {
  return (
    <Navbar isBordered maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-4">
          <NavbarItem>
            <Link href="/ShoppingApp/" color="foreground">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              aria-current="page"
              color="foreground"
              href="/ShoppingApp/OurProducts"
            >
              Our Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/ShoppingApp/Checkout">
              Checkout
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-[300px] sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          style={{ display: "flex", maxWidth: "100px" }}
          placeholder="Type to search..."
          size="sm"
          startContent={
            <SearchIcon size={18} width={undefined} height={undefined} />
          }
          type="search"
        />
        <Button isIconOnly variant="bordered">
          {props.isDark ? <CartIcon /> : <LightModeCartIcon />}
        </Button>
        <Dropdown
          placement="bottom-end"
          classNames={{
            content: props.isDark ? "dark text-white " : "",
          }}
        >
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem
              key="darkmode"
              onClick={() => props.setIsDark(!props.isDark)}
            >
              <p>Change to {props.isDark ? "Light" : "Dark"} mode </p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
