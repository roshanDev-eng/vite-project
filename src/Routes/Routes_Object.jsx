import Agent_Details from "../Pages/Contact/Agents/Agent_Details";
import Agent_Page from "../Pages/Contact/Agents/Agent_Page";
import Agent_Route from "../Pages/Contact/Agents/Agent_Route";
import All_Details from "../Pages/Files/All/All_Details";
import All_Route from "../Pages/Files/All/All_Route";
import All_Show from "../Pages/Files/All/All_Show";
import Listing_Details from "../Pages/Files/Listing/Listing_Details";
import Listing_Route from "../Pages/Files/Listing/Listing_Route";
import Listing_Show from "../Pages/Files/Listing/Listing_Show";
import Multiple_steps from "../Pages/Files/Listing/Multiple_steps";
import Multiple_steps_Offer from "../Pages/Files/Offer/Multiple_steps_Offer";
import { Listings_convert_ofer } from "../Pages/Files/Listing/Listings_convert_ofer";

import Offer_Details from "../Pages/Files/Offer/Offer_Details";
import Offer_Router from "../Pages/Files/Offer/Offer_Router";
import Offer_Show from "../Pages/Files/Offer/Offer_Show";
import Transaction_Details from "../Pages/Files/Transaction/Transaction_Details";
import Transaction_Route from "../Pages/Files/Transaction/Transaction_Route";
import Transaction_Show from "../Pages/Files/Transaction/Transaction_Show";

const Routes_Object = {
  Listing: {
    path: "Listings",
    element: <Listing_Route />,
    nested: [
      {
        path: "multiple_steps",
        element: <Multiple_steps />,
      },
      {
        path: "Listing_Show/details/:id",
        element: <Listing_Details />,
      },
      {
        path: "Listing_Show/Create/:id",
        element: <Listings_convert_ofer />,
      },
      {
        path: "Listing_Show",
        element: <Listing_Show />,
      },
    ],
  },
  Offer: {
    path: "Offers",
    element: <Offer_Router />,
    nested: [
      {
        path: "multiple_steps",
        element: <Multiple_steps_Offer />,
      },
      {
        path: "Offers_Show/details/:id",
        element: <Offer_Details />,
      },
      {
        path: "Offers_Show",
        element: <Offer_Show />,
      },
    ],
  },
  Transaction: {
    path: "Transactions",
    element: <Transaction_Route />,
    nested: [
      {
        path: "Transactions_Show/details/:id",
        element: <Transaction_Details />,
      },
      {
        path: "Transactions_Show",
        element: <Transaction_Show />,
      },
    ],
  },
  Agents: {
    path: "Agents",
    element: <Agent_Route />,
    nested: [
      {
        path: "Agents_Show/details/:id",
        element: <Agent_Details />,
      },
      {
        path: "Agents_Show",
        element: <Agent_Page />,
      },
    ],
  },
  All: {
    path: "All",
    element: <All_Route />,
    nested: [
      {
        path: "All_show/details/:id",
        element: <All_Details />,
      },
      {
        path: "All_show",
        element: <All_Show />,
      },
    ],
  },
};

export default Routes_Object;
export const routerarray = [
  Routes_Object.Listing,
  Routes_Object.Agents,
  Routes_Object.All,
  Routes_Object.Offer,
  Routes_Object.Transaction,
];
