import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModel from "components/PostModel";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import Undefined from "pages/Undefined";
import DefaultPage from "components/DefaultPage";
import PostCard from "components/PostCard";

const POST_CONTENT = {
  recommendationsTitle: "Recommendations",
  imageNotFoundText: "Image not found:"
};

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => post.id === Number(parametros.id));

  if (!post) {
    return (
      <div className="post-not-found">
        <Undefined />
      </div>
    );
  }

  const recomendacoes = posts.filter((p) => p.id !== post.id).slice(0, 4);

  const componentesMarkdown = {
    img: ({ src = "", alt = "" }) => {
      try {
        const nomeDoArquivo = src.split("/").pop();
        const imagem = require(`assets/posts/${post.id}/${nomeDoArquivo}`);
        return <img src={imagem} alt={alt} />;
      } catch {
        return (
          <span style={{ color: "red" }}>{POST_CONTENT.imageNotFoundText} {src}</span>
        );
      }
    },
  };

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModel
              fotoCapa={require(`assets/posts/${post.id}/capa.png`)}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown components={componentesMarkdown}>
                  {post.texto}
                </ReactMarkdown>
              </div>
              <div className="recomendacoes">
                <h2>{POST_CONTENT.recommendationsTitle}</h2>
                <div className="recomendacoes__container">
                  {recomendacoes.map((postRecomendado) => (
                    <PostCard key={postRecomendado.id} post={postRecomendado} />
                  ))}
                </div>
              </div>
            </PostModel>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
