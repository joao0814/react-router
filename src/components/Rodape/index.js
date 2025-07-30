import styles from "./Rodape.module.css";
import marcaRegistrada from "assets/marca_registrada.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src={marcaRegistrada} alt="Marca Registrada" />
      <p>Todos os direitos reservados &copy; 2025</p>
    </footer>
  );
}
