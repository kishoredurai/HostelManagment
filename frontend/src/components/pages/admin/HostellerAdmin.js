import React from "react";
import Adminheader from "../../layout/header/adminheader";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const HostellerAdmin = () => {
  const navigate = useNavigate();

    const [hosteller,setHosteller] = useState();
    const [backuphosteller, setbackupHosteller] = useState([]);


  // useeffect to get data
  useEffect(() => {
    var item_value;
    const profiles = () => {
      item_value = JSON.parse(sessionStorage.getItem("student_key"));
      
    };

    fetchData();
  }, []);

 // delete Hosteller

 const delete_hosteller = (id) => {

  // eslint-disable-next-line no-restricted-globals
  if (confirm("Do you want to delete this record !!💀") == true) {
    
    fetch("/api/Hosteller/" + id, {
      method: "delete",
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((res) => {
        if (res.status == 400) {
          throw new Error("Server responds with error!");
        }
        if (res.status == 204) {
          fetchData();

        }
        if (res.status == 200) {
          fetchData();


        }
        if (res.status == 500) {
          alert("user is assigned with room so cant deleted")  ;

      }
      return;
      })

      .then((data) => {
        if (data) {
          alert("Error Cant delete");
        }
      });
  };
  }

// end of delete Hosteller

  
  


    // fetch hosteller all data
    const fetchData = (id) => {
      fetch("/api/Hosteller")
        .then((response) => {
          return response.json();
        })
        .catch((error) => {
          alert("Unable to connect Backend");
        })
        .then((data) => {
          setHosteller(data);
          setbackupHosteller(data);
          console.log(data);
        });
    };

    //end of fetch hosteller all data



    // render table data
    
    const renderTable = () => {
      if (Array.isArray(hosteller)) {
        return hosteller.map((user) => {
          return (
            <>
              <tr class="border-b dark:border-gray-700">
                        <td class="w-4 p-4 border">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          
                          {user.name}
                        </th>
                        <td class="px-4 py-3 border">{user.gender}</td>
                        <td class="px-4 py-3 border">{user.age}</td>
                        <td class="px-4 py-3 border">{user.email}</td>
                        <td class="px-4 py-3 border">{user.mobile}</td>
                        <td class="px-4 py-3 border">{user.address}</td>

                        <td class="px-4 py-3 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={()=>navigate("/admin/hosteller/details?id="+user.hostellerId)}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>

                            <span class="sr-only">Icon description</span>
                          </button>

                          <button
                           onClick={() => {delete_hosteller(user.hostellerId)}}
                            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-4 h-4"
                            >
                              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                              <path
                                fill-rule="evenodd"
                                d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <span class="sr-only">Icon description</span>
                          </button>
                        </td>
                      </tr>
            </>
          );
        });
      }
    };

    // end of render table data

    // search function

    const handleSearch = (event) => {
      const value = event.target.value.toLowerCase();
      searchfunction(value);
    };
  
    const searchfunction = (search) => {
      let filteredData = backuphosteller;
  
      if (search !== "") {
        filteredData = filteredData.filter(
          (item) => item.name.includes(search) || item.occupation.includes(search)
        );
        console.log(search);
      }
  
      setHosteller(filteredData);
      if (search == "") {
        fetchData();
      }
    };

  return (
    <>
      <Adminheader />

      <div className="items-center lg:mx-20 lg:mt-10 mt-6 ">
        {/* breadcrumb */}

        <nav
          class="flex px-3 py-2 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="/admin/dashboard"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  Hosteller
                </a>
              </div>
            </li>
          </ol>
        </nav>

        {/* end of breadcrumb */}

        {/* data card */}

        <div class="h-full mt-6 w-full bg-white rounded-md border border-gray-300 border-1 shadow-2xl overflow-hidden ">
          {/* table */}

          <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-x">
              <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                      <label for="simple-search" class="sr-only">
                        Search
                      </label>
                      <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          onChange={(e) => {
                            handleSearch(e);
                          }}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search"
                          required=""
                        />
                      </div>
                    </form>
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button
                      type="button"
                      onClick={()=> navigate("/admin/hosteller/Add")}
                      class="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2">
  <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
</svg>

                      Add Hosteller
                    </button>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                      
                    </div>
                  </div>
                </div>
                <div class="overflow-x-auto ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-collapse">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-all"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Name
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Gender
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Age
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          EmailId
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          mobile
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Address
                        </th>

                        <th scope="col" class="px-4 py-3 border">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                     {renderTable()}
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* end table */}
        </div>






      </div>
    </>
  );
};
