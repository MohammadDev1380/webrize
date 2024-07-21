import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home/home.page";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route index path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
