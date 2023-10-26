import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import Path from "./pages/Path";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/paths" element={<Path />}>
          <Route index element={<FullStack />} />
          <Route path="fullstack" element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>
        <Route path="people/:id" element={<PersonDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
