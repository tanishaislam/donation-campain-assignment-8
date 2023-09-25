import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AddCard from "./AddCard";

const AddedCard = () => {
    const [allCards, setAllCards] = useState([]);
    const {id} = useParams()               
    const lod = useLoaderData();
    useEffect(()=>{
        const findlod = lod?.find((loar) => loar.id == id )
        setAllCards(findlod)
    },[id, lod])
    return (
        <div className="py-14 container mx-auto">
            <AddCard allCards={allCards}></AddCard>
        </div>
    );
};

export default AddedCard;