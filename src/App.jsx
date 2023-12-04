import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRouters } from "./components/ProtectedRouters";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRouters />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
