import "./App.css";
import NavBar from "./components/navigation/NavBar";
import HomePage from "./pages/home/HomePage";
import BestAudio from "./components/best-audio/BestAudio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <BestAudio />
      <Footer />
    </>
  );
}

export default App;
