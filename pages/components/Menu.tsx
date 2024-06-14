import React from "react";
import styles from "@/pages/components/Header.module.scss";
import MenuItems from "@/pages/components/MenuItems";

interface MenuProps {
  menuData: { href: string; menuName: string }[];
}
const Menu: React.FC<MenuProps> = ({ menuData }) => {
  return (
    <ul className={styles.header_menu}>
      <MenuItems menuData={menuData} />
    </ul>
  );
};

export default Menu;
