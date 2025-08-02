import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostModel from "components/PostModel";

export default function Post({}) {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  return (
    <PostModel
      fotoCapa={require(`assets/posts/${post.id}/capa.png`)}
      titulo={post.titulo}
    >
      {post.texto}
    </PostModel>
  );
}
