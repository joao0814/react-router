import { NavLink, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ to, title }) {
  const localizacao = useLocation();

  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? styles.linkDestacado : styles.link
      }
    >
      {title}
    </NavLink>
  );
}
