import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from 'date-fns'
import InfoCard from "../components/infocard/InfoCard";

const Search = ({ searchResults }) => {
    const router = useRouter();
    const {
        location,
        startDate,
        endDate,
        numOfGuest
    } = router.query;


    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${numOfGuest} guests`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays -  {range} - for {numOfGuest} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>


                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(item => (
                            <InfoCard key={item.img} data={item} />
                        ))}
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search


export const getServerSideProps = async () => {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}