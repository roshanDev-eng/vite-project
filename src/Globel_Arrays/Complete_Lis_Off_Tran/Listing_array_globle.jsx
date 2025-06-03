import { setCombined } from "../../Redux_tolkit/All/Array_combain";
import Fileds from "../Fileds";

const Listing_array_globel = [
  {
    Listing_id: "L1",
    offerid: "O2",
    Listinginfo: {
      [Fileds.ID.key]: "a",
      [Fileds.Type.label]: "e",
      [Fileds.PRICE.label]: "g",
      [Fileds.MLS.label]: "g",
      [Fileds.STATUS.label]: "f",
      [Fileds.Commission_total.label]: "",
      [Fileds.Contract.label]: "",
      [Fileds.REGISTRATION_DATE.label]: "c",
      [Fileds.Commission.label]: "",
      [Fileds.BUILTYEAR.label]: "",
      [Fileds.EXPIRE.label]: "d",
    },
    address: {
      [Fileds.CATEGORY.label]: "",
      [Fileds.Country.label]: "",
      [Fileds.TYPE_address.label]: "",
      [Fileds.Province.label]: "province",
      [Fileds.Number.label]: "",
      [Fileds.City.label]: "city",
      [Fileds.Number_End.label]: "",
      [Fileds.City_Not_Listed.label]: "",
      [Fileds.Street.label]: "Street",
      [Fileds.Postal_Code.key]: "postal",
      [Fileds.Unit.label]: "unit",
    },
    Agents: [
      {
        agentId: "125",
        [Fileds.Name.key]: "najeeullah",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        agentId: "124",
        [Fileds.Name.key]: "ali",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
    Clients: [
      {
        clientId: "111",
        [Fileds.Name.key]: "murtaza",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        clientId: "222",
        [Fileds.Name.key]: "maz",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
  },
  {
    Listing_id: "L2",
    offerid: "",
    Listinginfo: {
      [Fileds.ID.key]: "a",
      [Fileds.Type.label]: "e",
      [Fileds.PRICE.label]: "g",
      [Fileds.MLS.label]: "g",
      [Fileds.STATUS.label]: "f",
      [Fileds.Commission_total.label]: "",
      [Fileds.Contract.label]: "",
      [Fileds.REGISTRATION_DATE.label]: "c",
      [Fileds.Commission.label]: "",
      [Fileds.BUILTYEAR.label]: "",
      [Fileds.EXPIRE.label]: "d",
    },
    address: {
      [Fileds.CATEGORY.label]: "",
      [Fileds.Country.label]: "",
      [Fileds.TYPE_address.label]: "",
      [Fileds.Province.label]: "province",
      [Fileds.Number.label]: "",
      [Fileds.City.label]: "city",
      [Fileds.Number_End.label]: "",
      [Fileds.City_Not_Listed.label]: "",
      [Fileds.Street.label]: "Street",
      [Fileds.Postal_Code.key]: "postal",
      [Fileds.Unit.label]: "unit",
    },
    Agents: [
      {
        agentId: "125",
        [Fileds.Name.key]: "najeeullah",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        agentId: "124",
        [Fileds.Name.key]: "ali",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
    Clients: [
      {
        clientId: "111",
        [Fileds.Name.key]: "murtaza",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        clientId: "222",
        [Fileds.Name.key]: "maz",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
  },
];
const Offer_array_globel = [
  {
    offerid: "O1",
    Listing_id: "",
    Offer_info: {
      [Fileds.Type.key]: "sale",
      [Fileds.OFFERDATE.key]: "21",
      [Fileds.PRICE_ASKING.key]: "40000",
      [Fileds.IRREVOCABILITY_DATE.key]: "31",
      [Fileds.OFFER_PRICE.key]: "3000",
      [Fileds.COMMISSIONCO_OP.key]: "",
      [Fileds.DEPOSIT.key]: "2000",
      [Fileds.Commission.key]: "20",
      [Fileds.RELEASEDATE.key]: "21",
      [Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.key]: "",
      [Fileds.ISCOMMISSIONINPERCENTAGE.key]: "",
    },
    address: {
      [Fileds.CATEGORY.label]: "",
      [Fileds.Country.label]: "",
      [Fileds.TYPE_address.label]: "",
      [Fileds.Province.label]: "provinceoo",
      [Fileds.Number.label]: "",
      [Fileds.City.label]: "cityoo",
      [Fileds.Number_End.label]: "",
      [Fileds.City_Not_Listed.label]: "",
      [Fileds.Street.label]: "street",
      [Fileds.Postal_Code.key]: "postal",
      [Fileds.Unit.label]: "unit",
    },
    Agents: [
      {
        agentId: "125",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        agentId: "124",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
    Clients: [
      {
        agentId: "125",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        agentId: "124",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
  },
  {
    address: {
      [Fileds.CATEGORY.label]: "",
      [Fileds.Country.label]: "",
      [Fileds.TYPE_address.label]: "",
      [Fileds.Province.label]: "provinceoo",
      [Fileds.Number.label]: "",
      [Fileds.City.label]: "cityoo",
      [Fileds.Number_End.label]: "",
      [Fileds.City_Not_Listed.label]: "",
      [Fileds.Street.label]: "street",
      [Fileds.Postal_Code.key]: "postal",
      [Fileds.Unit.label]: "unit",
    },
    offerid: "O2",
    Listing_id: "L1",
    Offer_info: {
      [Fileds.Type.key]: "sale",
      [Fileds.OFFERDATE.key]: "21",
      [Fileds.PRICE_ASKING.key]: "40000",
      [Fileds.IRREVOCABILITY_DATE.key]: "31",
      [Fileds.OFFER_PRICE.key]: "3000",
      [Fileds.COMMISSIONCO_OP.key]: "",
      [Fileds.DEPOSIT.key]: "2000",
      [Fileds.Commission.key]: "20",
      [Fileds.RELEASEDATE.key]: "21",
      [Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.key]: "",
      [Fileds.ISCOMMISSIONINPERCENTAGE.key]: "",
    },
  },
];
const Transaction_array = [
  {
    address: {
      [Fileds.CATEGORY.label]: "",
      [Fileds.Country.label]: "",
      [Fileds.TYPE_address.label]: "",
      [Fileds.Province.label]: "provinceoo",
      [Fileds.Number.label]: "",
      [Fileds.City.label]: "cityoo",
      [Fileds.Number_End.label]: "",
      [Fileds.City_Not_Listed.label]: "",
      [Fileds.Street.label]: "street",
      [Fileds.Postal_Code.key]: "postal",
      [Fileds.Unit.label]: "unit",
    },
    offerid: "O2",
    Listing_id: "L1",
    Transaction_id: `T1`,
    Loyers: [
      {
        agentId: "125",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        agentId: "124",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
    Agents: [
      {
        agentId: "125",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
        Trnsactionid: "T1",
      },
      {
        agentId: "124",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
        Trnsactionid: "T1",
      },
    ],
    Clients: [
      {
        clientId: "125",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
      {
        clientId: "124",
        [Fileds.Name.key]: "Akash",
        [Fileds.Type.key]: "seler",
        [Fileds.Commission.key]: "200",
        [Fileds.Iscommission.key]: "yes",
      },
    ],
    Offer_info: {
      [Fileds.Type.key]: "sale",
      [Fileds.OFFERDATE.key]: "21",
      [Fileds.PRICE_ASKING.key]: "40000",
      [Fileds.IRREVOCABILITY_DATE.key]: "31",
      [Fileds.OFFER_PRICE.key]: "3000",
      [Fileds.COMMISSIONCO_OP.key]: "",
      [Fileds.DEPOSIT.key]: "2000",
      [Fileds.Commission.key]: "20",
      [Fileds.RELEASEDATE.key]: "21",
      [Fileds.ISTHEBEINGSOLDDIRECTLYBYTHEOWNER.key]: "",
      [Fileds.ISCOMMISSIONINPERCENTAGE.key]: "",
    },
  },
];
export const combineListingsAndOffers = () => (dispatch, getState) => {
  const state = getState();

  const listings = state.Listing_Offer.Listings || [];
  const offers = state.Listing_Offer.Offers || [];

  const combined = [
    ...listings.map((item) => ({ ...item, type: "listing" })),
    ...offers.map((item) => ({ ...item, type: "offer" })),
  ];

  dispatch(setCombined(combined));
};
export default Listing_array_globel;
export { Offer_array_globel, Transaction_array };
