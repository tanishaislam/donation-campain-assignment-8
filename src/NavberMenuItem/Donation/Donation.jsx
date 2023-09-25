import { useEffect, useState } from "react";
import AllDonation from "./AllDonation";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [seeAll, setSeeAll] = useState(false);
     useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('add'));
        if(donationItem){
            setDonation(donationItem)
        }else{
            setNoFound("No data found")
        }
     },[])
     console.log(donation)
    return (
        <div>
            {noFound? <p className="h-[80vh] flex justify-center items-center text-2xl font-bold">{noFound}</p>: <div>
                
                <div className="my-20 container mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                    seeAll?
                    donation.map(donate=> <AllDonation key={donate.id} donate={donate}></AllDonation>):
                    donation.slice(0,2).map(donate=> <AllDonation key={donate.id} donate={donate}></AllDonation>)
                    }
                </div>
                {donation.length>2&& seeAll?'':<button onClick={()=>setSeeAll(!seeAll)} className="text-lg font-semibold bg-green-600 mx-auto block text-white px-4 py-1 rounded-md ">
                    See All
                </button>
                }
                </div>}
        </div>
    );
};

export default Donation;