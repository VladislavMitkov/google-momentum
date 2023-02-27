import React from "react";
// moment
import Moment from "react-moment";
import "moment-timezone";

// greetings depending on what time of the day it is
let today = new Date();
let hour = today.getHours();
let greeting = () => {
  if (hour >= 5 && hour < 11) {
    return "Good Morning, Vladi.";
  } else if (hour >= 11 && hour < 17) {
    return "Good Afternoon, Vladi.";
  } else if (hour >= 17 && hour < 24) {
    return "Good Evening, Vladi.";
  } else {
    return "What are you doing up at this hour?";
  }
};

const Time = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[200px] mt-[100px]">
      <div className="flex flex-col items-center text-zinc-100 font-bold text-6xl shadow bg-sky-200 bg-transparent/20 shadow-slate-700 rounded-xl hover:shadow-zinc-100">
        <p className="m-5">
          <Moment format="LT"></Moment>
        </p>
        <p className="m-5">{greeting()}</p>
      </div>
    </div>
  );
};

export default Time;
