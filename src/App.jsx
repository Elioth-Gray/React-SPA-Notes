import React from "react";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePageWrapper from "./pages/HomePage";
import ArchivedPageWrapper from "./pages/ArchivedPage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import AddPageWrapper from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Buku Catatan</h1>
        <Navigation></Navigation>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper></HomePageWrapper>}></Route>
          <Route
            path="/archived"
            element={<ArchivedPageWrapper></ArchivedPageWrapper>}
          ></Route>
          <Route
            path="/details/:noteId"
            element={<DetailPage></DetailPage>}
          ></Route>
          <Route
            path="/add"
            element={<AddPageWrapper></AddPageWrapper>}
          ></Route>
          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
