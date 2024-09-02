import ResCard from "./ResCard";
import { useState, useEffect } from "react"
import Shimmers from "./shimmers";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
import Mind from "./Mind";
import Top from "./Top";
import AllRestro from "./AllRestro";

const Body = () => {
    const [fList, setfList] = useState([]);
    const [search, setsearch] = useState([]);
    const [filterResult, setfilterResult] = useState([]);
    const [mind, setMind] = useState(null);
    const [top, setTop] = useState([]);
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

                setMind(data.data.data.cards[0].card.card);
                setTop(data.data.data.cards[1].card.card);
                setTitle(data.data.data.cards[2].card.card.title)
                setfilterResult(foodList)
                setfList(foodList);

            }
        });
    }, []);
    { console.log(title) }


    const isOnline = useOnlineStatus();
    if (isOnline === false)
        return <div>No internet connection. Please check your network settings.</div>

    return (
        <div className="w-full flex justify-center px-4 font-poppins">

            <div className="max-w-[1200px] flex flex-col justify-center">
                {fList == 0 ? <Shimmers /> : <div>
                    <Mind mind={mind} />
                    <Top top={top} />
                    <AllRestro filterResult={filterResult} fList={fList} search={search} title={title} setfilterResult={setfilterResult} />
                </div>}




            </div>
        </div >


    );
};
export default Body;