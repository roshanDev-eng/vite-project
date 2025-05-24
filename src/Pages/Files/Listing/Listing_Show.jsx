import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrwo_button from "../../../Component/Layout/Arrwo_button";
import Pagination from "../../../Component/Layout/Pagination";
import Custom_Buttons from "../../../Component/Layout/Custom_Button";
import Fileds from "../../../Globel_Arrays/Fileds";
import { useSelector } from "react-redux";

const dataFromStore = [
  //   [Fileds.ID.key]
  //   [Fileds.Address.key]
  //   [Fileds.REGISTERED.key]
  //   [Fileds.EXPIRE.key]
  //   [Fileds.Type.key]
  //   [Fileds.STATUS.key]
  // Add more data...
];
const All_Show = () => {
  const Listing_slice = useSelector((state) => state.Listing_Offer.Listings);

  const headers = [
    { label: Fileds.ID.label, key: Fileds.ID.key, source: "Listinginfo" },
    {
      label: Fileds.Address.label,
      key: Fileds.Address.key,
      source: "address",
      render: (data) =>
        `${Fileds.City.key}, ${Fileds.Unit.label},${Fileds.Province.label}`,
    },
    {
      label: Fileds.REGISTRATION_DATE.label,
      key: Fileds.REGISTRATION_DATE.label,
      source: "Listinginfo",
    },
    {
      label: Fileds.EXPIRE.label,
      key: Fileds.EXPIRE.label,
      source: "Listinginfo",
    },
    { label: Fileds.Type.label, key: Fileds.Type.key, source: "Listinginfo" },
    {
      label: Fileds.STATUS.label,
      key: Fileds.STATUS.label,
      source: "Listinginfo",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(Listing_slice.length / itemsPerPage);
  const currentData = Listing_slice.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // console.log(Listing_slice[1].Listinginfo.Status);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Listing Management
          </h1>
          <p className="text-sm text-gray-500">
            All property listings are displayed below.
          </p>
        </div>
        <div>
          <Link to={`../multiple_steps`}>
            <Custom_Buttons
              onClick={onchange}
              disabled={""}
              variant="primary"
              size="sm"
            >
              New Listing
            </Custom_Buttons>
          </Link>
        </div>
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
            {currentData.map((item) => {
              console.log(item.Listinginfo.Status);
              return (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  {headers.map((h) => (
                    <td key={h.key} className="px-6 py-4">
                      {h.key === "Complete" ? (
                        item.Complete ? (
                          <span className="text-green-600 font-medium">
                            Complete
                          </span>
                        ) : (
                          <span className="text-yellow-600 font-medium">
                            Pending
                          </span>
                        )
                      ) : h.render ? (
                        `${item[h.source].City},${item[h.source].Unit},${
                          item[h.source].Province
                        }`
                      ) : (
                        item[h.source]?.[h.key] ?? "-"
                      )}
                    </td>
                  ))}
                  <td className="flex px-6 py-4">
                    <Arrwo_button
                      Links={`details/${item.Listing_id}`}
                      text={"Details"}
                    />
                    {item.Listinginfo.Status === "In progress" && (
                      <>
                        <div className="pl-5">
                          <Arrwo_button
                            Links={`Create/${item.Listing_id}`}
                            text={"Create"}
                          />
                        </div>
                      </>
                    )}
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

export default All_Show;
