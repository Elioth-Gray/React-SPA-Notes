import React from "react";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import ArchivedPage from "./pages/ArchivedPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Buku Catatan</h1>
        <Navigation></Navigation>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/archived"
            element={<ArchivedPage></ArchivedPage>}
          ></Route>
          <Route
            path="/details/:noteId"
            element={<DetailPage></DetailPage>}
          ></Route>
          <Route path="/add" element={<AddPage></AddPage>}></Route>
          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
