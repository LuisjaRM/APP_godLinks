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
import { OfferById } from "./Pages/OfferById/OfferById";
import { NotFound } from "./Pages/NotFound/NotFound";
import { UserInfo } from "./Pages/UserInfo/UserInfo";
import { ResetPassword } from "./Pages/Recover&ResetPassword/ResetPassword";
import { RecoverPassword } from "./Pages/Recover&ResetPassword/RecoverPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<h1>Error Router</h1>}>
      <Route index element={<Home />} />
      <Route path="allOffers" element={<AllOffers />} />
      <Route path="offersByVotes" element={<OffersByVotes />} />
      <Route path="favorites" element={<Favorite />} />
      <Route path="offerById/:id" element={<OfferById />} />
      <Route path="userInfo/:id" element={<UserInfo />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="recoverPass" element={<RecoverPassword />} />
      <Route path="resetPass" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
