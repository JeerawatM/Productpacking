import React, { useState, useEffect } from 'react';
import Menupage from './menupage';
import { Link, useNavigate } from 'react-router-dom';

function PackingPage() {
    const [order, setOrder] = useState([
        { ProductImage: "", ProductName: "Arkamoto", width: 5, height: 5, length: 10, weight: 40, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 10, height: 15, length: 20, weight: 10, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 5, height: 10, length: 10, weight: 120, Amount: 2, Added: "day-month-year" },
        { ProductImage: "", ProductName: "Arkamoto", width: 10, height: 7, length: 7, weight: 100, Amount: 2, Added: "day-month-year" },
    ]);
    const [boxes, setBoxes] = useState([
        { box_id: 1, box_name: "F", box_width: 5, box_height: 5, box_length: 10, box_weight: 40, box_amount: 99 },
        { box_id: 2, box_name: "E", box_width: 5, box_height: 5, box_length: 10, box_weight: 40, box_amount: 99 },
        { box_id: 3, box_name: "D", box_width: 5, box_height: 5, box_length: 10, box_weight: 40, box_amount: 99 },
        { box_id: 4, box_name: "G", box_width: 5, box_height: 5, box_length: 10, box_weight: 40, box_amount: 99 },
        { box_id: 5, box_name: "S", box_width: 5, box_height: 5, box_length: 10, box_weight: 40, box_amount: 99 },
        { box_id: 6, box_name: "M", box_width: 5, box_height: 5, box_length: 10, box_weight: 40, box_amount: 99 },
        { box_id: 7, box_name: "L", box_width: 5, box_height: 5, box_length: 10, box_weight: 40, box_amount: 99 },
    ]);

    function toggleCheckbox(checkbox) {
        checkbox.checked = !checkbox.checked; // Toggle the checked state
    }
    return (
        <div>
            <div className="grid grid-cols-12 h-screen">
                <Menupage />
                <div className="col-span-10">
                    <div className='m-7 '>
                        <div className='mb-3'>
                            <p className='text-2xl font-semibold mb-3'>Size</p>
                            <div className='flex gap-5 mb-2'>
                                {boxes.map((item, index) => (
                                    <div key={item.box_id || index} className='flex items-center'>
                                        <input
                                            type="checkbox"
                                            name="radio"
                                            className="checkbox mr-1"
                                            value={item.box_name.charAt(0)}
                                            checked
                                            onClick="toggleCheckbox(this)"
                                        // จัดการการเปลี่ยนแปลง
                                        />
                                        <label> {item.box_name.charAt(0)} ({item.box_width}x{item.box_length}x{item.box_height}) เหลือ{item.box_amount}</label>
                                    </div>
                                ))}
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

export default PackingPage;
