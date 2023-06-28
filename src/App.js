import "./App.css";
import { Flex, Spacer } from "@chakra-ui/react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
