import Image from 'next/image'
import search from '@/assets/search-icon.svg'

const Search = () => {
    return (
        <div className="size-12 glassy rounded-full flex hover:bg-slate-100 active:scale-95 transition-all px-4">
        <Image src={search} alt='search'/>
        </div>
    );
};

export default Search;