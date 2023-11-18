import { About } from "./components/About";
import Header from "./components/Header";
import { Main } from "./components/Main";
import "../src/App.css";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-purple-200 w-screen  h-screen overflow-auto">
      <Header />
      <Main />
      <hr className=" solid border-1 m-4 border-black" />
      <About />
      <hr className=" solid border-1 m-4 border-black" />
      <Projects />
      <hr className=" solid border-1 m-4 border-black" />
      <Contact />
      <hr className=" solid border-1 m-4 border-black" />
      <Footer />
    </div>
  );
}

export default App;
