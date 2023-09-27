
import Chart from 'react-apexcharts'

const Statistics = () => {
    const donationItem = JSON.parse(localStorage.getItem('add'));
    let length = 0;
    if(donationItem){
        length = donationItem.length;
    }
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <Chart
                width={500}
                hight={500}
                type="pie"
                series={[12, length]}
                options={{
                    labels: ["Total Donation", "My Donation"],
                    legend: {
                        show: true,
                        position: "bottom",
                    },
                    colors: ["#FF444A", "#00C49F"],
                }}
            />
        </div>
    );
};
    
export default Statistics;