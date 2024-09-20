import React, { useState } from 'react'
import Menupage from './menupage';
import { Link } from 'react-router-dom';
 
function ordertablepage() {
    const [order, setOrder] = useState([
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
    ]);
    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <Menupage page="Product Page"/>
                <div className="col-span-10">
                    <div className='m-7 '>
                        <div className='mb-3 flex items-center'>
                            <p className='text-2xl font-semibold'>Order</p>
                            <Link to="/Addorder">
                            <button className='btn bg-sky-900 ml-5 text-lg text-white'>Add Product</button>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div style={{ width: "95%" }}>
                                <div className="overflow-x-auto border rounded-xl border-slate-200">
                                    <table className="table table-zebra text-center">
                                        {/* head */}
                                        <thead>
                                            <tr className='bg-cyan-700 text-white text-base'>
                                                <th>Number</th>
                                                <th>Product Image</th>
                                                <th>Product Name</th>
                                                <th>Amount</th>
                                                <th>Added</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.map((item, index) => (
                                                <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td className='flex justify-center'><img src="https://cdn.discordapp.com/attachments/1100135488007966861/1135827214911426651/IMG_20230213_221222_847.jpg?ex=66d214c6&is=66d0c346&hm=dbf0cc1c87dcafdce18656e6ba18b8baf8677849f7eff2569c504a69e3450825&" alt="" className='w-20' /></td>
                                                    <td>{item.ProductName}</td>
                                                    <td>{item.Amount}</td>
                                                    <td>{item.Added}</td>
                                                    <td>
                                                        <Link to='/Editorder'>
                                                        <button className='btn btn-md bg-orange-300'>แก้ไข</button>
                                                        </Link>
                                                        <button className='btn btn-md ml-5 bg-red-400'>ลบ</button>
                                                    </td>
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
    )
}

export default ordertablepage