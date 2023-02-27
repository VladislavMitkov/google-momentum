import React, { useEffect, useState } from "react";
import axios from "axios";

const Quote = () => {
  const url = `https://api.adviceslip.com/advice`;
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setQuote(res.data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bottom-0 absolute flex items-center justify-center w-full h-20">
      <div className="flex justify-center rounded-xl bg-sky-200 bg-transparent/20  h-10 mx-10 items-center shadow shadow-slate-700 hover:shadow-zinc-100">
        <p className="font-semibold text-zinc-100">{quote && quote}</p>
      </div>
    </div>
  );
};

export default Quote;
