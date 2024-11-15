import React, { useEffect, useState } from 'react'
import Menupage from './menupage';
import { Link, useNavigate } from 'react-router-dom';
function History_page() {
    const navegate = useNavigate();
    const [order, setOrder] = useState([
        { ProductImage: "", ProductName: "Arkamoto", width: 5, height: 5, length: 10, weight: 40, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 10, height: 15, length: 20, weight: 10, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 5, height: 10, length: 10, weight: 120, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 10, height: 7, length: 7, weight: 100, Amount: 2, Added: "day-month-year" },
    ]);
    return (
        <div className="grid grid-cols-12 h-screen">
            <Menupage />
            <div className="col-span-10">
                <div className='m-7 '>
                    <div className='mb-3 flex items-center'>
                        <p className='text-2xl font-semibold'>Order</p>
                    </div>
                    <div className='flex justify-center'>
                        <div style={{ width: "90%" }}>
                            <div className="overflow-x-auto border rounded-xl border-slate-200">
                                <table className="table bg-stone-500  text-center">
                                    <thead>
                                        <tr className='bg-cyan-700 text-white text-base'>
                                            <th>ลำดับ</th>
                                            <th>จำนวนกล่อง</th>
                                            <th>user-id</th>
                                            <th>ชื่อ</th>
                                            <th>status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-white text-base'>
                                        {order.map((item, index) => (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>จำนวนของกล่องที่genมา</td>
                                                {/* <Link></Link> */}
                                                <td>{item.ProductName}</td>
                                                <td>{item.Amount}</td>
                                                <td>{item.status}</td>
                                                <td>
                                                    <Link to='/Historydetail'>
                                                        <button className='btn btn-sm bg-green-500 border-green-500'>รายละเอียด</button>
                                                    </Link>
                                                    <button className='btn btn-sm ml-2 bg-red-400 border-red-400'>ลบ</button>
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
    )
}

export default History_page