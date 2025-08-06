import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import Button from "components/Button";

export default function PostCard({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
          <img
            className={styles.capa}
            src={require(`assets/posts/${post.id}/capa.png`)}
            alt="Imagem de capa do post"
          />
          <h2 className={styles.titulo}>{post.titulo}</h2>
          <Button onClick={() => console.log("Ler post")}>Ler</Button>
        </div>
      </Link>
    </>
  );
}
