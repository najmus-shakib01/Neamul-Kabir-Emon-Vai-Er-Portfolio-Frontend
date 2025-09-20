import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";

const App = () => {
  return (
      <div>
        <RouterProvider router={Routes} />
      </div>
  );
}

export default App;