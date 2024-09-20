import React, { useState } from 'react'
import Menupage from './menupage';
import { Link } from 'react-router-dom';
function generatepage() {
    const [order, setOrder] = useState([
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
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
                    <p>กล่องขนาด F :[4]    E:[4]    D:[4]    G:[4]   S:[4]   M:[4]    L:[4]</p>

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
                                            <td>
                                                <button className='btn btn-sm border-orange-300 bg-orange-300'>แก้ไข</button>
                                                <button className='btn btn-sm border-red-400 ml-5 bg-red-400'>ลบ</button>
                                            </td>
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

export default generatepage
