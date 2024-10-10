import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Board from "./components/kanban/Board";
import BaseLayout from "./layouts/BaseLayout";
import Chat from "./routes/Chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <BaseLayout>
                <Board />
              </BaseLayout>
            }
          />
          <Route
            path="kanban"
            element={
              <BaseLayout>
                <Board />
              </BaseLayout>
            }
          />
          <Route
            path="chat"
            element={
              <BaseLayout>
                <Chat />
              </BaseLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
