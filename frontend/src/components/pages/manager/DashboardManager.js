import React, { useState } from "react";
import Managerheader from "../../layout/header/managerheader";
import { useEffect } from "react";

export const DashboardManager = () => {

     const [noticecolor, setnoticecolor] = useState([
    "gray",
    "yellow",
    "red",
    "blue",
    "green",
  ]);
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    
    fetchData();
  }, []);


    // fet notice data

  const fetchData = () => {
    fetch("https://localhost:7047/api/NoticeBoard")
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setNotice(data);
        console.log(data);
      });
  };

  // end of fetch notice data

   // render notice card

  const renderTable = () => {
    if (Array.isArray(notice)) {
      return notice.map((n, i) => {
        return (
          <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <div class={`bg-${noticecolor[i]}-200 text-gray-700 text-lg font-bold p-4`}>
                <h3>🔔 Notice {i+1}</h3>
              </div>
              <div class="px-6 py-4">
                <p class="text-gray-700 text-base">
                  {n.noticeDetails}
                </p>
              </div>
              <p class="px-4 py-3 text-gray-400 text-right text-sm ">
              {n.noticeDate}

              </p>
            </div>
          </>
        );
      });
    }
  };



  return (
    <>
      <Managerheader />
      <div className="container items-center lg:mx-20 lg:mt-10 mt-6 ">

{/* counter card */}
      <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div class="flex items-center  bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-green-400">
        <div class=" p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700 text-cente">
            <h3 class="text-md font-bold tracking-wider">Total hosteller</h3>
            <p class="text-3xl ">234</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow shadow hover:shadow-2xl border-2 border-blue-400">
        <div class="p-4 bg-blue-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700 ">
        <h3 class="text-md font-bold tracking-wider">Total Rooms</h3>
            <p class="text-3xl ">234</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-indigo-400">
        <div class="p-4 bg-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700">
        <h3 class="text-md font-bold tracking-wider">Pending Complaint</h3>
            <p class="text-3xl ">234</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-red-400">
        <div class="p-4 bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700">
        <h3 class="text-md font-bold tracking-wider">Total Manager</h3>
            <p class="text-3xl ">3</p>
        </div>
    </div>
</div>



{/* end of counter card */}




{/*  notice board*/}

  <div class="lg:pt-5 pt-3 flex flex-wrap justify-center">
            {renderTable()}
        </div>







      </div>
    </>
  );
};
