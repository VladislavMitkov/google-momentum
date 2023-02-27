import Time from "./components/Time";
import Weather from "./components/Weather";
import DateToday from "./components/DateToday";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="bg-hero h-screen w-full bg-no-repeat bg-cover overflow-hidden">
      <Weather />
      <Time />
      <DateToday />
      <Quote />
    </div>
  );
}

export default App;
