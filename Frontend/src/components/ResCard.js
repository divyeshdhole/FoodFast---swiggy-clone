import { MdStars } from "react-icons/md";

const ResCard = (props) => {
    return (
        <div className="m-6 w-[250px] h-[280px] flex flex-col transition-transform duration-300 transform hover:scale-95">
            <div className="h-[60%] flex justify-center items-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>

                <img className="rounded-xl h-full w-full object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.food.info.cloudinaryImageId} alt="Restaurant Logo" />
                <div className="text-white font-extrabold  bottom-0 absolute text-lg px-2 py-1 rounded font-arial" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>{props.food.info?.aggregatedDiscountInfoV3?.header ? props.food.info?.aggregatedDiscountInfoV3?.header + " " + props.food.info?.aggregatedDiscountInfoV3?.subHeader : ""}</div>
            </div>
            <div className="res-info h-[50%] flex flex-col justify-between">
                <h3 className="font-bold text-base text-xl mt-2 whitespace-nowrap overflow-hidden text-ellipsis">{props.food.info.name}</h3>
                <div className="flex gap-1 items-center">
                    <p className="gap-1 items-center inline-block text-md font-semibold bg-white text-emerald-600 rounded-lg w-auto flex">
                        <MdStars />

                        <p className="text-black">{props.food.info.avgRating ? props.food.info.avgRating : 4.3}</p></p>
                    <p className="text-md font-semibold rounded-full"><span className="mr-1">•</span>{props.food.info.sla.slaString}</p>
                </div>
                <p className="text-md text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{props.food.info.cuisines.join(", ")}</p>
                <p className="text-md text-gray-500">{props.food.info.areaName}</p>

            </div>
        </div>
    );
};

export default ResCard;