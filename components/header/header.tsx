import HeaderNavigation from "./header-navigation";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <HeaderNavigation />
    </header>
  );
}

export default Header;
