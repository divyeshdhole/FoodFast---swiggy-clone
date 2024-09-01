import { useState, useEffect } from 'react';
import Shimmers from "./shimmers";
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
const AllRestro = () => {
    const [fList, setfList] = useState([]);
    const [search, setsearch] = useState([]);
    const [filterResult, setfilterResult] = useState([]);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            return fetch("https://food-fast-restapi.vercel.app/api/restaurants")
                .then(response => response.json())  // Correctly call the json method
                .then(data => {
                    // console.log(data);  // Log the parsed data
                    return data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);  // Handle any errors
                });
        }

        fetchData().then(data => {
            if (data) {
                // console.log(data); //
                const foodList = data.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
                // console.log(foodList); //


                setTitle(data.data.data.cards[2].card.card.title)
                setfList(foodList);
                setfilterResult(foodList);
                // console.log(fList);

            }
        });
    }, []);
    return <div className="flex flex-col mt-6">
        {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
        <div className="flex items-center">
            <input type="text" className="p-2 border border-orange-400 rounded-l-lg" placeholder="Search for food" value={search} onChange={function (e) {
                setsearch(e.target.value);

            }}></input>
            <button className="p-2 shadow-sm border border-orange-400 bg-orange-400 hover:bg-orange-500 rounded-r-lg" onClick={() => {
                const filterList = fList.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()))
                setfilterResult(filterList);
                setsearch("");
            }}>Search</button>

            <button className="m-2 shadow-sm text-xs border font-semibold text-gray-900 h-8 px-2 border-gray-300 bg-white hover:bg-gray-200 rounded-full" onClick={() => {
                //fast delivery logic by tabnine

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
        {console.log(filterResult)}
        <div className="flex flex-wrap">
            {fList.length === 0 ? (
                Array.from({ length: 10 }).map((_, index) => (
                    <Shimmers key={index} />
                ))
            ) : (

                filterResult.map((food, index) => (
                    <Link key={index} to={"restaurants/" + food.info.id}>
                        <ResCard food={food} />
                    </Link>
                ))
            )}
        </div>
    </div>
}
export default AllRestro;