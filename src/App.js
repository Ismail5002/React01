import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

// import Dialogs from "./Components/DIalog/Dialog";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Settings from "./Components/Settings/Settings";
import New from "./Components/New/New";
import Music from "./Components/Music/Music";
import FindUsers from "./Components/FindUsers/FindUsers";
import BestFriends from "./Components/friends/Friends";
import Dialoges from "./Components/DIalog/Dialogrender";
import { Router, Routes } from "react-router";
import { store } from "./Redux/Redux-store/Redux-store";
import { Provider } from "react-redux";

const App = (props) => {
  // const location = useLocation();
  console.log(props, "app.js");
  // const location = useLocation();
  // console.log(location);
  return (
    <div class="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/Profile" element={() => <Profile />} />
          <Route path="/Dialogs" element={() => <Dialoges />} />
          <Route path="/New" element={() => <New />} />
          <Route path="/Music" element={() => <Music />} />
          <Route path="/FindUsers" element={() => <FindUsers />} />
          <Route path="/Settings" element={() => <Settings />} />
          <Route path="/Friends" element={() => <BestFriends />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// path - КУДА ИМПОРТИРУЕМ И componen - ЧТО ИМПОРТИРУЕМ
