import Cards from "./Cards";

const Card = ({cards}) => {
    return (
        <div className="grid lg:grid-cols-4 mt-24 md:grid-cols-2 grid-cols-1 container mx-auto gap-9">
            {
            cards?.map(card => <Cards key={card.id} card = {card}></Cards>)
            }
        </div>
    );
};

export default Card;