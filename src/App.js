import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavbarComp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<Rooms />} />
        <Route path="/actividades" element={<Activities />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

function Home() {
  return <h1>Hola desde Home</h1>;
}

function Rooms() {
  return <h1>Hola desde rooms</h1>;
}

function Activities() {
  return <h1>Hola desde Activities</h1>;
}

function Services() {
  return <h1>Hola desde servicios</h1>;
}

function Contact() {
  return <h1>Hola desde contacto</h1>;
}
