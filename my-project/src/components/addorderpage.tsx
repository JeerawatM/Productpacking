import React, { useState } from 'react'
import Menupage from './menupage';
import { Link } from 'react-router-dom';
function addorderpage() {
    const [item, setItem] = useState("");
    return (
        <div className="grid grid-cols-12 h-screen">
            <Menupage />
            <div className="col-span-10">
                <div className='flex justify-center items-center h-screen'>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <div className="card-body">
                            <div className="card-title grid justify-center"><h2 >เพิ่มสินค้า</h2></div>

                            <div className='grid grid-cols-2 gap-4'>
                                <label className="form-control w-full max-w-xs col-span-2">
                                    <span className="label-text">ชื่อสินค้า</span>
                                    <input
                                        type="text"
                                        placeholder="ชื่อสินค้า"
                                        // value={"sef"}
                                        className="input input-bordered input-sm w-full max-w-xs" />
                                </label>

                                <label className="form-control w-full max-w-xs">
                                    <span className="label-text">ความกว้าง</span>
                                    <input
                                        type="text"
                                        placeholder="เซนติเมตร"
                                        // value={item}
                                        className="input input-bordered input-sm w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <span className="label-text">ความยาว</span>
                                    <input
                                        type="text"
                                        placeholder="เซนติเมตร"
                                        className="input input-bordered input-sm w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <span className="label-text">ความสูง</span>
                                    <input
                                        type="text"
                                        placeholder="เซนติเมตร"
                                        className="input input-bordered input-sm w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <span className="label-text">น้ำหนัก</span>
                                    <input
                                        type="text"
                                        placeholder="น้ำหนัก"
                                        className="input input-bordered input-sm w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <span className="label-text">จำนวน</span>
                                    <input
                                        type="text"
                                        placeholder="จำนวน"
                                        className="input input-bordered input-sm w-full max-w-xs" />
                                </label>
                            </div>
                            <div className="card-actions justify-center">
                                <Link to='/Product'>
                                    <button className="btn bg-green-500 btn-sm">Add</button>
                                </Link>
                                <Link to='/Product'>
                                    <button className="btn btn-error btn-sm">Cancel</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default addorderpage