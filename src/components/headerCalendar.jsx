import calendarLogo from "../components/images/calendar.svg";

const HeaderCalendar = () => {
    return (
        <>
            <div className="text-white text-5xl px-4 h-24 font-extrabold a flex justify-between items-center fixed bg-black w-full">
                <div className="content-center">SUMMARY</div>
                <div>
                    <img className="h-16" src={calendarLogo} alt="calendar" />
                </div>
            </div>
        </>
    );
};

export default HeaderCalendar;
