'use client'
const ActivityCalendar = () => {

    const now = new Date();
    const year = now.getFullYear();
    // const month = now.getMonth();
    const month = 2;

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
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    console.log("daysInMonth",daysInMonth)
    console.log("firstDayOfMonth",firstDayOfMonth)

    return (
        <div>
            <header>{monthNames[month]} {year}</header>
            <div className="grid grid-cols-7 grid-rows-6">

            </div>
        </div>
    );
    // .parent {
    //     display: grid;
    //     grid-template-columns: repeat(7, 1fr);
    //     grid-template-rows: repeat(6, 1fr);
    //     grid-column-gap: 0px;
    //     grid-row-gap: 0px;
    //     }
};

export default ActivityCalendar;