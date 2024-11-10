import React, { useEffect, useState } from 'react'
import Menupage from './menupage';
import { Link, useLocation } from 'react-router-dom';
function Generatepage() {
    const [order, setOrder] = useState([
        { ProductImage: "", ProductName: "Arkamoto", width: 5, height: 5, length: 10, weight: 40, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 10, height: 15, length: 20, weight: 10, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 5, height: 10, length: 10, weight: 120, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 10, height: 7, length: 7, weight: 100, Amount: 2, Added: "day-month-year" },
    ]);
    return (
        <div className="grid grid-cols-12 h-screen">
            <Menupage />
            <div className="col-span-10 m-5">
                <div className='mb-5'>
                    <Link to='/Product'>
                        <button className='btn'>กลับไปหน้าเพิ่ม Order</button>
                    </Link>
                    <p>จำนวนกล่องท้ังหมด : 4</p>

                </div>
                <div className='flex justify-center' >
                    <div style={{ width: "90%" }}>
                        <div className="overflow-x-auto border rounded-xl border-slate-200">
                            <table className="table table-zebra text-center">
                                <thead>
                                    <tr className='bg-cyan-700 text-white text-base'>
                                        <th>ลำดับ</th>
                                        <th>ขนาดกล่อง</th>
                                        <th>user-id</th>
                                        <th>ชื่อ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {/* รายการกล่องทั้งหมดของ orderนั้นๆ */}
                                {order.map((item, index) => (
                                    <tbody >

                                        <tr className='bg-stone-400'>
                                            <th>{index + 1}</th>
                                            <td>D</td>
                                            <td>Quality Control Specialist</td>
                                            <td>Blue</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={5} className='bg-stone-500'>
                                                <div className="p-5 overflow-x-auto bg-white">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Number</th>
                                                                <th>Product Image</th>
                                                                <th>Product Name</th>
                                                                <th>Amount</th>
                                                                <th>Added</th>
                                                            </tr>
                                                        </thead>
                                                        {/* รายการของในกล่องนั้นๆ */}
                                                        <tbody>
                                                            {order.map((item, index) => (
                                                                <tr key={index}>
                                                                    <th>{index + 1}</th>
                                                                    <td >{item.ProductImage}</td>
                                                                    <td>{item.ProductName}</td>
                                                                    <td>{item.Amount}</td>
                                                                    <td>{item.Added}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        {/* รายการของในกล่องนั้นๆ */}
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                ))}
                                {/* รายการกล่องทั้งหมดของ orderนั้นๆ */}
                            </table>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default Generatepage
