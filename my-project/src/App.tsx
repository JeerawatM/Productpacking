import { useState } from 'react';
import Menupage from './components/menupage';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [order, setOrder] = useState([
    { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
    { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
    { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
    { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
  ]);
  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <Menupage />
        <div className="col-span-5">
          <div className='m-7 '>
            <div className='mb-3 flex items-center'>
              <p className='text-2xl font-semibold'>Order</p>
            </div>
            <div className='flex justify-center'>
              <div style={{ width: "100%" }}>
                <div className="overflow-x-auto border rounded-xl border-slate-200">
                  <table className="table table-zebra text-center">
                    <thead>
                      <tr className='bg-cyan-700 text-white text-base'>
                        <th>Number</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Amount</th>
                        <th>Added</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.map((item, index) => (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td className='flex justify-center'><img src="https://cdn.discordapp.com/attachments/1100135488007966861/1135827214911426651/IMG_20230213_221222_847.jpg?ex=66d214c6&is=66d0c346&hm=dbf0cc1c87dcafdce18656e6ba18b8baf8677849f7eff2569c504a69e3450825&" alt="" className='w-20' /></td>
                          {/* <Link></Link> */}
                          <td>{item.ProductName}</td>
                          <td>{item.Amount}</td>
                          <td>{item.Added}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
        </div>
      </div>
    </>
  )
}

export default App
