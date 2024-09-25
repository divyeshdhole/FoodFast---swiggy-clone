import { FaStar } from "react-icons/fa6";

const ItemsList = (props) => {
    return <div className="">

        {props.items.map((item) => <div key={item.card.info.id} className="py-2 border-b-2 border-gray-300 flex items-center justify-between">
            <div className="flex-col text-left w-[70%]">
                <p className="font-bold p-1 text-gray-700">{item.card.info.name}</p>
                <p className="text-sm p-1 font-bold">₹ {item.card.info.price / 100}</p>
                {item.card.info.ratings?.aggregatedRating?.rating ? <div className="flex items-center text-xs text-left">
                    <p className="p-1 text-green-800 font-bold flex text-left items-center gap-1"><FaStar className="" />{item.card.info.ratings?.aggregatedRating?.rating}</p>
                    <p className="p-1 text-gray-500 font-bold">({item.card.info.ratings?.aggregatedRating?.ratingCountV2})</p>
                </div> : null}

                <p className="text-gray-500">{item.card.info.description}</p>
            </div>
            {/* img */}
            <div className="h-32 w-32 flex justify-center relative">
                <div className="absolute bottom-0">

                    <button className="rounded-lg p-1 h-8 w-14 shadow-lg bg-white text-green-600 font-bold">Add +</button>
                </div>
                <img className="rounded-lg h-28 w-full object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + item.card.info.imageId} />
            </div>

        </div>)}
    </div>
}

export default ItemsList;