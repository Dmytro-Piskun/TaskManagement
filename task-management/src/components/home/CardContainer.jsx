import Link from "next/link"
import Image from 'next/image'

const CardContainer = ({ title, subtitle, children, link, linkIcon,linkAlt, className }) => {

    let cardContaineClasses = "glassy"

    if (className) {
        cardContaineClasses + " "
    }

    return (
        <section className="glassy w-fit p-2 rounded-[2rem]">
            <header className="p-2 flex justify-between" >
                <div>
                    <h1 className="text-xl font-bold">{title}</h1>
                    <h2 className="text-gray-700 text-sm mt-1">{subtitle}</h2>
                </div>
                {link &&
                    <Link href={link}>
                        <i className="select-none size-12 rounded-full flex justify-center items-center active:scale-95 transition-all glassy p-2">
                            <Image src={linkIcon} alt={linkAlt} className="drag-none" width={20} />
                        </i>
                    </Link>}
            </header>
            <main className=" bg-white rounded-3xl p-5">{children}</main>
        </section>
    );
};

export default CardContainer;