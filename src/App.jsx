import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainPeople from "./views/ContainPeople";
import Welcome from "./views/Welcome";
import ContainPlanet from "./views/ContainPlanet";
import DetailPeople from "./views/DetailPeople";
import DetailPlanet from "./views/DetailPlanet";
import { Container } from "@mui/material";

function App() {
  return (
      <BrowserRouter>
      <CssBaseline />
      <Container disableGutters maxWidth="xl" sx={{width:"100%"}}>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/people" element={<ContainPeople />} />
          <Route path="/planet" element={<ContainPlanet />} />
          <Route path="/people/:id" element={<DetailPeople />} />
          <Route path="/planet/:id" element={<DetailPlanet />} />
        </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;
