import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Detail from "./Detail";
import Write from "./Write";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import Edit from "./Edit";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadUserDB } from "../redux/modules/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  useEffect(() => {
    async function load() {
      await dispatch(loadUserDB());
    }
    load();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/write/:id" element={<Write />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
