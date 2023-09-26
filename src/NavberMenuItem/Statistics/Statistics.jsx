
import Chart from 'react-apexcharts'

const Statistics = () => {
    const donationItem = JSON.parse(localStorage.getItem('add'));
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <Chart
                width={500}
                hight={500}
                type="pie"
                series={[10, donationItem.length]}
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