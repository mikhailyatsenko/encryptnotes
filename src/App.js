import About from "./components/About";
import Main from "./components/Main";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Error from "./components/Error";
import { Routes, Route, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note" element={<Note />} />
          <Route path="/note/:noteUrl" element={<Note />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
