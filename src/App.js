import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavbarComp";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Activities from "./components/Activities";
import Services from "./components/Services";
import Reservations from "./components/Reservation";
import Footer from "./components/Footer";
import {
  roomsInfo,
  imagesCaruosel,
  servicesInfo,
  activitiesInfo,
} from "./helpers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home images={imagesCaruosel} />} />
        <Route path="/habitaciones" element={<Rooms info={roomsInfo} />} />
        <Route
          path="/actividades"
          element={<Activities info={activitiesInfo} />}
        />
        <Route path="/servicios" element={<Services info={servicesInfo} />} />
        <Route path="/reservaciones" element={<Reservations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

