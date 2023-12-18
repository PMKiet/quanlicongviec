import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Table from './components/Table';

function Todo(props) {

     let [isShow, setIsShow] = useState(false)



     return (
          <div className='container mx-auto'>
               <h1 className='text-4xl font-[700] text-center py-10 border-b-2 border-black'>Quản lý công việc</h1>

               <div className=' w-full grid grid-cols-12 gap-4'>
                    {/* Thêm công việc */}
                    <AddTodo isShow={isShow} />
                    {/* Thêm công việc */}

                    {/* Table */}
                    <Table setIsShow={setIsShow} isShow={isShow} />
                    {/* Table */}
               </div>

          </div>

     );
}

export default Todo;