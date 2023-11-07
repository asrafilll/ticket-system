"use client";
import { usePathname } from "next/navigation";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function DashboardLayoutNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      menu: "Dashboard",
      link: "/dashboard",
    },
    {
      menu: "Tickets",
      link: "/dashboard/ticket",
    },
    {
      menu: "Master Data",
      link: "/dashboard/masters",
    },
  ];

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: ["flex", "relative", "h-full", "items-center"],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/logo.png"
            width={120}
            height={10}
            alt="Picture of the author"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map((data, index) => {
          return (
            <NavbarItem>
              <Link
                key={index}
                color="foreground"
                href={data.link}
                className={`text-sm ${
                  pathname === data.link
                    ? "flex h-full font-semibold text-emerald-700 after:absolute after:content-[''] after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-[2px] after:bg-emerald-700"
                    : ""
                }`}
              >
                {data.menu}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="danger"
            href="#"
            variant="light"
            className="text-sm"
          >
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
