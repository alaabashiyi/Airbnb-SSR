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


    const selectionRange = { startDate, endDate, key: 'selection' }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

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
                <div className="flex">
                    <h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guests</h2>
                    <UsersIcon className="h-5" />
                </div>

            </div>}
        </header>
    )
}

export default Header;
