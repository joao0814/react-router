import style from "./Undefined.module.css";

export default function Undefined() {
  return (
    <>
      <div className={style.conteudoContainer}>
        <span className={style.texto404}>404</span>
        <h1 className={style.titulo}>Página não encontrada</h1>
        <p className={style.paragrafo}>
          Desculpe, a página que você está procurando não existe.
        </p>
        <div className={style.botaoContainer}>
          <button>Voltar para a página inicial</button>
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
