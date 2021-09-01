import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import { BellIcon } from '@heroicons/react/outline';
import { QrcodeIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { TemplateIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';
const Navbar = () => {
    return (
        <div className="flex flex-col   divide-y divide-blue-300 divide-opacity-50  pb-24 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(./bg-10.jpg)'}}>
            <div>
                    <div className="flex justify-between flex-row px-24 py-4">
                        <div className=" flex items-center content-center space-x-1 ">

                            <img
                      className="h-12 w-12"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />

                    <a
                          key="ds"
                          href="/z"
                          className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Dashboard
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Features
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Crud
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Apps
                        </a>
                        <a
                          key="ds"
                          href="/z"
                          className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium"
                        >
                          Pages
                        </a>
                        </div>
                        <div className=" flex items-center content-center space-x-1 ">
                        <button
                    type="button"
                    className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white "
                  >
                    <span className="sr-only">View notifications</span>
                    <SearchIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white "
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white "
                  >
                    <span className="sr-only">View notifications</span>
                    <QrcodeIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white "
                  >
                    <span className="sr-only">View notifications</span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white "
                  >
                    <span className="sr-only">View notifications</span>
                    <TemplateIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button class="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white inline-flex ">
                 <span>Download</span>
                 <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  
                    </button>
                        </div>
                       

                    </div>
            </div>
            <div className="flex justify-between flex-row px-24 pt-12 pb-12">
           
                <div className="flex flex-col gap-3 "> 
                    <div>
                    <h1 className="text-2xl text-left font-bold text-white">Dashboard</h1> 
                    </div>
                    <div>
                        <div className="flex flex-row gap-1">
                        <button
                      type="button"
                      className="bg-grey-800 p-1  rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <HomeIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                     className="font-bold  text-gray-300"
                    >
                     Dashboard
                    </button>
                    <p> . </p>
                    <button
                      type="button"
                      className="font-bold text-gray-300"
                    >
                     Latest Updated
                    </button>
                        </div>
                    </div>

                </div>
                <div>
                        <button
                         
                          className="text-white bg-gray-300 bg-opacity-20 hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white font-medium"
                        >
                          Dashboard
                        </button>
                        <button
                        
                          className="text-black bg-white  hover:bg-gray-300  px-4 py-2 ml-3 rounded-md text-base font-medium"
                        >
                          Features
                        </button>
                </div>
            </div>

        </div>
        
        
    )
}
export default Navbar;
