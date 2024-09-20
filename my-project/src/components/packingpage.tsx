import React, { useState } from 'react'
import Menupage from './menupage';
import { Link } from 'react-router-dom';
function packingpage() {
    const [order, setOrder] = useState([
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 0, height: 0, length: 0, weight: 0, Amount: 2, Added: "day-month-year" },
    ]);
    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <Menupage />
                <div className="col-span-10">
                    <div className='m-7 '>
                        <div className='mb-3'>
                            <p className='text-2xl font-semibold mb-3'>Size</p>
                            <div className='flex gap-5 mb-2'>
                                <div className='w-16 h-14 border-black border rounded-md'>F</div>
                                <div className='w-16 h-14 border-black border rounded-md'>E</div>
                                <div className='w-16 h-14 border-black border rounded-md'>D</div>
                                <div className='w-16 h-14 border-black border rounded-md'>G</div>
                                <div className='w-16 h-14 border-black border rounded-md'>S</div>
                                <div className='w-16 h-14 border-black border rounded-md'>M</div>
                                <div className='w-16 h-14 border-black border rounded-md'>L</div>

                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name="radio-1" className="radio mr-1" value={"ประหยัดจำนวนกล่อง"} defaultChecked />
                                <label htmlFor=""> ประหยัดจำนวนกล่อง
                                </label>
                                <input type="radio" name="radio-1" className="radio ml-3" value={"ประหยัดพื้นที่กล่อง"} />
                                <label htmlFor="" className="ml-1">ประหยัดพื้นที่กล่อง</label>
                            </div>
                        </div>
                        <div className='mb-3 flex items-center'>
                            <p className='text-2xl font-semibold'>Order</p>
                        </div>
                        <div className='flex justify-center mb-5'>
                            <div style={{ width: "90%" }}>
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
                        <div className='flex justify-center'>
                            <Link to='/Generate'>
                            <button className='btn btn-lg bg-green-300 text-xl'>Generate</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default packingpage