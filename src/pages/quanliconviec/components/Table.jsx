import React, { useState } from 'react';
import { FaPlus, FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";

function Table({ isShow, setIsShow }) {
     let [isOpent, setIsOpent] = useState(false)
     let [selectStatus, setSelecStatus] = useState('Chọn trạng thái')
     let [arrange, setArrange] = useState('Sắp xếp')

     const handleSelect = (value) => {
          setSelecStatus(value)
          setIsOpent(false)
     }

     const handleShowForm = () => {
          setIsShow(!isShow)
     }

     return (
          <div className='col-span-8 w-full'>
               <div>
                    <span className='flex items-center border bg-sky-500 w-36 py-2 px-1 rounded-md text-white' onClick={() => handleShowForm()}><FaPlus /> Thêm công việc</span>
                    <div className=' w-full grid grid-cols-12 gap-4 my-4'>
                         <div className=' flex items-center col-span-6 w-full'>
                              <input className='border outline-none p-2 w-96' type="text" placeholder='Nhập từ khóa' />
                              <button className='bg-sky-500 w-16 flex items-center justify-center text-white py-2 px-1'><FaSearch /> Tìm</button>
                         </div>
                         <div className='col-span-6 w-full'>
                              <div className='relative'>
                                   <div className='w-36 flex items-center justify-between bg-sky-500 p-2 outline-none text-white' name="status" id="status" onClick={() => setArrange(!arrange)}>
                                        {arrange} {isOpent ? <FaAngleDown /> : <FaAngleUp />}
                                   </div>
                                   {isOpent && <ul className='absolute w-36 border mt-2 bg-gray-400 rounded-md'>
                                        <li className='border-b p-2' onClick={() => handleSelect('Ẩn')}>Ẩn</li>
                                        <li className='p-2' onClick={() => handleSelect('Kích hoạt')}>Kích hoạt</li>
                                   </ul>}
                              </div>
                         </div>
                    </div>
                    <div>
                         <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-300">
                              <thead>
                                   <tr>
                                        <th className="py-2 px-4 border border-gray-300">STT</th>
                                        <th className="py-2 px-4 border border-gray-300">Tên</th>
                                        <th className="py-2 px-4 border border-gray-300">Trạng thái</th>
                                        <th className="py-2 px-4 border border-gray-300">Hành động</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <td className="py-2 px-4 border border-gray-300"></td>
                                        <td className="py-2 px-4 border border-gray-300"><input type="text" /></td>
                                        <td className="py-2 px-4 border border-gray-300">
                                             <div className='relative'>
                                                  <div className='w-64 flex items-center justify-between border border-gray-300 p-2 outline-none' name="status" id="status" onClick={() => setIsOpent(!isOpent)}>
                                                       {selectStatus} {isOpent ? <FaAngleDown /> : <FaAngleUp />}
                                                  </div>
                                                  {isOpent && <ul className='absolute w-64 border mt-2 bg-gray-400 rounded-md'>
                                                       <li className='border-b p-2' onClick={() => handleSelect('Ẩn')}>Ẩn</li>
                                                       <li className='p-2' onClick={() => handleSelect('Kích hoạt')}>Kích hoạt</li>
                                                  </ul>}
                                             </div>
                                        </td>
                                        <td className="py-2 px-4 border border-gray-300">
                                        </td>
                                   </tr>

                                   <tr>
                                        <td className="py-2 px-4 border border-gray-300">2</td>
                                        <td className="py-2 px-4 border border-gray-300">ABC</td>
                                        <td className="py-2 px-4 border border-gray-300">Ẩn</td>
                                        <td className="py-2 px-4  border-gray-300 flex gap-4">
                                             <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-1 px-3 rounded">Edit</button>
                                             <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
}

export default Table;