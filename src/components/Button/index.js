import style from "./Button.module.css";

export default function Button({ children, onClick }) {
  return (
    <button className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
}
