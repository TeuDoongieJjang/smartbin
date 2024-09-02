import { React, useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [trashDate, setTrashDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api`);
        if (!res.data) {
        } else {
          setTrashDate(res.data.dateTime);
        }
      } catch (error) {
        console.error("Error fetching trash dates:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5 bg-blue-500 min-h-screen items-center justify-center">
      {!trashDate.length ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col flex-grow w-full max-w-sm mx-auto mb-1 md:mb-4 p-3 h-fit rounded-2xl border bg-white border-white shadow-md">
            <div className="mb-2 p-3 h-fit rounded-2xl border bg-yellow-400 border-white shadow-md">
              <h1 className="text-2xl font-bold pt-1 mb-4 text-center text-black">
                SMART BIN HISTORY LOG
              </h1>
            </div>

            <div className="rounded-2xl border border-white overflow-hidden shadow-md">
              <table className="bg-gray-800 table-auto border w-full">
                <thead>
                  <tr>
                    <th className="border sm:text-lg md:tex-xl px-2 py-1 w-fit text-white">
                      NO
                    </th>
                    <th className="border sm:text-lg md:text-xl px-2 py-1 w-full text-white">
                      DATE TIME
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trashDate.map((time, index) => (
                    <tr key={`time-${index}`} className="text-center">
                      <td className="border sm:text-lg md:text-xl px-2 py-1 text-white">
                        {index + 1}
                      </td>
                      <td className="border text-sm sm:text-base md:text-lg px-2 py-1 text-white">
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
