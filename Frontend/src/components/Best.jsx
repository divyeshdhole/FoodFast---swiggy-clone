import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const Best = ({ best }) => {
    const [show, setShow] = useState(best.brands.slice(0, 11));

    const handleClick = () => {
        setShow(best.brands);
    }
    return (
        <div className="w-full items-center mt-9">
            <h3 className="font-bold text-2xl">{best.title}</h3>
            <div className="flex flex-wrap">
                {show.map((bestText, index) => (
                    <div key={index} className="w-[275px] border-gray-300 border-2 rounded-xl p-4 my-2 mx-3 flex justify-center">

                        <p className="text-md text-gray-900 font-arial whitespace-nowrap overflow-hidden text-ellipsis">{bestText.text}</p>
                    </div>

                ))}
                {(show.length == 11) && (
                    <div className="w-[275px] border-gray-300 border-2 rounded-xl p-4 my-2 mx-3 flex justify-center cursor-pointer" onClick={handleClick}>

                        <p className="text-md text-gray-900 font-arial flex items-center">Show More<MdKeyboardArrowDown />
                        </p>

                    </div>)}
            </div>


        </div>
    )
};

export default Best;