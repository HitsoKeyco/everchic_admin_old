import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import Links from "./utils/Links";
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Links />}/>
      </Routes>
    </div>
  );
}

export default App;
