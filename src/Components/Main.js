import React from 'react'
import { SparklesIcon } from '@heroicons/react/outline';
import { UsersIcon } from '@heroicons/react/outline';
import StockChart from './StockChart';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
const Main = () => {
    return (
        <div>
            <div className="container -mt-24">
            <div className="grid grid-cols-6 grid-rows-3 px-24 gap-5">
  <div className="col-span-2 row-span-3 pt-12 bg-white rounded-lg shadow-2xl">
                    <div className="flex flex-col content-between">
                        <div>
                                   <div className="flex flex-row justify-between">
                                            <div>
                                            <h1 className="text-xl text-left px-8 font-bold text-gray-700">Weekly Sales Stats</h1> 
          <h1 className="text-lg text-left px-8 font-meduim text-gray-400">890,344 Sales</h1> 
                                            </div>
                                            <div>
                                            <button
                      type="button"
                      className="bg-grey-800 pr-6  rounded-full text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <DotsHorizontalIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                                            </div>
                                   </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <div className="flex flex-row justify-evenly content-center  items-center">
                                        <div>
                                        <img
                      className="h-8 w-8"
                      src="./006-plurk.svg"
                      alt="Workflow"
                    />
                                        </div>
                                        <div>
                                        <h1 className="text-meduim text-left  font-bold text-gray-700">Bestsellers</h1> 
          <h1 className="text-light text-left font-light text-gray-400">Ricky Hunt, Sandra Trepp</h1> 
                                        </div>
                                        <div>
                                                <p className="text-light  font-light text-gray-800  rounded-lg bg-gray-200 w-12 h-6">+243</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className="flex flex-row justify-evenly content-center  items-center">
                                        <div>
                                        <img
                      className="h-8 w-8"
                      src="./015-telegram.svg"
                      alt="Workflow"
                    />
                                        </div>
                                        <div>
                                        <h1 className="text-meduim text-left  font-bold text-gray-700">Top Engagement</h1> 
          <h1 className="text-light text-left font-light text-gray-400">Ricky Hunt, Sandra Trepp</h1> 
                                        </div>
                                        <div>
                                                <p className="text-light  font-light text-gray-800  rounded-lg bg-gray-200 w-12 h-6">+243</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <div className="flex flex-row justify-evenly content-center  items-center">
                                        <div>
                                        <img
                      className="h-8 w-8"
                      src="./003-puzzle.svg"
                      alt="Workflow"
                    />
                                        </div>
                                        <div>
                                        <h1 className="text-meduim text-left  font-bold text-gray-700">Top Authors</h1> 
          <h1 className="text-light text-left font-light text-gray-400">Ricky Hunt, Sandra Trepp</h1> 
                                        </div>
                                        <div>
                                                <p className="text-light  font-light text-gray-800  rounded-lg bg-gray-200 w-12 h-6">+243</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <StockChart />
                        </div>
                    </div>
      

      </div>
  <div className="col-span-1 row-span-1 h-40   rounded-lg bg-cover bg-center bg-no-repeat shadow-2xl" style={{backgroundImage: 'url(./bg-9.jpg)'}}>
      <button className="text-xl font-bold text-gray-700 pt-8 hover:text-blue-600">Properties</button>
      </div>
  <div className="col-span-3 row-span-1 rounded-lg pt-12 px-8 bg-white shadow-2xl">
      <div className="flex flex-row  justify-between  ">
          <div>
          <h1 className="text-xl text-left font-bold text-gray-700">Create CRM Reports</h1> 
          <h1 className="text-lg text-left font-meduim text-gray-700">Generate the latest CRM Report</h1> 
          </div>
          <div>
          <button
                      type="button"
                      className="text-white bg-blue-500 hover:bg-blue-300  hover:text-white   px-5 py-3 rounded-md text-sm font-medium"
                    >
                     Start Now
                    </button>
          </div>

      </div>
  </div>
  <div className="col-span-2 row-span-1 pt-8 px-8 rounded-lg bg-pink-900 bg-cover bg-center bg-no-repeat shadow-2xl" style={{backgroundImage: 'url(./taieri.svg)'}}>
     <div className="flex flex-col items-start">
        <h1 className="text-2xl text-left font-bold text-white">Create SaaS</h1> 
          <h1 className="text-xl text-left font-meduim text-white">Based Reports</h1> 
          <button
                      type="button"
                      className="text-white bg-blue-500 hover:bg-blue-300  hover:text-white px-6  py-3 rounded-md text-sm font-medium"
                    >
                     Start Now
                    </button>
     </div>
      
         
      
            
     
      </div>
  <div className="col-span-2 row-span-2 pt-8 px-8 rounded-lg bg-blue-300  bg-center bg-no-repeat shadow-2xl" style={{backgroundImage: 'url(./img-16.jpg)'}}>
  <div className="flex flex-col items-start">
        <h1 className="text-xl text-left font-meduim text-white">Create Reports</h1> 
          <h1 className="text-xl text-left font-meduim text-white">With App</h1> 
          <button
                      type="button"
                      className=" mt-36  text-yellow-400  hover:text-white  rounded-md text-sm font-medium"
                    >
                     Create App &gt;
                    </button>
     </div>
      </div>
  <div className="col-span-1 row-span-1 rounded-lg bg-blue-400 shadow-2xl">
  <div className="flex flex-col px-8 pt-8 ">
  <SparklesIcon className="text-white h-8 w-8" aria-hidden="true" />
        <h1 className="text-2xl text-left font-bold text-white">642</h1> 
         <h1 className="text-lg text-left font-meduim text-white">New&nbsp;Products</h1> 
         
     </div>
    </div>
  <div className="col-span-1 row-span-1 rounded-lg bg-white shadow-2xl">
  <div className="flex flex-col px-8 pt-8 ">
  <UsersIcon className="text-gray-900 h-8 w-8" aria-hidden="true" />
        <h1 className="text-2xl text-left font-bold text-gray-900">1236</h1> 
         <h1 className="text-lg text-left font-meduim text-gray-600">New&nbsp;Customers</h1> 
         
     </div>
</div>
 
</div>
            <div clas="flex flex-col  justify-center  content-center items-center">
                    <div>
                  
                    </div>
                    <div>2</div>
                    <div>3</div>
            </div>
           
                    
 
         
         
            
            </div>
            
        </div>
    )
}
export default Main;
