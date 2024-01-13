import "./App.css";
import { VscAccount } from "react-icons/vsc";
import Navbar from "./Components/Navbar";
 import SidePannel from "./Components/SidePannel";
import Card from "./Components/Card";
import LineGraph from "./Components/Graphs/LineGraph";
import PieGraph from "./Components/Graphs/PieGraph";
import Table from "./Components/Table";
// import { Line, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );
function App() {
  // const lineChartData = {
  //   labels: ["Account", "Billing", "Texation", "Maintenance", "Payments"],
  //   datasets: [
  //     {
  //       label: "Calls by department",
  //       data: [10000, 7000, 1000, 50, 3000],
  //       fill: false,
  //       backgroundColor: "rgb(78, 115, 223)",
  //       borderColor: "rgba(78, 115, 223, 0.7)",
  //     },
  //   ],
  // };

  // // Pie chart data
  // const pieChartData = {
  //   labels: ["Accounts", "Queries", "Billing"],
  //   datasets: [
  //     {
  //       data: [300, 50, 100],
  //       backgroundColor: [
  //         "rgba(55, 162, 235, 0.5)",
  //         "rgba(255, 206, 86, 0.5)",
  //         "rgba(255, 99, 132, 0.5)",
  //       ],
  //       borderColor: [
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(255, 99, 132, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const tableRows = [
  //   {
  //     id: 1,
  //     customerName: "Caller1",
  //     number: "555-1234",
  //     accountId: "987654",
  //     callDuration: "2:15",
  //     download: "Link",
  //   },
  //   {
  //     id: 2,
  //     customerName: "Caller2",
  //     number: "555-1234",
  //     accountId: "987654",
  //     callDuration: "2:15",
  //     download: "Link",
  //   },
  //   {
  //     id: 3,
  //     customerName: "Caller3",
  //     number: "555-1234",
  //     accountId: "987654",
  //     callDuration: "2:15",
  //     download: "Link",
  //   },
  // ];

  return (
    <>
      <div className="container-fluid bg-body">
        <div className="row position-relative">
          {/* Sidebar */}
         <div class="min-height-100 bg-gradiant-primary position-absolute w-100"></div>
          <div  className="wth-20">
           <SidePannel/>
          </div>
          <div  className="wth-80">
            <Navbar/>
            <Card/>
            <div className="row d-flex justify-content-around my-5">
              <div className="col-7 b-rounded-lg p-2 bg-white">
            <LineGraph/>
            </div>
            <div className="col-4 b-rounded-lg p-2 bg-white">
            <PieGraph/>
            </div>
            </div>

            <div className="row px-4">
              <div className="col-">
            <Table/>
            </div>
            </div>
          </div>
          </div>
          </div>
 
    </>
  );
}

export default App;
