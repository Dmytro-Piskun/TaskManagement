'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Navlink = ({icon,alt,path = "/",...props}) => {
 const pathname = usePathname();
 
 const isActive = pathname===path;

 let classes = "size-12 rounded-full flex hover:bg-slate-100 justify-center items-center active:scale-95 transition-all glassy " 

 if(isActive){
    classes += " bg-slate-900 hover:bg-slate-800"
 }
    return (
        <Link href={path} {...props}>
            <i className={classes}>
                <Image src={icon} alt={alt} style={isActive?{filter: 'invert(100%)'}:null} width={20}/>
            </i>
        </Link>

    );
};

export default Navlink;