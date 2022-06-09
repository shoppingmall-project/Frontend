import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ManagerPage from "./pages/ManagerPage";
import CommunityPage from "./pages/CommunityPage";
import WritingPage from "./pages/WritingPage";
import BoardPage from "./pages/BoardPage";

import { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("jwtToken") !== null) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <Router>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/products/:productid" element={<ProductPage />}></Route>
          <Route path="/manager" element={<ManagerPage />}></Route>
          <Route path="/manager/products" element={<ManagerPage />}></Route>
          <Route path="/manager/community" element={<ManagerPage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/community/writing" element={<WritingPage />}></Route>
          <Route path="/community/:id" element={<BoardPage />}></Route>
          <Route
            path="/login"
            element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}
          ></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
