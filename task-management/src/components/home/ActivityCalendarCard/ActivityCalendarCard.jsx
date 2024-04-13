'use client'
const ActivityCalendar = () => {

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const getPrevMonthDates = () => {
        const prevMonthDates = [];
        const startingDay = daysInPrevMonth - firstDayOfMonth + 1;
        for (let i = startingDay; i <= daysInPrevMonth; i++) {
            prevMonthDates.push(i);
        }
        return prevMonthDates;
    };

    const getMonthDates = () => {
        const monthDates = [];
        for (let i = 1; i <= daysInMonth; i++) {
            monthDates.push(i);
        }
        return monthDates;
    };

    const getNextMonthDates = () => {
        const nextMonthDates = [];
        const remainingDays = 7 - ((getPrevMonthDates().length + getMonthDates().length) % 7);
        for (let i = 1; i <= remainingDays; i++) {
            nextMonthDates.push(i);
        }
        return nextMonthDates;
    };


    return (
        <div>
            <header className="mb-2 font-semibold">{monthNames[month]} {year}</header>
            <div className="grid grid-cols-7 grid-rows-6 gap-1 place-items-center">
                {daysOfWeek.map((date) => <div className="py-2 px-3 font-semibold">{date}</div>)}
                {getPrevMonthDates().map((date) =><div className=" text-gray-400 py-2 px-3">{date}</div>)}
                {getMonthDates().map((date, index) =>index<(day-1)?<div className=" text-gray-400 py-2 px-3">{date}</div>:index==(day-1)?<div className=" text-gray-900 rounded-full bg-purple  -400 py-2 px-3">{date}</div>:
                <div className=" text-gray-900 py-2 px-3">{date}</div>
                )}
                {getNextMonthDates().map((date) =><div className=" text-gray-400 py-2 px-3">{date}</div>)}
            </div>
        </div>
    );
};

export default ActivityCalendar;