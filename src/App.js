import logo from "./Resources/logo.png";
import "./App.css";
import { VscAccount } from "react-icons/vsc";
import SideBar from "./Components/SideBar";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip
);

function App() {
  const lineChartData = {
    labels: ["Account", "Billing", "Texation", "Maintenance", "Payments"],
    datasets: [
      {
        label: "Calls by day",
        data: [10000, 7000, 1000, 50, 3000],
        fill: false,
        backgroundColor: "rgb(78, 115, 223)",
        borderColor: "rgba(78, 115, 223, 0.7)",
      },
    ],
  };

  // Pie chart data
  const pieChartData = {
    labels: ["Accounts", "Queries", "Billing"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(55, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const tableRows = [
    {
      id: 1,
      customerName: "Caller1",
      number: "555-1234",
      accountId: "987654",
      callDuration: "2:15",
      download: "Link",
    },
    {
      id: 2,
      customerName: "Caller2",
      number: "555-1234",
      accountId: "987654",
      callDuration: "2:15",
      download: "Link",
    },
    {
      id: 3,
      customerName: "Caller3",
      number: "555-1234",
      accountId: "987654",
      callDuration: "2:15",
      download: "Link",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-3">
            <SideBar />
          </div>

          {/* Main Content */}
          <div className="col-md-8 ml-sm-auto col-lg-8 px-4">
            {/* Header */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <VscAccount size={40} />
              </div>
            </div>

            {/* Dashboard Widgets */}
            <div className="row my-3">
              <div className="col">
                <div className="alert alert-primary" role="alert">
                  <span>Total Calls 3000/minut</span>
                </div>
              </div>
              <div className="col">
                <div className="alert alert-success" role="alert">
                  <span>Solved 1000</span>
                </div>
              </div>
              <div className="col">
                <div className="alert alert-warning" role="alert">
                  Open 500
                </div>
              </div>
              <div className="col">
                <div className="alert alert-danger" role="alert">
                  Escalate 1500
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="row">
              <div className="col-12">
                <div className="container-fluid">
                  {/* Charts */}
                  <div className="row">
                    <div className="col-md-8">
                      <h4>Calls by enquiry</h4>
                      <Line data={lineChartData} />
                    </div>
                    <div className="col-md-4">
                      <h4>Total Calls This Week</h4>
                      <div className="h-75">
                        <Pie data={pieChartData} />
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="my-5">
                    <h2>Recent Calls</h2>
                    <div className="table-responsive">
                      <table className="table table-striped table-sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Number</th>
                            <th>Account #</th>
                            <th>Call Duration</th>
                            <th>Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableRows.map((row) => (
                            <tr key={row.id}>
                              <td>{row.id}</td>
                              <td>{row.customerName}</td>
                              <td>{row.number}</td>
                              <td>{row.accountId}</td>
                              <td>{row.callDuration}</td>
                              <td>{row.download}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
