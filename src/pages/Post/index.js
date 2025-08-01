import { useParams } from "react-router-dom";

export default function Post({ post }) {
  const parametros = useParams();
  console.log("opa:", parametros);

  return (
    <div>
      <h2>Post {parametros.id}</h2>
      <button>Post {parametros.id}</button>
    </div>
  );
}
