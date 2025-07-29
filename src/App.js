import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu";
import AppRoutes from "./routes";
import Rodape from "components/Rodape";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <AppRoutes />
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
