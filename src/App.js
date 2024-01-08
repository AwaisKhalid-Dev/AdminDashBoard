import logo from './Resources/logo.png';
import './App.css';
import { VscAccount } from "react-icons/vsc";
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // This needs to be imported for pie charts
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement, // Register the ArcElement for pie/doughnut charts
  Title,
  Tooltip,
  Legend
);


function App() {

  const lineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Calls by day',
        data: [300, 50, 100,50,130],
        fill: false,
        backgroundColor: 'rgb(78, 115, 223)',
        borderColor: 'rgba(78, 115, 223, 0.7)',
      },
    ],
  };

  // Pie chart data
  const pieChartData = {
    labels: ['Queries', 'App Issues', 'Billing'],
    datasets: [
      {
        data: [300, 50, 100,50,20],
        backgroundColor: [
          'rgba(55, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Dummy table data
  const tableRows = [
    { id: 1, customerName: 'John Doe', number: '555-1234', accountId: '987654', callDuration: '2:15', download: 'Link' },
    // Add more rows as needed
  ];



  
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <h3>Side Bar Here</h3>
        <div className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              {/* Add your sidebar items here */}
              <p>Item 1</p>
              <p>Item 1</p>
              <p>Item 1</p>
              <p>Item 1</p>
              v
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 ml-sm-auto col-lg-10 px-4">
          {/* Header */}
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              {/* Add header buttons or actions here */}
              <VscAccount className='profile-icon' size={50} />
            </div>
          </div>

          {/* Dashboard Widgets */}
          <div className="row">
            <div className="col">
              <div className="alert alert-primary" role="alert">
                Total Calls 3000 minutes
              </div>
            </div>
            <div className="col">
              <div className="alert alert-success" role="alert">
                Solved 1000
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
            <div className="col-md-12">
            <div className="container-fluid">
      {/* Sidebar, Main Content, Dashboard Widgets remain the same... */}

      {/* Charts */}
      <div className="row">
        <div className="col-md-8">
          <h2>Calls by Day</h2>
          <Line data={lineChartData} />
        </div>
        <div className="col-md-4">
          <h2>Total Calls This Week</h2>
          <div className='h-75'>
          <Pie data={pieChartData} />
          </div>
        </div>
      </div>

      {/* Table */}
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
            {tableRows.map(row => (
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
            <div className="col-md-6">
              {/* Insert pie chart here */}
            </div>
          </div>

        
        </div>
      </div>
    </div>

















    
    </>
  );
}

export default App;
