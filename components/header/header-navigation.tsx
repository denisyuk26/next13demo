"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";

const naviagtionList = [
  { name: "Main", path: "/" },
  { name: "Beer", path: "/beer" },
];

function HeaderNavigation() {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <>
      {naviagtionList.map((item) => {
        const isActive = active === item.path;
        return (
          <Link
            onClick={() => {
              setActive(item.path);
            }}
            className={`${styles.link} ${isActive && styles.linkActive}`}
            key={item.name}
            href={item.path}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
}

export default HeaderNavigation;
