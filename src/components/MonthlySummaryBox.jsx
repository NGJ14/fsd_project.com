
const MonthlySummaryBox = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <div className="w-1/2 p-0.5 " key={index}>
                    <div className={value.bgClass}>
                        <div className="text-6xl font-extrabold">{value.month}</div>
                        <div>   </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MonthlySummaryBox;
