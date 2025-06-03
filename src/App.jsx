import { Container } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
