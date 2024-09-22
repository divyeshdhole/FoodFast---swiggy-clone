import { useRef, useState, useEffect } from 'react';
import MindCard from "./MindCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const HorizontalScrollWithButtons = ({ mind }) => {
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

    return (
        <div className="relative mt-6">

            {/* Scroll Buttons */}
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-2xl'>{mind.header.title}</h3>
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
                className="whitespace-nowrap px-4 py-2 overflow-x-scroll scrollbar-hide"
                onScroll={checkScrollButtons} // Check button state on scroll
            >
                <div className="flex flex-nowrap gap-1">
                    {mind.imageGridCards.info.map((card, index) => (
                        <MindCard key={index} data={card} className="inline-block" />
                    ))}
                </div>
            </div>
            <div className='border border-b-0 bg-gray-50 mt-10'></div>
        </div>
    );
};

export default HorizontalScrollWithButtons;
