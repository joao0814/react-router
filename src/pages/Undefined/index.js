import Button from "components/Button";
import style from "./Undefined.module.css";
import Home from "pages/Home";
import { useNavigate } from "react-router-dom";

export default function Undefined() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.conteudoContainer}>
        <span className={style.texto404}>404</span>
        <h1 className={style.titulo}>Page Not Found</h1>
        <p className={style.paragrafo}>
          Sorry, but the page you are looking for does not exist.
        </p>
        <div className={style.botaoContainer}>
          <Button onClick={() => navigate(-1)}>Return to Home page</Button>
        </div>

        <img
          className={style.imagemCachorro}
          src={require("assets/erro_404.png")}
          alt="Erro 404"
        />
      </div>
      <div className={style.espacoEmBranco}></div>
    </>
  );
}
