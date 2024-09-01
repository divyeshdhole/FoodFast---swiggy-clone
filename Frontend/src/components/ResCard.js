const ResCard = (props) => {
    return (
        <div className="m-6 w-[250px] h-[280px] flex flex-col transition-transform duration-300 transform hover:scale-95">
            <div className="h-[60%] flex justify-center items-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

                <img className="rounded-xl h-full w-full object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.food.info.cloudinaryImageId} alt="Restaurant Logo" />
                <div className="text-white font-extrabold font-verdana bottom-0 absolute font-mono text-xl px-2 py-1 rounded" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>{props.food.info?.aggregatedDiscountInfoV3?.header ? props.food.info?.aggregatedDiscountInfoV3?.header + " " + props.food.info?.aggregatedDiscountInfoV3?.subHeader : ""}</div>
            </div>
            <div className="res-info h-[50%] flex flex-col justify-between">
                <h3 className="font-bold py-1 text-base whitespace-nowrap overflow-hidden text-ellipsis">{props.food.info.name}</h3>
                <div className="flex gap-2 px-1 items-center">
                    <p className="gap-1 items-center inline-block text-xs font-semibold bg-green-500 text-white rounded-lg py-1 px-2 w-auto flex"><svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                        {props.food.info.avgRating ? props.food.info.avgRating : 4.3}</p>
                    <p className="text-xs font-semibold text-gray-700 bg-gray-100 rounded-full px-2 py-1"><span className="text-gray-400 mr-1">•</span>{props.food.info.sla.deliveryTime} min</p>
                </div>
                <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">{props.food.info.cuisines.join(", ")}</p>
                <p className="text-xs font-semibold">{props.food.info.costForTwo}</p>

            </div>
        </div>
    );
};

export default ResCard;