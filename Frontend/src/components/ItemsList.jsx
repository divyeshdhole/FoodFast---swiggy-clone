const ItemsList = (props) => {
    return <div className="">

        {props.items.map((item) => <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 flex items-center justify-between">
            <div className="flex-col text-left w-[70%]">
                <p className="font-bold p-1">{item.card.info.name}</p>
                <p className="text-sm p-1">₹ {item.card.info.price / 100}</p>
                {item.card.info.ratings?.aggregatedRating?.rating ? <div className="flex items-center text-xs text-left">
                    <p className="p-1 text-green-600 font-bold flex text-left items-center gap-1"><svg className="w-3 h-3 text-green-600 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>{item.card.info.ratings?.aggregatedRating?.rating}</p>
                    <p className="p-1">({item.card.info.ratings?.aggregatedRating?.ratingCountV2})</p>
                </div> : null}

                <p className="text-xs">{item.card.info.description}</p>
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