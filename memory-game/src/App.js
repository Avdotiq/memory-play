import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./Pages/Game";
import Rules from "./Pages/Rules";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Rules />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    );
}

export default App;
