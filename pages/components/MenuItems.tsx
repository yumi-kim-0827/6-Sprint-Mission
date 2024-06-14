import React from "react";
import Link from "next/link";

interface MenuItemsProps {
  menuData: { href: string; menuName: string }[];
}

const MenuItems: React.FC<MenuItemsProps> = ({ menuData }) => {
  return (
    <>
      {menuData.map((item, id) => {
        return (
          <li key={id}>
            <Link href={item.href}>{item.menuName}</Link>
          </li>
        );
      })}
    </>
  );
};

export default MenuItems;
