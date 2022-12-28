import React, { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import {
  morningTime,
  afternoonTime,
  eveningTime,
  handleCreateSchedule,
} from "../utils/resource";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [schedule, setSchedule] = useState([
    {
      day: "Sun",
      startTimeMorningOne: "",
      startTimeMorningTwo: "",
      startTimeMorningThree: "",
      startTimeAfternoonOne: "",
      startTimeAfternoonTwo: "",
      startTimeAfternoonThree: "",
      startTimeEveningOne: "",
      startTimeEveningTwo: "",
      startTimeEveningThree: "",
    },
    {
      day: "Mon",
      startTimeMorningOne: "",
      startTimeMorningTwo: "",
      startTimeMorningThree: "",
      startTimeAfternoonOne: "",
      startTimeAfternoonTwo: "",
      startTimeAfternoonThree: "",
      startTimeEveningOne: "",
      startTimeEveningTwo: "",
      startTimeEveningThree: "",
    },
    {
      day: "Tue",
      startTimeMorningOne: "",
      startTimeMorningTwo: "",
      startTimeMorningThree: "",
      startTimeAfternoonOne: "",
      startTimeAfternoonTwo: "",
      startTimeAfternoonThree: "",
      startTimeEveningOne: "",
      startTimeEveningTwo: "",
      startTimeEveningThree: "",
    },
    {
      day: "Wed",
      startTimeMorningOne: "",
      startTimeMorningTwo: "",
      startTimeMorningThree: "",
      startTimeAfternoonOne: "",
      startTimeAfternoonTwo: "",
      startTimeAfternoonThree: "",
      startTimeEveningOne: "",
      startTimeEveningTwo: "",
      startTimeEveningThree: "",
    },
    {
      day: "Thu",
      startTimeMorningOne: "",
      startTimeMorningTwo: "",
      startTimeMorningThree: "",
      startTimeAfternoonOne: "",
      startTimeAfternoonTwo: "",
      startTimeAfternoonThree: "",
      startTimeEveningOne: "",
      startTimeEveningTwo: "",
      startTimeEveningThree: "",
    },
    {
      day: "Fri",
      startTimeMorningOne: "",
      startTimeMorningTwo: "",
      startTimeMorningThree: "",
      startTimeAfternoonOne: "",
      startTimeAfternoonTwo: "",
      startTimeAfternoonThree: "",
      startTimeEveningOne: "",
      startTimeEveningTwo: "",
      startTimeEveningThree: "",
    },
    {
      day: "Sat",
      startTimeMorningOne: "",
      startTimeMorningTwo: "",
      startTimeMorningThree: "",
      startTimeAfternoonOne: "",
      startTimeAfternoonTwo: "",
      startTimeAfternoonThree: "",
      startTimeEveningOne: "",
      startTimeEveningTwo: "",
      startTimeEveningThree: "",
    },
  ]);

  const [selectedTimezone, setSelectedTimezone] = useState({});

  const handleTimeChange = (e, id) => {
    const { name, value } = e.target;
    if (value === "Select") return;
    const list = [...schedule];
    list[id][name] = value;
    setSchedule(list);
  };

  const handleSaveSchedules = () => {
    if (JSON.stringify(selectedTimezone) !== "{}") {
      console.log(schedule);
      handleCreateSchedule(selectedTimezone, schedule, navigate);
    } else {
      toast.error("Select your timezone");
    }
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("_myEmail");
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("_id")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <nav className="flex justify-between bg-black">
        <h2 className="p-2 m-5 bg-black text-white rounded">BookMe</h2>
        <button
          onClick={handleLogout}
          className="logout__btn p-2 m-5 transition ease-in-out delay-150 bg-green-500 hover:bg-green-600 duration-300 rounded"
        >
          Log out
        </button>
      </nav>
      <div className="flex justify-center items-center rounded p-10">
        <main className="dashboard__main flex flex-col bg-slate-300 rounded p-2 w-3/5">
          <h2 className="dashboard__heading p-2 text-center font-bold">
            Select your availability
          </h2>

          <div className="timezone__wrapper">
            <p className="p-2 font-bold">Pick your timezone</p>
            <TimezoneSelect
              value={selectedTimezone}
              onChange={setSelectedTimezone}
              className="p-2"
            />
            {schedule.map((sch, id) => (
              <>
                <div className="form flex justify-center" key={id}>
                  <div className="select__wrapper flex-col">
                    <div className="flex justify-center items-center text-white bg-black">
                      {sch.day}
                    </div>
                    <div className="flex-col m-3">
                      <label htmlFor="startTime">Morning </label>
                      <select
                        className="w-32"
                        name="startTime"
                        id="startTime"
                        onChange={e => handleTimeChange(e, id)}
                      >
                        {morningTime.map(t => (
                          <option key={t.id} value={t.t} id={t.id}>
                            {t.t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-col m-3">
                      <label htmlFor="startTime">Afternoon </label>
                      <select
                        className="w-32"
                        name="startTime"
                        id="startTime"
                        onChange={e => handleTimeChange(e, id)}
                      >
                        {afternoonTime.map(t => (
                          <option key={t.id} value={t.t} id={t.id}>
                            {t.t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-col m-3">
                      <label htmlFor="startTime">Evening </label>
                      <select
                        className="w-32"
                        name="startTime"
                        id="startTime"
                        onChange={e => handleTimeChange(e, id)}
                      >
                        {eveningTime.map(t => (
                          <option key={t.id} value={t.t} id={t.id}>
                            {t.t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="saveBtn__container flex justify-center">
            <button
              onClick={handleSaveSchedules}
              className="p-2 m-5 transition ease-in-out delay-150 bg-green-500 hover:bg-green-600 duration-300 rounded"
            >
              SAVE SCHEDULES
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
