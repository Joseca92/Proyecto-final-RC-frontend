import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesDos from './routes/RoutesDos'
import ProtectedRoutes from './routes/PotectedRoutes'
import Login from './pages/Login'
import Registro from './pages/Registro'
import HomeScreen from './pages/HomeScreen'
function App() {

  return (
   <BrowserRouter>
    <Routes>
      {/* <Route path='/*' element={
        <RoutesDos/>
      }/> */}
      <Route path="/" element={HomeScreen}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
