import MonthlySummaryBox from "../components/MonthlySummaryBox";
import Navbar from "../components/Navbar";
import HeaderCalendar from "../components/headerCalendar";
import MonthData from "../components/MonthData";
import YearSlider from "../components/yearSlider";

function CalendarPage() {
  return (
    <>
      <HeaderCalendar />
      <div className="h-24"></div>
      <YearSlider/>
      <div className="flex mb-20 flex-wrap">
        <MonthlySummaryBox details={MonthData}/>
      </div>
      <Navbar />
    </>
  );
}

export default CalendarPage;
