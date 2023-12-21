import React, { Fragment, useState } from 'react';
import { FaCircleXmark, FaXmark } from "react-icons/fa6";
import { FaPlus, FaAngleDown, FaAngleUp } from "react-icons/fa";


function AddTodo({ isShow, setIsShow }) {
     let [isOpent, setIsOpent] = useState(false)
     let [selectStatus, setSelecStatus] = useState(false)
     let [name, setName] = useState('')

     const handleSelect = (value) => {
          setSelecStatus(value)
          setIsOpent(false)
     }

     function s() {
          return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
     }

     function generateID() {
          return s() + s() + '-' + s() + s() + '-' + s() + s() + '-' + s() + s() + '-' + s() + s()
     }

     const handleSave = () => {
          if (name.trim() !== '' && selectStatus !== 'Chọn trạng thái') {
               const todoItem = { id: generateID(), name, status: selectStatus }
               const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
               const newTodos = [...existingTodos, todoItem];
               localStorage.setItem('todos', JSON.stringify(newTodos))

               setName('')
               setSelecStatus('Chọn trạng thái')
               window.location.reload()
          } else {
               alert('Please enter a valid name and select a status.');
          }
     }

     return (
          <Fragment>
               {isShow && <div className='col-span-4 w-full border rounded-md'>
                    <h4 className='flex items-center bg-orange-200 flex justify-between p-4 text-gray-600 text-xl'>
                         Thêm công việc
                         <FaCircleXmark
                              className='text-orange-600'
                              onClick={() => setIsShow(false)}
                         /></h4>
                    <div className='mx-2'>
                         <div className='flex flex-col'>
                              <label htmlFor="name">Tên:</label>
                              <input className='border border-gray-300 rounded-md p-2 outline-none' type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                         </div>
                         <div className='relative'>
                              <label htmlFor="">Trạng thái:</label>
                              <div className='w-full flex items-center justify-between border border-gray-300 p-2 outline-none' name="status" id="status" onClick={() => setIsOpent(!isOpent)}>
                                   {selectStatus === true ? 'Kích hoạt' : 'Ẩn'} {isOpent ? <FaAngleDown /> : <FaAngleUp />}
                              </div>
                              {isOpent && <ul className='absolute w-full border mt-2 bg-gray-400 rounded-md'>
                                   <li className='border-b p-2' onClick={() => handleSelect(false)}>Ẩn</li>
                                   <li className='p-2' onClick={() => handleSelect(true)}>Kích hoạt</li>
                              </ul>}
                         </div>
                    </div>
                    <div className='flex mt-4 justify-center gap-4'>
                         <button className='flex items-center gap-2 bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-3 rounded' onClick={() => handleSave()}><FaPlus /> Lưu lại</button>
                         <button className='flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded'><FaXmark />Hủy bỏ</button>
                    </div>
               </div>}
          </Fragment>
     );
}

export default AddTodo;