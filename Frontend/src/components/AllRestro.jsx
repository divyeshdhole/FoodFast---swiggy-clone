import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
const AllRestro = ({ search, setsearch, filterResult, title, fList, setfilterResult }) => {


    return <div className="flex flex-col mt-6">
        {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
        <div className="flex items-center font-sans">
            <input type="text" className="p-2 border border-orange-400 rounded-l-lg" placeholder="Search for food" value={search} onChange={function (e) {
                setsearch(e.target.value);

            }}></input>
            <button
                className="p-2 shadow-sm border border-orange-400 bg-orange-400 hover:bg-orange-500 rounded-r-lg"
                onClick={() => {
                    if (search.trim() !== "") {
                        // Filter the list based on search input
                        const filterList = fList.filter((res) =>
                            res.info.name.toLowerCase().includes(search.toLowerCase())
                        );
                        setfilterResult(filterList);
                    } else {
                        // If the search input is empty, you can choose to reset or show all items
                        setfilterResult(fList);  // Reset to show all items if search is empty
                    }
                    setsearch("");  // Clear the search input after the search
                }}
            >
                Search
            </button>


            <button className="m-2 shadow-sm text-xs border font-semibold text-gray-900 h-8 px-2 border-gray-300 bg-white hover:bg-gray-200 rounded-full" onClick={() => {

                const filterList = fList.filter((res) => res.info.sla.deliveryTime < 30)
                setfilterResult(filterList);
            }}>Fast Delivery</button>
            <button className="m-2 text-xs shadow-sm border font-semibold text-gray-900 h-8 px-2 border-gray-300 bg-white hover:bg-gray-200 rounded-full" onClick={() => {
                const filterList = fList.filter((res) => res.info.avgRating > 4)
                setfilterResult(filterList);
            }}>
                Ratings 4.0+
            </button>
            <button className="m-2 text-xs shadow-sm border font-semibold text-gray-900 h-8 px-2 border-gray-300 bg-white hover:bg-gray-200 rounded-full" onClick={() => {
                //vegan food logic by tabnine
                const filterList = fList.filter((res) => res.info?.aggregatedDiscountInfoV3?.header != undefined)
                setfilterResult(filterList);
            }}>Offers</button>


        </div>
        <div className="flex flex-wrap">


            {filterResult.map((food, index) => (
                <Link key={index} to={"restaurants/" + food.info.id}>
                    <ResCard food={food} />
                </Link>))}

        </div>
        <div className='border border-b-0 bg-gray-50 mt-10'></div>

    </div>
}
export default AllRestro;