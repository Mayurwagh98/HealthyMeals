import "./App.css";
import { Meals } from "./Components/Meals";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
// import {Signup} from "./Components/Signup"

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          dispaly: "block",
          width: "100%",
          backgroundColor: "#FAF8F1",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/meals" element={<Meals />} />
          {/* <Route exact path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
