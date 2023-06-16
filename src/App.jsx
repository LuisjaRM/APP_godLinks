import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Root } from "./Root";
import { Home } from "./Pages/Home/Home";
import { AllOffers } from "./Pages/AllOffers/AllOffers";
import { OffersByVotes } from "./Pages/OffersByVotes/OffersByVotes";
import { Favorite } from "./Pages/Favorite/Favorite";
import { UserProfile } from "./Pages/UserProfile/UserProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<h1>Error Router</h1>}>
      <Route index element={<Home />} />
      <Route path="allOffer" element={<AllOffers />} />
      <Route path="offersByVotes" element={<OffersByVotes />} />
      <Route path="favorites" element={<Favorite />} />
      <Route path="profile" element={<UserProfile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
