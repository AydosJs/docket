import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginContaine from "../containers/auth/LoginContaine";
import RegisterContaine from "../containers/auth/RegisterContaine";

const RoutesComtainter = () => {
  return (
    <BrowserRouter>
      <div style={{ zIndex: -9999999 }} className="absolute top-0 left-0 w-screen h-screen r-0 pattern-dots pattern-black pattern-bg-transparent pattern-opacity-5 pattern-size-2"></div>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>

        <Route path="/login" element={<LoginContaine />} />
        <Route path="/register" element={<RegisterContaine />} />

        <Route
          path="*"
          element={
            <main className="p-40 text-center">
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComtainter;