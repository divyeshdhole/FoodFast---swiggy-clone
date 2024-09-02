import { useState, useEffect } from 'react';
import Shimmers from "./ShimmersMenu";
import { useParams } from 'react-router-dom';
// import ShimmersMenu from "./ShimmersMenu";
import ResCategory from "./ResCategory"

const ResMenu = () => {
    const [menu, setMenu] = useState(null);
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    useEffect(() => {
        const fetchData = () => {
            // console.log(resId);
            return fetch("https://food-fast-restapi.vercel.app/api/restaurant/menu/" + resId)
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

                setMenu(data);
                // console.log(data);
            }
        });
    }, [resId]);
    if (menu === null) {
        return <Shimmers />
    }
    // console.log(menu);
    // const m = menu.data.cards[2]?.card?.card?.info;
    let categories = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(m);
    // console.log(categories);
    // const categories =
    // if (item === undefined) {
    //     item = [];
    // }
    return (
        <div className="text-center">
            <p>Hotel name</p>
            <p>Dhule</p>

            {categories.map((category, index) => <ResCategory key={category.card.card.name} show={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} data={category.card.card} set={setShowIndex} />)}

        </div>
    );
}
export default ResMenu;