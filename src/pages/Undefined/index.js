import Button from "components/Button";
import style from "./Undefined.module.css";
import Home from "pages/Home";
import { useNavigate } from "react-router-dom";

const ERROR_CONTENT = {
  errorCode: "404",
  title: "Page Not Found",
  description: "Sorry, but the page you are looking for does not exist.",
  buttonText: "Return to Home page",
  imageAlt: "Error 404 illustration"
};

export default function Undefined() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.conteudoContainer}>
        <span className={style.texto404}>{ERROR_CONTENT.errorCode}</span>
        <h1 className={style.titulo}>{ERROR_CONTENT.title}</h1>
        <p className={style.paragrafo}>
          {ERROR_CONTENT.description}
        </p>
        <div className={style.botaoContainer}>
          <Button onClick={() => navigate("/")}>{ERROR_CONTENT.buttonText}</Button>
        </div>

      
      </div>
    </>
  );
}
