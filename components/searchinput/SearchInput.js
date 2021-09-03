import { SearchIcon } from '@heroicons/react/solid'

const SearchInput = ({ search, setSearch, placeholder }) => {
    return (
        <>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" type='search' placeholder={placeholder || 'Start your search'} />
            <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </>
    )
}

export default SearchInput
