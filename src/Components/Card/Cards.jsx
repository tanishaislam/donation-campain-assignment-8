

const Cards = ({card}) => {
    const {img, title, category_Name, category_Background, category_name_bg, text_color} = card;
    return (
        <div>
            <div className='rounded-md' style={{backgroundColor: category_Background}}>
                <img className="w-full" src={img} />
            <div className=" py-5 px-4">
            <span style={{color: text_color, background: category_name_bg}} className="font-semibold px-5 py-1 rounded-md">{category_Name}</span>
                <h2 style={{color: text_color}} className="card-title pt-2">{title}</h2>
            </div>
            </div>
        </div>
    );
};

export default Cards;