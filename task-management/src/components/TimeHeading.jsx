'use client'

const TimeHeading = () => {

    const currentDate = new Date();

    const currentHours = currentDate.getHours();

    let headingText = "Good day!";
    let subheadingText = "Let`s make the day productive.";

    if (currentHours >= 4 && currentHours < 12) {
        headingText = "Good morning!"
        subheadingText = "Let`s start the day productively."
    }
    if (currentHours >= 12 && currentHours < 18) {
        headingText = "Good afternoon!"
        subheadingText = "Let`s make the day productive."
    }
    if (currentHours >= 18 || currentHours < 4) {
        headingText = "Good evening!"
        subheadingText = "Let`s finish the day productively."
    }

    return (
    <div>
        <h1 className=" text-5xl font-bold tracking-wider">
            {headingText}
        </h1>
        <h2 className=" text-gray-700 text-xl mt-4">
            {subheadingText}
        </h2>
    </div>
    );
};

export default TimeHeading;