import { useState, useEffect, useRef } from 'react';
import Shimmers from "./ShimmersMenu";
import { useParams } from 'react-router-dom';
// import ShimmersMenu from "./ShimmersMenu";
import ResCategory from "./ResCategory"
import { MdStars } from "react-icons/md";
import { GiCycling } from "react-icons/gi";
import { SiPeakdesign } from "react-icons/si";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import DealCard from './DealCard';
const ResMenu = () => {
    const [menu, setMenu] = useState(null);
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -400, // Adjust this value to control scroll amount
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 400, // Adjust this value to control scroll amount
                behavior: 'smooth',
            });
        }
    };

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        checkScrollButtons(); // Initial check when the component mounts
        window.addEventListener('resize', checkScrollButtons); // Re-check on window resize

        return () => {
            window.removeEventListener('resize', checkScrollButtons);
        };
    }, []);
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
    const name = menu.data.cards[0].card.card.text;
    // const m = menu.data.cards[2]?.card?.card?.info;
    let categories = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(m);
    // console.log(categories);
    // const categories =
    // if (item === undefined) {
    //     item = [];
    // }
    const info = menu.data.cards[2].card.card.info;
    const deal = menu.data.cards[3].card.card.gridElements.infoWithStyle.offers;
    return (

        <div className="w-full flex justify-center font-arial my-8">
            <div className='w-6/12'>
                <p className='text-xs text-gray-400 flex'>
                    Home
                    <span className='mx-1'>/</span>
                    Shirpur
                    <span className='mx-1'>/</span>
                    <span className='text-gray-900'>{name}</span>
                </p>
                <p className='text-2xl font-extrabold font-arial mt-6 mb-3'>{name}</p>
                <div className='w-full h-[250px] rounded-2xl bg-gradient-to-t from-gray-300 to-white flex justify-center items-center p-6'>
                    <div className='border border-gray-300 h-full w-full rounded-2xl bg-white'>
                        <div className='flex items-center pt-2 px-2 text-2xl text-green-700'>
                            <MdStars className="mr-2" />
                            <div className='flex items-center'>
                                <p className='text-lg text-black font-bold font-arial mr-2'>{info.avgRating} ({info.totalRatingsString})</p>
                                <p className="text-sm font-semibold text-gray-400 mr-2"><span className="mr-1">•</span></p>
                                <p className='text-lg text-black font-bold'>{info.costForTwoMessage}</p>
                            </div>

                        </div>
                        <p className='pl-3 my-2 text-orange-600 font-bold underline'>{info.cuisines.join(", ")}</p>
                        <div className="pl-3 my-2 flex items-start gap-3 h-auto w-[300px]">
                            <div className='flex flex-col items-center justify-center'>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                <div className="w-[1.5px] h-6 bg-gray-300"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            </div>

                            <div className='flex flex-col justify-center ml-2'>
                                <p className='flex items-center gap-2'>
                                    <span className='font-bold'>Outlet</span>
                                    <span className='text-gray-500 font-normal'>{info.areaName}</span>
                                </p>
                                <p className='font-bold'>{info.sla.slaString}</p>
                            </div>
                        </div>



                        <div className='border border-b-0 bg-gray-50 w-full'></div>
                        <p className='flex items-center gap-3 pl-3 mt-4'><GiCycling className='text-2xl' />{info.feeDetails.message}</p>
                    </div>


                </div>
                <div className='flex justify-between h-[40px] items-center my-4'>
                    <p className='text-xl font-bold my-7'>Deals for you</p>
                    <div className='flex justify-end gap-1'>

                        <button
                            onClick={scrollLeft}
                            className={`rounded-full p-2 ${canScrollLeft ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 cursor-not-allowed'}`}
                            disabled={!canScrollLeft}
                        >
                            <GoArrowLeft />
                        </button>

                        <button
                            onClick={scrollRight}
                            className={`rounded-full p-2 ${canScrollRight ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 cursor-not-allowed'}`}
                            disabled={!canScrollRight}
                        >
                            <GoArrowRight />
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto whitespace-nowrap scrollbar-hide px-4 py-2" // Ensure overflow-x-auto for scrolling
                    onScroll={checkScrollButtons}
                >
                    <div className="inline-flex gap-4"> {/* Use inline-flex for horizontal alignment */}
                        {deal.map((card, index) => (
                            <div key={index} className="flex-shrink-0" > {/* flex-shrink-0 prevents shrinking */}
                                <DealCard data={card} />
                            </div>
                        ))}
                    </div>
                </div>





                <div className='w-full flex justify-center text-lg text-gray-500 my-5'>
                    <p className='flex gap-2 items-center'><SiPeakdesign className='text-2xl' />
                        Menu<SiPeakdesign className='text-2xl' />
                    </p>
                </div>





                {categories.map((category, index) => <ResCategory key={category.card.card.name} show={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} data={category.card.card} set={setShowIndex} />)}

            </div>

        </div >
    );
}
export default ResMenu;