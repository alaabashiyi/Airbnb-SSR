import MdCard from "../mdcard/MdCard"

const MdCardsContainer = ({ data }) => {
    return (
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -mr-3">
            {data?.map(({ img, title }) => (
                <MdCard key={title} img={img} title={title} />
            ))}
        </div>
    )
}

export default MdCardsContainer;
