import React, { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const navigate = useNavigate();

  //👇🏻 Runs when a user sign out
  const handleLogout = () => {
      localStorage.removeItem("_id");
      localStorage.removeItem("_myEmail");
      navigate("/");
  };

  return (
      <div>
          <nav className='flex justify-between'>
              <h2 className="p-2 m-5 bg-black text-white rounded">BookMe</h2>
              <button onClick={handleLogout} className='logout__btn p-2 m-5 transition ease-in-out delay-150 bg-green-500 hover:bg-green-600 duration-300 rounded'>
                  Log out
              </button>
          </nav>
          <div className="flex justify-center items-center rounded p-10">
          <main className='dashboard__main flex flex-col bg-slate-300 rounded p-2 w-3/5'>
              <h2 className='dashboard__heading p-2 text-center font-bold'>Select your availability</h2>

              <div className='timezone__wrapper'>
                  <p className="p-2 font-bold">Pick your timezone</p>
                  <TimezoneSelect
                      value={selectedTimezone}
                      onChange={setSelectedTimezone}
                  />
              </div>
          </main>
          </div>
      </div>
  );
};

export default Dashboard