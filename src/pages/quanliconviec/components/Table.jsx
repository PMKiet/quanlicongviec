import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch, FaAngleDown, FaAngleUp, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

function Table({ isShow, setIsShow }) {
     let [isOpent, setIsOpent] = useState(false)
     let [selectStatus, setSelecStatus] = useState('Chọn trạng thái')
     let [arrange, setArrange] = useState('Sắp xếp')
     let [showSort, setShowSort] = useState(false)
     let [search, setSearch] = useState('')

     let [listTodo, setListTodo] = useState([])

     useEffect(() => {
          letTodo()
     }, [])

     const letTodo = () => {
          if (JSON.parse(localStorage.getItem('todos'))) {
               const data = JSON.parse(localStorage.getItem('todos'))
               setListTodo(data)
          } else return
     }

     const handleSelect = (value) => {
          setSelecStatus(value)
          setIsOpent(false)
     }

     const handleSelectSort = (sort) => {
          setArrange(sort)
          setShowSort(false)
     }

     const handleShowForm = () => {
          setIsShow(!isShow)
     }


     //update status
     const onUpdateStatus = (todo) => {
          let id = todo.id
          const updateList = listTodo.map((item) =>
               item.id === id ? { ...item, status: !item.status } : item
          )
          setListTodo(updateList)

          localStorage.setItem('todos', JSON.stringify(updateList))
     }

     //deleteTodo
     const handleDeteleTodo = (id) => {
          const updateList = listTodo.filter((todo) => todo.id !== id)

          setListTodo(updateList)

          localStorage.setItem('todos', JSON.stringify(updateList))
     }

     return (
          <div className={`${isShow === true ? 'col-span-8' : 'col-span-12'}  `}>
               <div>
                    <span className='flex items-center border bg-sky-500 w-36 py-2 px-1 rounded-md text-white' onClick={() => handleShowForm()}><FaPlus /> Thêm công việc</span>
                    <div className=' w-full grid grid-cols-12 gap-4 my-4'>
                         <div className=' flex items-center col-span-6 w-full'>
                              <input className='border outline-none p-2 w-96' type="text" placeholder='Nhập từ khóa' onChange={(e) => setSearch(e.target.value)} />
                              <button className='bg-sky-500 w-16 flex items-center justify-center text-white py-2 px-1' ><FaSearch /> Tìm</button>
                         </div>
                         <div className='col-span-6 w-full'>
                              <div className='relative'>
                                   <div className='w-36 flex items-center justify-between bg-sky-500 p-2 outline-none text-white' name="status" id="status" onClick={() => setShowSort(!showSort)}>
                                        {arrange} {showSort ? <FaAngleDown /> : <FaAngleUp />}
                                   </div>
                                   {showSort && <ul className='absolute w-36 border mt-2 z-10 bg-white rounded-md'>
                                        <li className='border-b p-2' onClick={() => handleSelectSort(<FaSortAlphaDown className='text-2xl' />)}><FaSortAlphaDown className='text-2xl' /></li>
                                        <li className='p-2' onClick={() => handleSelectSort(<FaSortAlphaUp className='text-2xl' />)}><FaSortAlphaUp className='text-2xl' /></li>
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
                                                       <li className='border-b p-2 ' onClick={() => handleSelect('Ẩn')}>Ẩn</li>
                                                       <li className='p-2' onClick={() => handleSelect('Kích hoạt')}>Kích hoạt</li>
                                                  </ul>}
                                             </div>

                                        </td>
                                        <td className="py-2 px-4 border border-gray-300">
                                        </td>
                                   </tr>

                                   {listTodo && listTodo.filter((todo) =>
                                        todo.name.toLowerCase().includes(search.toLowerCase())
                                   ).map((todo, index) => (
                                        <tr key={index}>
                                             <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                                             <td className="py-2 px-4 border border-gray-300">{todo.name}</td>
                                             <td className="py-2 px-4 border border-gray-300" onClick={() => onUpdateStatus(todo)}>{todo.status === true ? 'Kích hoạt' : 'Ẩn'}</td>
                                             <td className="py-2 px-4 border border-gray-300">
                                                  <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-1 px-3 mr-2 rounded">Edit</button>
                                                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                       onClick={() => { handleDeteleTodo(todo.id) }}
                                                  >Delete</button>
                                             </td>
                                        </tr>
                                   ))}

                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
}

export default Table;