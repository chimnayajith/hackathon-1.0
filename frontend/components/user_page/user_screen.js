import { useEffect, useState } from "react";

const index = () => {
  const [users , setUsers] = useState([])
  useEffect(()=> { 
    fetch('http://127.0.0.1:8000/api/get-users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },  
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
       setUsers(data)
      })
      .catch((error) => {
       console.error('Error:', error);
       return 'An error occurred'
      });
  },[])
  return (
    <div>
      <div className="w-full lg:h-96 xl:h-120 bg-white px-4 rounded-lg shadow-md">
        <div className="h-[96%] ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex justify-between border-b border-gray-200 py-2 w-full">
                <th className="w-[10%] flex justify-start">Users</th>
                <th className="w-[30%] flex justify-start">Node adress</th>
                <th className="w-[30%] flex justify-start">Access Level</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user)=> (
                  <tr className="flex justify-between border-b border-gray-200 py-3 w-full">
                  <td className="w-[10%] flex justify-start">
                    <div className="flex items-between gap-x-2">
                      <div>
                        <p className="lg:text-xs xl:text-sm">{user["username"]}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[30%] flex justify-start]">
                    <div>
                      <p>{user["node_address"]}</p>
                    </div>
                  </td>
                  <td className="w-[30%] flex justify-start]">
                    <div>
                    <p>{user["isAdmin"] ? "Admin" : "Staff"}</p>
                    </div>
                  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default index;
