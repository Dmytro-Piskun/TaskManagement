import Image from 'next/image'
import search from '@/assets/search-icon.svg'

const Search = () => {
    return (
        <button className="cursor-pointer select-none size-12 glassy rounded-full flex justify-center items-center hover:bg-slate-100 active:scale-95 transition-all px-4">
        <Image src={search} alt='search' className='drag-none'/>
        </button>
    );
};

export default Search;