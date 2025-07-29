import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src="/assets/marca_registrada.svg" alt="Marca Registrada" />
      <p>Todos os direitos reservados &copy; 2025</p>
    </footer>
  );
}
