import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routing from "./routes/Routing";
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const [x] = useWindowSize();

  return (
    <BrowserRouter>
      <div className={"app"}>
        {x > 1000 ? <Navbar /> : null}

        <Routing />
      </div>
    </BrowserRouter>
  );
};

export default App;
