
import PropTypes from 'prop-types';
import swal from 'sweetalert';
const AddCard = ({allCards}) => {
    const {id, img,title, description,price, text_color} = allCards;
    const handleAddToDonation = () =>{
        const addedDonationItem = [];
        const donationItem = JSON.parse(localStorage.getItem('add'));
        if(!donationItem){
            addedDonationItem.push(allCards);
            localStorage.setItem('add', JSON.stringify(addedDonationItem))
        }else{
            const isExiest = donationItem.find(donet => donet.id === id);
            if(!isExiest){
                addedDonationItem.push(...donationItem, allCards)
                localStorage.setItem('add', JSON.stringify(addedDonationItem))
                swal("Good job!", "successfully added", "success");
            }else{
                swal("Error!", "already added", "error");
            }
        }
    }
    return (
        <div>
            <div className="">
               <div className='relative'>
               <img className="w-full lg:h-[80vh] md:h-[90vh] h-[80vh]" src={img}/>
               <div className='bg-black w-full h-32 py-10 relative -mt-32  bg-opacity-60'>
                    <button onClick={handleAddToDonation} style={{background: text_color}} className='absolute ml-10 text-white font-semibold text-xl py-2 px-5 rounded-lg'>Donate ${price}</button>
               </div>
               </div>
            <div className="py-10">
                <h4 className="block font-sans text-3xl font-bold leading-snug text-blue-gray-900 antialiased">
                {title}
                </h4>
                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                {description}
                </p>
            </div>
            </div>
        </div>
    );
};
AddCard.propTypes = {
    allCards: PropTypes.object
}
export default AddCard;