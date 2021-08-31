import { useState } from 'react';
import Image from 'next/image';
import { SearchIcon, MenuIcon, UserCircleIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/solid'
import SearchInput from '../searchinput/SearchInput';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';



const Header = () => {
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numOfGuest, setNumOfGuest] = useState(1);


    const selectionRange = { startDate, endDate, key: 'selection' }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => setSearch('');

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src="http://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <SearchInput search={search} setSearch={setSearch} />
            </div>
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Because a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
            {search && <div className="flex flex-col col-span-3 mx-auto">
                <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#FD5B61"]} onChange={handleSelect} />
                <div className="flex items-center border-b mb-4">
                    <h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guests</h2>
                    <UsersIcon className="h-5" />
                    <input type="number" onChange={e => setNumOfGuest(e.target.value)} value={numOfGuest} className="w-12 pl-2 text-lg outline-none text-red-400" />
                </div>

                <div className="flex">
                    <button className="flex-grow text-gray-500">Search</button>
                    <button className="flex-grow text-red-400" onClick={resetInput}>Cancel</button>
                </div>

            </div>}
        </header>
    )
}

export default Header;
