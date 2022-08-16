import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Registro from "./pages/Registro";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesDos from "./routes/RoutesDos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesDos />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

