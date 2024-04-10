'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Navlink = ({icon,alt,path = "/",...props}) => {
 const pathname = usePathname();
 
 const isActive = pathname===path;

 let classes = "size-12 bg-slate-100 rounded-full shadow-sm flex justify-center items-center hover:bg-slate-200 active:bg-slate-300 transition-all" 

 if(isActive){
    classes += " bg-slate-900 hover:bg-slate-800 active:bg-slate-600"
 }

 console.log(icon); 

    return (
        <Link href={path} {...props}>
            <i className={classes}>
                <Image src={icon} alt={alt} style={isActive?{filter: 'invert(100%)'}:null} width={20}/>
            </i>
        </Link>

    );
};

export default Navlink;