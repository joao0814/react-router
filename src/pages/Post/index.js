import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModel from "components/PostModel";
import ReactMarkdown from "react-markdown";
import "./Post.css";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => post.id === Number(parametros.id));

  const componentesMarkdown = {
    img: ({ src = "", alt = "" }) => {
      try {
        const nomeDoArquivo = src.split("/").pop();
        const imagem = require(`assets/posts/${post.id}/${nomeDoArquivo}`);
        return <img src={imagem} alt={alt} />;
      } catch {
        return (
          <span style={{ color: "red" }}>Imagem não encontrada: {src}</span>
        );
      }
    },
  };

  return (
    <PostModel
      fotoCapa={require(`assets/posts/${post.id}/capa.png`)}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown components={componentesMarkdown}>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostModel>
  );
}
