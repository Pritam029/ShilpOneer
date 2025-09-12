import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
);

function Dashboard() {
  // 🔹 Static product data you provided
  const products = [
    { pname: "Sal Leaf Plate", pprice: 50, sales: 60, stock: 140 },
    { pname: "Broomstick", pprice: 120, sales: 80, stock: 120 },
    { pname: "Handicraft", pprice: 60, sales: 90, stock: 110 },
    { pname: "Wooden Box", pprice: 300, sales: 30, stock: 70 },
    { pname: "Antique Wooden Box", pprice: 149, sales: 40, stock: 10 },
  ];

  // Totals
  const totalSalesAmount = products.reduce(
    (sum, p) => sum + p.sales * p.pprice,
    0
  );
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalSaleQuantity = products.reduce((sum, p) => sum + p.sales, 0);

  // ✅ Pie Chart (Sales Quantity)
  const pieData = {
    labels: products.map((p) => p.pname),
    datasets: [
      {
        label: "Sales Quantity",
        data: products.map((p) => p.sales),
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"],
      },
    ],
  };

  // ✅ Bar Chart (Sales Amount Distribution)
  const barData = {
    labels: products.map((p) => p.pname),
    datasets: [
      {
        label: "Sales Amount (₹)",
        data: products.map((p) => p.sales * p.pprice),
        backgroundColor: "#007bff",
      },
    ],
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Top />
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800">📊 Dashboard</h1>

              {/* Cards Section */}
              <div className="row mb-4">
                <div className="col-md-3">
                  <div className="card shadow-sm text-center p-3">
                    <h5>Total Sales Amount</h5>
                    <h3 className="text-success">₹{totalSalesAmount}</h3>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow-sm text-center p-3">
                    <h5>Total Products</h5>
                    <h3>{products.length}</h3>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow-sm text-center p-3">
                    <h5>Total Stock Available</h5>
                    <h3>{totalStock} units</h3>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow-sm text-center p-3">
                    <h5>Total Sale Quantity</h5>
                    <h3>{totalSaleQuantity} units</h3>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card shadow-sm p-3">
                    <h5 className="text-center">📦 Sales Quantity</h5>
                    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                      <Pie data={pieData} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card shadow-sm p-3">
                    <h5 className="text-center">💰 Sales Amount Distribution</h5>
                    <Bar data={barData} />
                  </div>
                </div>
              </div>

              {/* Sales Report Table */}
              <div className="card shadow-sm p-3">
                <h5>📋 Sales Report</h5>
                <table className="table table-bordered table-striped mt-3">
                  <thead className="thead-dark">
                    <tr>
                      <th>Product</th>
                      <th>Price (₹)</th>
                      <th>Sales Quantity</th>
                      <th>Stock Available</th>
                      <th>Sales Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, index) => (
                      <tr key={index}>
                        <td>{p.pname}</td>
                        <td>{p.pprice}</td>
                        <td>{p.sales}</td>
                        <td>{p.stock}</td>
                        <td className="text-success">{p.sales * p.pprice}</td>
                      </tr>
                    ))}
                    {/* ✅ Grand Total Row */}
                    <tr className="font-weight-bold bg-light">
                      <td colSpan="2">TOTAL</td>
                      <td>{totalSaleQuantity}</td>
                      <td>{totalStock}</td>
                      <td className="text-success">₹{totalSalesAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </>
  );
}

export default Dashboard;
