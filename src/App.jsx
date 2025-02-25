import { BrowserRouter, Routes,Route } from "react-router"
import Pro from "./pro"
import Modifier from "./modifier"
import Ajouter from "./ajouter"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pro></Pro>}></Route>
        <Route path="/modifier/:id" element={<Modifier></Modifier>}></Route>
        <Route path="/ajouter" element={<Ajouter></Ajouter>}></Route>
        <Route path="*" element={<h1 className="text-center text-[40px] font-bold oleo-script-bold">Erreur 404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
