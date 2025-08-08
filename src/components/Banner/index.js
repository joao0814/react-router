import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";

const BANNER_CONTENT = {
  title: "Hi, I'm João Pedro",
  description: "Welcome to my website! I'm a developer who enjoys creating useful things with code. Currently learning more about React Router DOM."
};

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>{BANNER_CONTENT.title}</h1>

        <p className={styles.paragrafo}>
          {BANNER_CONTENT.description}
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="João Pedro's profile photo"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
