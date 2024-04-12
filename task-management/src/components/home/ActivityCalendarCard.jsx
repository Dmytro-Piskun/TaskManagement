'use client'
const ActivityCalendar = () => {

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

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
                {daysOfWeek.map((day) => <div className="p-3 font-semibold">{day}</div>)}
                {getPrevMonthDates().map((day) =><div className=" text-gray-400 p-3">{day}</div>)}
                {getMonthDates().map((day) =><div className=" text-gray-900 p-3">{day}</div>)}
                {getNextMonthDates().map((day) =><div className=" text-gray-400 p-3">{day}</div>)}
            </div>
        </div>
    );
};

export default ActivityCalendar;