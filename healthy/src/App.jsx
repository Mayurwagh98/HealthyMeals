import "./App.css";
import { Meals } from "./Components/Meals";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Login } from "./Components/Login";
import { Order } from "./Components/OrderPage";
import { Error } from "./Components/Error";
import { Payment } from "./Components/Payment";

function App() {
  return (
    <div className="App" >
      {/* <div > */}
        <Navbar />
      {/* </div> */}
      {/* <div className="body_div"> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/meals" element={<Meals />} />
          {/* <Route exact path="/signup" element={<Signup />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
