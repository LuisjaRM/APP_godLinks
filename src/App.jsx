import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./Root";
import { Home } from "./Pages/Home/Home";
import { LoginOrSignup } from "./Pages/LoginOrSignup/LoginOrSignup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<h1>Error Router</h1>}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginOrSignup />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
