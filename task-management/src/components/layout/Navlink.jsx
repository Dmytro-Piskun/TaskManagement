'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Navlink = ({icon,alt,path = "/",...props}) => {
 const pathname = usePathname();
 
 const isActive = pathname===path;

 let classes = "select-none size-12 rounded-full flex justify-center items-center active:scale-95 transition-all glassy p-2" 

 if(isActive){
    classes += " bg-neutral-900"
 }
 else{
    classes += " hover:bg-slate-100"
 }

    return (
        <Link href={path} {...props}>
            <i className={classes}>
                <Image src={icon} alt={alt} style={isActive?{filter: 'invert(90%)'}:null} className="drag-none" width={20}/>
            </i>
        </Link>

    );
};

export default Navlink;