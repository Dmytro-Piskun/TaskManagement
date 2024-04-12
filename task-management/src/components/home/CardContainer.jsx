const CardContainer = ({title,subtitle,children,link,linkIcon,className}) => {

let cardContaineClasses = "glassy"

if(className){
    cardContaineClasses + " "
}

    return (
        <section className="glassy w-fit p-3 rounded-3xl">
            <header className=" p-2" >
                <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <h2 className="text-gray-700 text-sm mt-1">{subtitle}</h2>
                </div>
            </header>
            <main className=" bg-white rounded-3xl p-5">{children}</main>
        </section>
    );
};

export default CardContainer;