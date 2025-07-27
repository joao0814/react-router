import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/" title="Home" />
        <MenuLink to="/about" title="About" />
      </nav>
    </header>
  );
}
