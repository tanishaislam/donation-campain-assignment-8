
const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/banner.jpg')] bg-cover">
            <div className="text-center h-[80vh] flex justify-center items-center flex-col bg-white bg-opacity-90">
                <h1 className="text-5xl font-bold text-[#0B0B0B] pb-10">I Grow By Helping People In Need</h1>
                <div>
                <input className="border-2 lg:pr-40 md:pr-32 pr-12 pl-3 py-3 rounded-s-lg" type="text" name="name" placeholder="Search here...."/>
                <button className="bg-red-500 font-semibold text-white p-3  px-5 rounded-e-lg">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;