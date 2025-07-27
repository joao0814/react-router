import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ to, title }) {
  const localizacao = useLocation();

  return (
    <Link
      to={to}
      className={`${styles.link} ${
        localizacao.pathname === to ? styles.linkDestacado : ""
      }`}
    >
      {title}
    </Link>
  );
}
