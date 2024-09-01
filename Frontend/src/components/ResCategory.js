import { useState } from "react";

import ItemsList from "./ItemsList";

const ResCategory = ({ data, show, setShowIndex, set }) => {
    const handleClick = () => {
        if (show === true) {
            set(null);
            return;
        }

        setShowIndex();

    }
    return <div>
        <div className="p-4 my-2 shadow-lg w-6/12 m-auto bg-gray-100">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} {"(" + data.itemCards.length + ")"}</span>
                <span>{show ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>)}

                </span>
            </div>

            {show && <ItemsList items={data.itemCards} />}
        </div>


    </div>
}
export default ResCategory;