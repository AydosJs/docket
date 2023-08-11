import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import AuthContainer from "../containers/auth/AuthContainer";


const RoutesComtainter = () => {
  return (
    <BrowserRouter>
      <div style={{ zIndex: -9999999 }} className="absolute top-0 left-0 w-screen h-screen r-0 pattern-dots pattern-black pattern-bg-transparent pattern-opacity-5 pattern-size-2"></div>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>

        <Route path="/auth" element={<AuthContainer />}>
        </Route>

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