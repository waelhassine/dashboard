import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import { BellIcon } from '@heroicons/react/outline';
import { QrcodeIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { TemplateIcon } from '@heroicons/react/outline';

const Navbar = () => {
    return (
        <div className="" >

        
        <div className=" bg-cover bg-center bg-no-repeat  py-2  divide-y divide-grey-500 divide-opacity-75" style={{backgroundImage: 'url(./bg-10.jpg)'}}>
            <div class="flex items-center h-16">
            <div class="flex ">
            <div className="pl-20 pr-6  flex-shrink-0">
                    <img
                      className="h-12 w-12"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className=" flex items-baseline space-x-1 py-1">
                  
                  <a
                          key="ds"
                          href="/z"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-medium"
                        >
                          Dashboard
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-medium"
                        >
                          Features
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-medium"
                        >
                          Crud
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-medium"
                        >
                          Apps
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-medium"
                        >
                          Pages
                        </a>
                   
                    </div>
                </div>
                   
                 <div className="m-16 px-16  space-x-1">
                 <button
                    type="button"
                    className=" bg-gray-800 flex-shrink-0 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className=" bg-gray-800 flex-shrink-0 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className=" bg-gray-800 flex-shrink-0 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <QrcodeIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className=" bg-gray-800 flex-shrink-0 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className=" bg-gray-800 flex-shrink-0 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <TemplateIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  
                  
                 
                  
                 </div>
                 
                 <button class="bg-gray-800 flex-shrink-0 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white inline-flex ">
                 <span>Download</span>
                 <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  
                    </button>
                  
                
                
                </div>
        <div className="flex justify-between  p-16 mb-1">
            <div>
                <div className="flex flex-col">
                    <div>
                    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
                    </div>
                    <div>
                        <div className="flex flex-row mb-20">
                        <button
                      type="button"
                      className="bg-gray-800 p-1  rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                     className="font-bold"
                    >
                     Dashboard
                    </button>
                    <p> . </p>
                    <button
                      type="button"
                      className="font-bold"
                    >
                     Latest Updated
                    </button>
             
                   
                        </div>
                   
                    </div>
                </div>

            </div>
            <div>
            <a
                          key="ds"
                          href="/z"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-medium"
                        >
                          Dashboard
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-base font-medium"
                        >
                          Features
                        </a>
            </div>
        

        </div>
        </div>
        </div>
    )
}
export default Navbar;
