import SmallCard from "../smallcard/SmallCard"

const SmallCardsContainer = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ location, img, distance }) => (
                <SmallCard key={location} img={img} distance={distance} location={location} />
            ))}
        </div>
    )
}

export default SmallCardsContainer
