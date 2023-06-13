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
import { AllOffers } from "./Pages/AllOffers/AllOffers";
import { DailyOffers } from "./Pages/DailyOffers/DailyOffers";
import { OffersByVotes } from "./Pages/OffersbyVotes/OffersbyVotes";
import { Favorite } from "./Pages/Favorite/Favorite";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<h1>Error Router</h1>}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginOrSignup />} />
      <Route path="allOffer" element={<AllOffers/>} />
      <Route path="daylioffer" element={<DailyOffers/>} />
      <Route path="offersByVotes" element={<OffersByVotes/>} />
      <Route path="favorites" element={<Favorite/>} />
      
      
      
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
