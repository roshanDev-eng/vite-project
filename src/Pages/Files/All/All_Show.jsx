import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrwo_button from "../../../Component/Layout/Arrwo_button";
import Pagination from "../../../Component/Layout/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { combineListingsAndOffers } from "../../../Globel_Arrays/Complete_Lis_Off_Tran/Listing_array_globle";

const headers = [
  { label: "Street", key: "Street" },
  { label: "Unit", key: "Unit" },
  { label: "City", key: "City" },
  { label: "Postal Code", key: "Postal_Code" },
  { label: "Status", key: "Complete" },
];

const All_Show = () => {
  const dispatch = useDispatch();
  const combined = useSelector((state) => state.All.combined);
  useEffect(() => {
    dispatch(combineListingsAndOffers());
  }, [dispatch]);
  console.log(combined);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(combined.length / itemsPerPage);
  const currentData = combined.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          All Files Management
        </h1>
        <p className="text-sm text-gray-500">
          All property listings, offers, and transactions are displayed below.
        </p>
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
            {currentData.map((item, index) => {
              return (
                <tr key={index} className="hover:bg-gray-50 transition">
                  {headers.map((h) => (
                    <td key={h.key} className="px-6 py-4">
                      {h.key === "Complete" ? (
                        item.address.Complete ? (
                          <span className="text-green-600 font-medium">
                            Complete
                          </span>
                        ) : (
                          <span className="text-yellow-600 font-medium">
                            Pending
                          </span>
                        )
                      ) : (
                        item.address[h.key]
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <Arrwo_button Links={`details/${index}`} text={"Details"} />
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
