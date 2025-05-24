import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading_Component from "../../../Component/Heading/Heading_Component";
import Multiple_input from "../../../Component/input/multiple_input";
import Short_Components from "../../../Component/Show_component/Show_component";
import Heading from "../../../Globel_Arrays/Heading";
import input_Heading from "../../../Globel_Arrays/Input_Heading";
import Icons from "../../../Component/Icons/Icons";
import { useSelector } from "react-redux";
import Fileds from "../../../Globel_Arrays/Fileds";

const All_Details = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  // this is input Heading data
  const combined = useSelector((state) => state.All.combined);
  const data = combined[Number(id)];
  const Listing_Offer = combined.filter(
    (item) => item.Listing_id === data.Listing_id
  );

  //find which is opiton or tick
  const fieldTypes = input_Heading.All_Heading.fieldHeadings.map((heading) =>
    input_Heading.All_Heading.optionBasedFields.includes(heading)
      ? "options"
      : "text"
  );
  //conver to object
  const fieldOptions = input_Heading.All_Heading.fieldHeadings.map(
    (heading) => {
      const opts =
        {
          Category: ["Residential", "Commercial"],
          Type: ["Sale", "Lease"],
          City: ["Toronto", "Ottawa", "Vancouver"],
          Complete: ["Yes", "No"],
          Closed: ["Closed", "Open"],
        }[heading] || [];

      return opts.map((o) => ({ label: o, value: o }));
    }
  );
  const LISTING = [
    {
      MLS: [Listing_Offer[0]?.Listinginfo][0]?.MLS,
      PRICE: [Listing_Offer[0]?.Listinginfo][0]?.Price,
      REGISTERED: "",
      EXPIRE: [Listing_Offer[0]?.Listinginfo][0]?.Expire,
      CREATED: "",
      TYPE: [Listing_Offer[0]?.Listinginfo][0]?.Type,
      STATUS: [Listing_Offer[0]?.Listinginfo][0]?.Status,
    },
  ];

  const OFFER = [
    {
      [Fileds.PRICE.key]:
        Listing_Offer[Listing_Offer.length - 1]?.Offer_info?.OFFER_PRICE,
      [Fileds.DEPOSIT.key]:
        Listing_Offer[Listing_Offer.length - 1]?.Offer_info?.DEPOSIT,
      [Fileds.RELEASEDATE.key]:
        Listing_Offer[Listing_Offer.length - 1]?.Offer_info?.RELEASEDATE,
      [Fileds.STATUS.key]:
        Listing_Offer[Listing_Offer.length - 1]?.Offer_info?.Type,
      [Fileds.CONDITION.key]:
        Listing_Offer[Listing_Offer.length - 1]?.Offer_info
          ?.ISCOMMISSIONINPERCENTAGE,
      [Fileds.POSITION.key]: "",
    },
  ];
  const TRANSACTION = [
    {
      NUMBER: "001",
      PRICE: "50000",
      OFFERDATE: "2025-04-15",
      CLOSING: "3000",
      CREATED: "new",
      TYPE: "50000",
      STATUS: "50000",
    },
  ];
  const [dataMap, setDataMap] = useState({
    LISTING: LISTING,
    OFFER: OFFER,
    TRANSACTION: TRANSACTION,
  });
  useEffect(() => {
    const updatedMap = {
      LISTING: [],
      OFFER: [],
      TRANSACTION: [],
    };
    if (data?.Listing_id) {
      updatedMap.LISTING = LISTING;
    }

    if (data?.offerid) {
      updatedMap.OFFER = OFFER;
    }

    setDataMap(updatedMap);
  }, [data]);
  const All_Heading = [Heading.LISTING, Heading.OFFER, Heading.TRANSACTION];
  const handleInputChange = (e) => {};
  const handleEditClick = ({ key }) => {
    if (key === "LISTING") {
      navigation(`/Listings/Listing_Show/details/${data?.Listing_id}`);
    }
    if (key === "OFFER") {
      navigation(`/Offers/Offers_Show/details/${data?.offerid}`);
    }
  };
  return (
    <div className="flex">
      <div className="w-[90%]">
        <Heading_Component ui="All" text={`Details for `} />

        <Multiple_input
          onchange={handleInputChange}
          value={data.address}
          heading={input_Heading.All_Heading.fieldHeadings}
          Array={input_Heading.All_Heading.fieldKeys}
          type={fieldTypes}
          options={fieldOptions}
          row="grid-cols-3"
          cols="col-span-3"
        />

        {All_Heading.map((section, idx) => (
          <Short_Components
            key={idx}
            Cols={section.cols}
            Array_H={section.fields.map((f) => f.label)}
            Array_V={dataMap[section.key]?.map((row, index) => (
              <div
                key={index}
                className={`bg-white mb-2 grid ${section.cols} p-2 relative`}
              >
                {section.fields.map((f, i) => (
                  <div key={i}>{row[f.key] ?? "-"}</div>
                ))}
                <button
                  onClick={() =>
                    handleEditClick({ key: section.key, row, index })
                  }
                  className="absolute top-2 right-2  text-black px-2 py-1 rounded cursor-pointer text-sm"
                >
                  <Icons.edit className="text-xl text-gray-600" />
                </button>
              </div>
            ))}
            Size={section.size}
            Button={section.edit}
            Heading={section.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default All_Details;
