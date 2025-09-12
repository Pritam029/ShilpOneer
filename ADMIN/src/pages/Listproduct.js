// import Sidebar from '../inc/Sidebar';
// import Top from '../inc/Top';
// import Footer from '../inc/Footer';
// import { useEffect, useState } from 'react';

// function Listproduct() {

//     let [products, setProducts] = useState([]);

//        async function getproduct() {
//           var resp=await fetch("http://localhost:2000/Product/sel")
//             var data=await resp.json();

//             console.log(data)
//             setProducts(data)

//         }

//     useEffect(() => {
//             getproduct();

//     }, []);


//   return (
//     <>
    
//     <div id="wrapper">
//   {/* Sidebar */}
//     <Sidebar/>
//   {/* End of Sidebar */}
//   {/* Content Wrapper */}
//   <div id="content-wrapper" className="d-flex flex-column">
//     {/* Main Content */}
//     <div id="content">
//       {/* Topbar */}
//       <Top/>
//       {/* End of Topbar */}
//       {/* Begin Page Content */}
//       <div className="container-fluid">
//         {/* Page Heading */}
//         <h1 className="h3 mb-4 text-gray-800">List product</h1>

//         <table className="table">
//             <thead>
//                 <tr>
//                     <th>Product Name</th>
//                     <th>Product Price</th>
//                     <th>Product Image</th>
//                     <th>Product Details</th>
//                     <th>Delete</th>
//                 </tr>
//              </thead>   
//              <tbody>
//                 {products.map((p) => 
//                 <tr key={p._id}>
//                     <td>{p.pname}</td>
//                     <td>{p.pprice}</td>
//                     <td><img className="pimage"src={"http://localhost:2000/product_img/"+p.pimage}/></td>
//                     <td>{p.pdetails}</td>
//                     <td><button onClick={async () => {
//                         var resp = await fetch("http://localhost:2000/Product/del/" + p._id, {
//                             method: "DELETE",
                        
//                         });
//                         var data = await resp.json();
//                         console.log(data);
//                         getproduct()
                    
//                     }}className="btn btn-danger">Delete</button></td>
//                 </tr>
//                )}
//              </tbody>

//         </table>


//       </div>
//       {/* /.container-fluid */}
//     </div>
//     {/* End of Main Content */}
//     {/* Footer */}
//     <Footer/>
//     {/* End of Footer */}
//   </div>
//   {/* End of Content Wrapper */}
// </div>
//     </>
//   )
// }

// export default Listproduct;