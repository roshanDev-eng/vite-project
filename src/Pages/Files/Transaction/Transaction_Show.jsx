import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrwo_button from "../../../Component/Layout/Arrwo_button";
import Pagination from "../../../Component/Layout/Pagination";
import { useSelector } from "react-redux";

const headers = [
  { label: "ID", key: "id" },
  { label: "Street", key: "Street" },
  { label: "Unit", key: "Unit" },
  { label: "City", key: "City" },
  { label: "Postal Code", key: "Postal_Code" },
  { label: "Status", key: "Complete" },
];

const Transaction_Show = () => {
  const Transaction_show = useSelector(
    (state) => state.Listing_Offer.Transaction_array
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(Transaction_show.length / itemsPerPage);
  const currentData = Transaction_show.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Transaction Management
          </h1>
          <p className="text-sm text-gray-500">
            All property Transactions are displayed below.
          </p>
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
            {currentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
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
                    ) : (
                      item[h.key]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <Arrwo_button
                    Links={`details/${item.Transaction_id}`}
                    text={"Details"}
                  />
                </td>
              </tr>
            ))}
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

export default Transaction_Show;
