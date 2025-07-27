import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
