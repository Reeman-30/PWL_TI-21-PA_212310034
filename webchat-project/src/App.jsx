import { BrowserRouter } from "react-router-dom";
import LayoutInit from "./components/LayoutInit";
import BaseRoute from "./apps/BaseRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ basename }) {
  return (
    <BrowserRouter>
      <LayoutInit>
        <BaseRoute />
      </LayoutInit>
    </BrowserRouter>
  );
}
