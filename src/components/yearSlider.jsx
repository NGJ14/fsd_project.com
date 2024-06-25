import arrowLeft from './images/arrow_left.svg'
import arrowRight from './images/arrow_right.svg'
import { useState } from 'react';

const YearSlider = () => {

    const [year, setYear] = useState(2024);

    function increment() {
        setYear(function (prevYear) {
            return (prevYear += 1);
        });
    }

    function decrement() {
        setYear(function (prevYear) {
            if (prevYear > 0) {
                return (prevYear -= 1);
            } else {
                return (prevYear = 0);
            }
        });
    }

    return (
        <>
            <div className="h-20 pb-4 flex justify-center items-center">
                <div>
                    <button onClick={decrement}>
                        <img className='h-20' src={arrowLeft} alt="" />
                    </button>
                </div>
                <div id="year" className='text-white px-4 tracking-widest font-extrabold text-4xl'>{year}</div>
                <div>
                    <button onClick={increment}>
                        <img className='h-20' src={arrowRight} alt="" />
                    </button>
                </div>
            </div>
        </>
    )
}


export default YearSlider
