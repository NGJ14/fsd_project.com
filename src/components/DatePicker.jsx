// import { Datepicker } from "flowbite-react";
// import '../../node_modules/flowbite/dist/flowbite.css'

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Add from "./images/add.svg"
import Delete from "./images/delete.svg"

function SelectDate() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [eventAmt, setEventAmt] = useState("");
    const [events, setEvents] = useState([]);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Event_Amt_Update = (amount) => {
        setEventAmt(amount.target.value);
    };

    const Create_Event_Fun = () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
                amount: eventAmt,
            };
            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
            setEventAmt("");
            setSelectedDate(newEvent.date);
        }
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.id !== eventId);
        setEvents(updated_Events);
    };

    return (
        <>
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        className="w-[90%] sm:w-1/2 mt-3 bg-green-200 rounded-lg mx-auto"
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={({ date }) =>
                            selectedDate &&
                                date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                    (event) =>
                                        event.date.toDateString() ===
                                        date.toDateString(),
                                )
                                    ? "event-marked"
                                    : ""
                        }
                    />{" "}
                </div>
                <div className="w-[90%] sm:w-1/2 mx-auto py-3 event-container">
                    {" "}
                    {selectedDate && (
                        <div className="event-form text-xl w-full items-center flex-col py-3 rounded-lg mb-3 bg-blue-200">
                            <div className="flex justify-center mb-2 h-10">
                                <input
                                    className="text-center border-solid border-4 border-blue-950 w-5/6 rounded-full"
                                    type="text"
                                    placeholder="Expense"
                                    value={eventName}
                                    onChange={Event_Data_Update}
                                />{" "}
                            </div>
                            <div className="flex justify-center mb-2 h-10">
                                <input
                                    className="text-center border-solid border-4 border-blue-950 w-5/6 rounded-full"
                                    type="number"
                                    min="0.00"
                                    placeholder="Amount"
                                    value={eventAmt}
                                    onChange={Event_Amt_Update}
                                />{" "}
                            </div>
                            <div className="flex justify-center h-12">
                                <button
                                    className="create-btn"
                                    onClick={Create_Event_Fun}
                                >
                                    <img src={Add} className="h-12 bg-blue-950 p-1 rounded-full" alt="" />{" "}
                                </button>{" "}
                            </div>

                        </div>
                    )}
                    {events.length > 0 && selectedDate && (
                        <div className="event-list bg-orange-200 py-3 rounded-lg">
                            <div className="event-cards">
                                {" "}
                                {events.map((event) =>
                                    event.date.toDateString() ===
                                        selectedDate.toDateString() ? (
                                        <div
                                            key={event.id}
                                            className="event-card flex justify-between bg-[#111] text-gray-300 mx-3 py-1 px-2"
                                        >
                                            <div className="flex justify-between w-full mr-5">
                                                    <div className="event-card-body">
                                                        <p className="event-title min-h-10 text-2xl font-bold text-left content-center">
                                                            {" "}
                                                            {event.title}{" "}
                                                        </p>{" "}
                                                    </div>{" "}
                                                    <div className="event-card-body">
                                                        <p className="event-title h-10 text-2xl font-bold content-center">
                                                            {" "}
                                                            {event.amount}{" "}
                                                        </p>{" "}
                                                    </div>{" "}
                                            </div>
                                            <div className="event-card-header">
                                                <div className="event-actions">
                                                    <button
                                                        className="delete-btn rounded-full"
                                                        onClick={() =>
                                                            Delete_Event_Fun(
                                                                event.id,
                                                            )
                                                        }
                                                    >
                                                        <img src={Delete} className="h-10" alt="" />{" "}
                                                    </button>{" "}
                                                </div>{" "}
                                            </div>{" "}

                                        </div>
                                    ) : null,
                                )}{" "}
                            </div>{" "}
                        </div>
                    )}{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
}

export default SelectDate