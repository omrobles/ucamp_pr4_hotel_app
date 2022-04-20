import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavbarComp";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";
import { roomsInfo, imagesCaruosel } from "./helpers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home images={imagesCaruosel} />} />
        <Route path="/habitaciones" element={<Rooms info={roomsInfo} />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/reservaciones" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

function Activities() {
  return <h1>Hola desde Activities</h1>;
}

function Services() {
  return <h1>Hola desde servicios</h1>;
}

function Contact() {
  return <h1>Hola desde contacto</h1>;
}

function Reservations() {
  return <h1>Hola desde reservaciones</h1>;
}
