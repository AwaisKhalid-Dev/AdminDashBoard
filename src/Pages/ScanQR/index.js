import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Html5QrcodeScanner } from "html5-qrcode";
import profile1 from "../../assets/images/profile1.jpeg";
import profile2 from "../../assets/images/profile2.jpeg";
import profile3 from "../../assets/images/profile3.jpeg";
import profile4 from "../../assets/images/profile4.jpeg";
import profile5 from "../../assets/images/profile5.jpeg";
import profile6 from "../../assets/images/profile6.jpeg";

function Dashboard() {
  const navigate = useNavigate();

  const [manualId, setManualId] = useState("");
  const [customerID, setCustomerID] = useState(null);
  const [scannedCode, setScannedCode] = useState("");
  const [inputMode, setInputMode] = useState("scanner");
  const [showTable, setShowTable] = useState(false);
  const [showScanner, setShowScanner] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const qrScannerRef = useRef(null);

  useEffect(() => {
    if (inputMode === "scanner" && showScanner) {
      qrScannerRef.current = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: 250 },
        false
      );
      qrScannerRef.current.render(onScanSuccess, onScanError);
    }

    // Cleanup function
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.clear();
        qrScannerRef.current = null;
      }
    };
  }, [inputMode, showScanner]);

  const isValidHttpUrl = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const isValidCustomerId = (id) => {
    return StaticData.some(
      (customer) => parseInt(customer.id) === parseInt(id)
    );
  };

  const ShowTable = () => {
    setShowTable(!showTable);
  };

  const handleInputChange = (e) => {
    setManualId(e.target.value);
    setErrorMessage("");
  };

  const handleGoClick = (e) => {
    if (!isValidCustomerId(manualId)) {
      setErrorMessage("Invalid ID. Please enter a valid ID.");
    } else {
      setCustomerID(manualId);
      setShowScanner(false);
      setErrorMessage("");
    }
  };

  const searchAnotherCustomer = () => {
    setCustomerID(null);
    setShowScanner(true);
    setShowTable(false);
    setInputMode("scanner");
    setManualId("");
    setScannedCode("");

    if (qrScannerRef.current) {
      qrScannerRef.current.clear();
      qrScannerRef.current.render(onScanSuccess, onScanError);
    }
  };

  const onScanSuccess = (decodedText) => {
    setScannedCode(decodedText);
    if (isValidHttpUrl(decodedText)) {
      window.location.href = decodedText;
    } else {
      setCustomerID(decodedText);
      setShowScanner(false);
      setShowTable(true);
    }
  };
  const onScanError = (error) => {
    console.error("Error scanning QR:", error);
    setErrorMessage("");
  };

  const handleViewBillingHistoryClick = (customerID) => {
    navigate("/billinghistory", { state: { customerID } });
  };

  const StaticData = [
    {
      id: 10267,
      name: "Harry",
      phone: "+60197054567",
      account: "233664",
      area: "51200 KUALA LAMPUR",
      profile: profile1,
    },

    {
      id: 20550,
      name: "John",
      phone: "+60198032355",
      account: "235634",
      area: "51200 KUALA LAMPUR",
      profile: profile2,
    },

    {
      id: 15689,
      name: "Vue",
      phone: "+60197054507",
      account: "100067",
      area: "51200 KUALA LAMPUR",
      profile: profile3,
    },

    {
      id: 40012,
      name: "Harry",
      phone: "+60199927653",
      account: "339269",
      area: "51200 KUALA LAMPUR",
      profile: profile4,
    },

    {
      id: 14452,
      name: "Poul",
      phone: "+60197054567",
      account: "135289",
      area: "51200 KUALA LAMPUR",
      profile: profile5,
    },

    {
      id: 99826,
      name: "Vicky",
      phone: "+60197054567",
      account: "098732",
      area: "51200 KUALA LAMPUR",
      profile: profile6,
    },
  ];

  const dummyList = [
    //customer 10267
    {
      id: 1,
      customerID: 10267,
      date: "10/1/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 0,
      balance: 180,
    },

    {
      id: 2,
      customerID: 10267,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 180,
      balance: 50,
    },
    {
      id: 3,
      customerID: 10267,
      date: "8/3/24",
      type: "Journal Adjustment",
      debit: 70,
      credit: 0,
      balance: 120,
    },
    {
      id: 4,
      customerID: 10267,
      date: "10/4/24",
      type: "Journal Adjustment",
      debit: 30,
      credit: 0,
      balance: 150,
    },
    {
      id: 5,
      customerID: 10267,
      date: "15/5/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 50,
      balance: 150,
    },
    {
      id: 6,
      customerID: 10267,
      date: "10/6/24",
      type: "Journal Adjustment",
      debit: 20,
      credit: 170,
      balance: 0,
    },
    {
      id: 7,
      customerID: 10267,
      date: "12/7/24",
      type: "Journal Adjustment",
      debit: 70,
      credit: 0,
      balance: 70,
    },
    {
      id: 8,
      customerID: 10267,
      date: "08/8/24",
      type: "Journal Adjustment",
      debit: 90,
      credit: 0,
      balance: 160,
    },
    {
      id: 9,
      customerID: 10267,
      date: "11/9/24",
      type: "Journal Adjustment",
      debit: 110,
      credit: 100,
      balance: 170,
    },
    {
      id: 10,
      customerID: 10267,
      date: "15/10/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 200,
      balance: 20,
    },

    //customer 20550

    {
      id: 1,
      customerID: 20550,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    {
      id: 2,
      customerID: 20550,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 3,
      customerID: 20550,
      date: "10/3/24",
      type: "Journal Adjustment",
      debit: 150,
      credit: 0,
      balance: 300,
    },
    {
      id: 4,
      customerID: 20550,
      date: "15/2/24",
      type: "Journal Adjustment",
      debit: 230,
      credit: 150,
      balance: 380,
    },
    {
      id: 5,
      customerID: 20550,
      date: "10/2/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 130,
      balance: 300,
    },
    {
      id: 6,
      customerID: 20550,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 7,
      customerID: 20550,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 8,
      customerID: 20550,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 9,
      customerID: 20550,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 10,
      customerID: 20550,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    //customer 15689

    {
      id: 1,
      customerID: 15689,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    {
      id: 2,
      customerID: 15689,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 3,
      customerID: 15689,
      date: "10/3/24",
      type: "Journal Adjustment",
      debit: 150,
      credit: 0,
      balance: 300,
    },
    {
      id: 4,
      customerID: 15689,
      date: "15/2/24",
      type: "Journal Adjustment",
      debit: 230,
      credit: 150,
      balance: 380,
    },
    {
      id: 5,
      customerID: 15689,
      date: "10/2/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 130,
      balance: 300,
    },
    {
      id: 6,
      customerID: 15689,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 7,
      customerID: 15689,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 8,
      customerID: 15689,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 9,
      customerID: 15689,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 10,
      customerID: 15689,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    //customer 40012

    {
      id: 1,
      customerID: 40012,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    {
      id: 2,
      customerID: 40012,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 3,
      customerID: 40012,
      date: "10/3/24",
      type: "Journal Adjustment",
      debit: 150,
      credit: 0,
      balance: 300,
    },
    {
      id: 4,
      customerID: 40012,
      date: "15/2/24",
      type: "Journal Adjustment",
      debit: 230,
      credit: 150,
      balance: 380,
    },
    {
      id: 5,
      customerID: 40012,
      date: "10/2/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 130,
      balance: 300,
    },
    {
      id: 6,
      customerID: 40012,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 7,
      customerID: 40012,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 8,
      customerID: 40012,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 9,
      customerID: 40012,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 10,
      customerID: 40012,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    //customer 14452

    {
      id: 1,
      customerID: 14452,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    {
      id: 2,
      customerID: 14452,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 3,
      customerID: 14452,
      date: "10/3/24",
      type: "Journal Adjustment",
      debit: 150,
      credit: 0,
      balance: 300,
    },
    {
      id: 4,
      customerID: 14452,
      date: "15/2/24",
      type: "Journal Adjustment",
      debit: 230,
      credit: 150,
      balance: 380,
    },
    {
      id: 5,
      customerID: 14452,
      date: "10/2/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 130,
      balance: 300,
    },
    {
      id: 6,
      customerID: 14452,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 7,
      customerID: 14452,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 8,
      customerID: 14452,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 9,
      customerID: 14452,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 10,
      customerID: 14452,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    //customer 99826

    {
      id: 1,
      customerID: 99826,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },

    {
      id: 2,
      customerID: 99826,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 3,
      customerID: 99826,
      date: "10/3/24",
      type: "Journal Adjustment",
      debit: 150,
      credit: 0,
      balance: 300,
    },
    {
      id: 4,
      customerID: 99826,
      date: "15/2/24",
      type: "Journal Adjustment",
      debit: 230,
      credit: 150,
      balance: 380,
    },
    {
      id: 5,
      customerID: 99826,
      date: "10/2/24",
      type: "Journal Adjustment",
      debit: 50,
      credit: 130,
      balance: 300,
    },
    {
      id: 6,
      customerID: 99826,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 7,
      customerID: 99826,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 8,
      customerID: 99826,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 9,
      customerID: 99826,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
    {
      id: 10,
      customerID: 99826,
      date: "12/2/24",
      type: "Journal Adjustment",
      debit: 180,
      credit: 180,
      balance: 150,
    },
  ];

  const filteredCustomerIndex = StaticData.findIndex(
    (item) => parseInt(item.id) === parseInt(customerID)
  );
  const filteredList = dummyList.filter(
    (item) => parseInt(item.customerID) === parseInt(customerID)
  );

  return (
    <div className="sm:p-5 p-0 mx-auto">
      <div
        className={`${
          !customerID && showScanner ? "screen-h" : ""
        } flex items-center justify-center`}
      >
        {!customerID && showScanner && (
          <div>
            <h2 className="md:text-lg text-md font-semibold my-5 text-wrap text-slate-500">
              Scan QR Or Enter Customer Id Manualy
            </h2>
            <div className="flex justify-center mb-4 ">
              <label className="inline-flex  mr-6">
                <input
                  type="radio"
                  className="form-radio w-5 h-5"
                  name="inputMode"
                  value="scanner"
                  checked={inputMode === "scanner"}
                  onChange={() => setInputMode("scanner")}
                />
                <span className="ml-2">Scan QR Code</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio w-6 h-5"
                  name="inputMode"
                  value="manual"
                  checked={inputMode === "manual"}
                  onChange={() => setInputMode("manual")}
                />
                <span className="ml-2">Manual Input</span>
              </label>
            </div>
            {inputMode === "scanner" ? (
              <div className="flex justify-center">
                <div id="qr-reader" className="w-[300px]"></div>
              </div>
            ) : (
              <div className="flex justify-center flex-col items-center">
                <input
                  type="text"
                  placeholder="Enter ID Here"
                  className="shadow border rounded py-2 px-3 text-gray-700 mb-2"
                  for
                  spacing
                  value={manualId}
                  onChange={handleInputChange}
                />

                {errorMessage && (
                  <div className="text-red-500 mb-2">{errorMessage}</div>
                )}

                <button
                  onClick={handleGoClick}
                  className="bg-blue-500 hover:bg-blue-700 h-[41px] w-[195px] text-white font-bold rounded"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {/*   <p>{scannedCode}</p> */}
      {/* table */}
      {/* profile */}
      <div className="w-full flex justify-center">
        {customerID && (
          <button
            onClick={searchAnotherCustomer}
            className="mx-auto bg-[#1f2937] rounded p-2.5 mt-2 text-sm shadow-sm text-white"
          >
            Search Another Customer
          </button>
        )}
      </div>
      {customerID && (
        <div class="flex items-center sm:w-auto w-full justify-center">
          <div class=" sm:w-[425px]  w-full">
            <div class="bg-white shadow-xl  rounded-lg py-3">
              <div class="photo-wrapper p-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src={StaticData[filteredCustomerIndex]?.profile || "N/A"}
                  alt="John Doe"
                />
              </div>
              <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                  {StaticData[filteredCustomerIndex]?.id || "N/A"}
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold"></div>
                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Name
                      </td>
                      <td class="px-4 py-2">
                        {StaticData[filteredCustomerIndex]?.name || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Phone No:
                      </td>
                      <td class="px-4 py-2">
                        {StaticData[filteredCustomerIndex]?.phone || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Account:
                      </td>
                      <td class="px-4 py-2">
                        {StaticData[filteredCustomerIndex]?.account || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Area:
                      </td>
                      <td class="px-4 py-2">
                        {StaticData[filteredCustomerIndex]?.area || "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="text-center my-3">
                  {/* <button
                    // onClick={ShowTable}
                    onClick={() => navigate('/billinghistory')}
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  >
                    {" "}
                    {showTable
                      ? "Hide Billing History"
                      : "View Billing History"}{" "}
                  </button> */}

                  <button
                    className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    onClick={() => handleViewBillingHistoryClick(customerID)}
                  >
                    View Billing History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;{/* profile */}
      {/* table */}
      {showTable && (
        <div className="overflow-x-auto">
          {/* <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  No.
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Date
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Billing Type
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Debit{" "}
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Credit
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
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
          </table> */}
        </div>
      )}
      {/* table */}
    </div>
  );
}

export default Dashboard;
