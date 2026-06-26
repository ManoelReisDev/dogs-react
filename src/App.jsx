import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Photo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./Contexts/UserContext";
import ProtectedRoute from "./Components/Helpers/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
