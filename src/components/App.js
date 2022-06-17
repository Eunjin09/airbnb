import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";
import Main from "./Main";
import Edit from "./Edit";
import Write from "./Write";
import Detail from "./Detail";

function App() {
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
    </div>
  );
}

export default App;
