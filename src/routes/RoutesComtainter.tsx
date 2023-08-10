import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import AuthContainer from "../containers/auth/AuthContainer";


const RoutesComtainter = () => {
  return (
    <BrowserRouter>
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