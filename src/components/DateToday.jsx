import React from "react";

const DateToday = () => {
  let today = new Date();
  let date = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

  return (
    <div className="flex justify-center text-zinc-100 font-semibold pt-10">
      <div className="rounded-xl shadow bg-sky-200 bg-transparent/20 shadow-slate-700 hover:shadow-zinc-100">
        <p className="mx-10">{date}</p>
      </div>
    </div>
  );
};

export default DateToday;
