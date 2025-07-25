import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";

console.log(window.location);

const pagina = window.location.pathname === "/" ? <Inicio /> : <Sobre />;

function App() {
  return pagina;
}

export default App;
