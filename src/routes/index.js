import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Sobre from "../pages/Sobre";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/about" element={<Sobre />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
}
