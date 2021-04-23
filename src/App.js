import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./App.scss";
import Logo from "./saitamaimages.png";

const App = ({...rest}) => {
    return (
        <div>
            <img src={Logo} alt="logo" />
            <h1>Hello Parcel warudo</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
