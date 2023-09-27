import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {
    const {id, img, title, category_Name, category_Background, category_name_bg, text_color} = card;
    return (
    
       <Link to={`/card/${id}`}>
        <div>
            <div className='rounded-md' style={{backgroundColor: category_Background}}>
                <img className="w-full" src={img} />
            <div className=" py-5 px-4">
            <span style={{color: text_color, background: category_name_bg}} className="font-semibold px-5 py-1 rounded-md">{category_Name}</span>
                <h2 style={{color: text_color}} className="card-title pt-2">{title}</h2>
            </div>
            </div>
        </div>
       </Link>
    );
};
Cards.propTypes = {
    card: PropTypes.object
}

export default Cards;