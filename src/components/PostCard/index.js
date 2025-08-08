import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import Button from "components/Button";

const POST_CARD_CONTENT = {
  buttonText: "Read",
  buttonAriaLabel: "Read post"
};

export default function PostCard({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
          <div className={styles.brilho}></div>
          <img
            className={styles.capa}
            src={require(`assets/posts/${post.id}/capa.png`)}
            alt={`Cover image for ${post.titulo}`}
            loading="lazy"
            decoding="async"
          />
          <h2 className={styles.titulo}>{post.titulo}</h2>
          <Button 
            onClick={() => console.log("Read post")}
            aria-label={`${POST_CARD_CONTENT.buttonAriaLabel}: ${post.titulo}`}
          >
            {POST_CARD_CONTENT.buttonText}
          </Button>
        </div>
      </Link>
    </>
  );
}
