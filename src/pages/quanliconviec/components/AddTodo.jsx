import React, { Fragment, useState } from 'react';
import { FaCircleXmark, FaXmark } from "react-icons/fa6";
import { FaPlus, FaAngleDown, FaAngleUp } from "react-icons/fa";


function AddTodo({ isShow }) {
     let [isOpent, setIsOpent] = useState(false)
     let [selectStatus, setSelecStatus] = useState('Chọn trạng thái')

     const handleSelect = (value) => {
          setSelecStatus(value)
          setIsOpent(false)
     }

     return (
          <Fragment>
               {isShow && <div className='col-span-4 w-full border rounded-md'>
                    <h4 className='flex items-center bg-orange-200 flex justify-between p-4 text-gray-600 text-xl'>Thêm công việc <FaCircleXmark /></h4>
                    <div className='mx-2'>
                         <div className='flex flex-col'>
                              <label htmlFor="name">Tên:</label>
                              <input className='border border-gray-300 rounded-md p-2 outline-none' type="text" id='name' />
                         </div>
                         <div className='relative'>
                              <label htmlFor="">Trạng thái:</label>
                              <div className='w-full flex items-center justify-between border border-gray-300 p-2 outline-none' name="status" id="status" onClick={() => setIsOpent(!isOpent)}>
                                   {selectStatus} {isOpent ? <FaAngleDown /> : <FaAngleUp />}
                              </div>
                              {isOpent && <ul className='absolute w-full border mt-2 bg-gray-400 rounded-md'>
                                   <li className='border-b p-2' onClick={() => handleSelect('Ẩn')}>Ẩn</li>
                                   <li className='p-2' onClick={() => handleSelect('Kích hoạt')}>Kích hoạt</li>
                              </ul>}
                         </div>
                    </div>
                    <div className='flex mt-4 justify-center gap-4'>
                         <button className='flex items-center gap-2 bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-3 rounded'><FaPlus /> Lưu lại</button>
                         <button className='flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded'><FaXmark />Hủy bỏ</button>
                    </div>
               </div>}
          </Fragment>
     );
}

export default AddTodo;