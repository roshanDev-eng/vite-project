import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Custom_Buttons from "../../../Component/Layout/Custom_Button";
import Arrwo_button from "../../../Component/Layout/Arrwo_button";
import Pagination from "../../../Component/Layout/Pagination";
import Fileds from "../../../Globel_Arrays/Fileds";

const headers = [
  { label: Fileds.ID.label, key: Fileds.ID.key, source: "Offer_info" },
  {
    label: Fileds.Address.label,
    key: Fileds.Address.key,
    source: "Address",
    render: (address) =>
      `${address?.[Fileds.City.label] || "-"}, ${
        address?.[Fileds.Unit.label] || "-"
      }, ${address?.[Fileds.Province.label] || "-"}`,
  },
  {
    label: Fileds.OFFERDATE.label,
    key: Fileds.OFFERDATE.key,
    source: "Offer_info",
  },
  {
    label: Fileds.RELEASEDATE.label,
    key: Fileds.RELEASEDATE.key,
    source: "Offer_info",
  },
  {
    label: Fileds.Type.label,
    key: Fileds.Type.key,
    source: "Offer_info",
  },
  {
    label: Fileds.STATUS.label,
    key: Fileds.STATUS.key,
    source: "Offer_info",
  },
];

const Invoice_show = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const OfferArray = useSelector((state) => state.Listing_Offer.Offers);
  const ListingArray = useSelector((state) => state.Listing_Offer.Listings);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(OfferArray.length / itemsPerPage);
  const currentData = OfferArray.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(OfferArray[2], ListingArray[1]);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Offer Management</h1>
          <p className="text-sm text-gray-500">
            All property Offers are displayed below.
          </p>
        </div>
        <Link to={`../multiple_steps`}>
          <Custom_Buttons variant="primary" size="sm">
            New Offer
          </Custom_Buttons>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase font-semibold">
            <tr>
              {headers.map((h) => (
                <th key={h.key} className="px-6 py-3 text-left">
                  {h.label}
                </th>
              ))}
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentData.map((offer) => {
              // Determine address: own or from listing
              const address =
                offer.Address ||
                ListingArray.find((l) => l.Listing_id === offer.listingid)
                  ?.address;

              return (
                <tr key={offer.offerid} className="hover:bg-gray-50 transition">
                  {headers.map((h) => {
                    let value;

                    if (h.render) {
                      value = h.render(address);
                    } else {
                      value = offer[h.source]?.[h.key] ?? "-";
                    }

                    return (
                      <td key={h.key} className="px-6 py-4">
                        {value}
                      </td>
                    );
                  })}
                  <td className="px-6 py-4">
                    <Arrwo_button
                      Links={`details/${offer.offerid}`}
                      text={"Details"}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Invoice_show;
