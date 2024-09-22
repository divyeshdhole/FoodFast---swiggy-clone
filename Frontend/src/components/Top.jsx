import { useState, useEffect, useRef } from 'react';
import ResCard from "./ResCard";
import { Link } from 'react-router-dom';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Top = ({ top }) => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

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

            // Update scroll position as a percentage
            const maxScroll = scrollWidth - clientWidth;
            const progress = (scrollLeft / maxScroll) * 100;
            setScrollPosition(progress);
        }
    };

    useEffect(() => {
        checkScrollButtons(); // Initial check when the component mounts
        window.addEventListener('resize', checkScrollButtons); // Re-check on window resize

        return () => {
            window.removeEventListener('resize', checkScrollButtons);
        };
    }, []);

    const [topRes] = useState(top.gridElements.infoWithStyle.restaurants);

    return (
        <div className='mt-6'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-2xl'>{top.header.title}</h3>
                <div className='flex justify-end gap-2'>
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
            <div className="relative">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-scroll whitespace-nowrap px-4 py-2 scrollbar-hide"
                    onScroll={checkScrollButtons}
                >
                    {topRes.map((food, index) => (
                        <Link key={index} to={"restaurants/" + food.info.id}>
                            <ResCard food={food} />
                        </Link>
                    ))}
                </div>
                {/* Scroll Progress Bar */}
                <div className='flex justify-center'>
                    <div className=' w-[45px] h-[4px] rounded-lg bg-gray-200'>
                        <div
                            className="h-full bg-orange-500 rounded-lg"
                            style={{
                                width: '20%', // Fixed width of the progress bar
                                transform: `translateX(${scrollPosition * 4}%)`, // Move the progress bar based on scroll position
                            }}
                        />
                    </div>
                </div>

            </div>
            <div className='border border-b-0 bg-gray-50 mt-10'></div>
        </div>
    );
};

export default Top;
