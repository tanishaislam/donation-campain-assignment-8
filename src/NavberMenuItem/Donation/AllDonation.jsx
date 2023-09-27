
import PropTypes from 'prop-types';

const AllDonation = ({donate}) => {
    const { img, title, category_Name, category_Background, category_name_bg, text_color, price} = donate;
    return (
        <div>
            <div style={{background: category_Background}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                src={img}
                className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
            <span style={{color: text_color, background: category_name_bg}} className="font-semibold px-5 py-1 rounded-md">{category_Name}</span>
                <h4 className="my-3 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {title}
                </h4>
                <p style={{color: text_color}} className="mb-5 block font-sans text-lg font-semibold leading-relaxed text-gray-700 antialiased">
                $ {price}
                </p>
                <button style={{ background: text_color}} className="text-lg font-semibold text-white px-4 py-1 rounded-md">
                    View details
                </button>
            </div>
            </div>
        </div>
    );
};

AllDonation.propTypes = {
    donate: PropTypes.object
}

export default AllDonation;