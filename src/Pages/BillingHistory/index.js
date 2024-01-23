import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dummyList from "../../assets/DataJsons/BillingHistory.json";

function BillingHistory() {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerID } = location.state || {};

  const filteredList = dummyList.filter(
    (item) => parseInt(item.customerID) === parseInt(customerID)
  );

  return (
    <div>
      <div className="my-2 text-sm flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded bg-gray-800   text-white"
        >
          Back
        </button>
        <h2 className="text-center my-2 shadow-sm">
          Billing History of <b>{customerID}</b>
        </h2>
        <p></p>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-2 px-4 uppercase font-semibold text-sm">
                No.
              </th>
              <th className="text-left py-2 px-4 uppercase font-semibold text-sm">
                Date
              </th>
              <th className="text-left py-2 px-4 uppercase font-semibold text-sm">
               Type
              </th>
              <th className="text-left py-2 px-4 uppercase font-semibold text-sm">
                Debit{" "}
              </th>
              <th className="text-left py-2 px-4 uppercase font-semibold text-sm">
                Credit
              </th>
              <th className="text-left py-2 px-4 uppercase font-semibold text-sm">
                Balance
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredList.map((row, index) => (
              <tr key={index}>
                <td className="text-left py-3 px-4">{row.id}</td>
                <td className="text-left py-3 px-4">{row.date}</td>
                <td className="text-left py-3 px-4">{row.type}</td>
                <td className="text-left py-3 px-4">{row.debit}</td>
                <td className="text-left py-3 px-4">{row.credit}</td>
                <td className="text-left py-3 px-4">{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BillingHistory;
