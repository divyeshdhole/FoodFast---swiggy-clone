import { IMG_URL } from "../utils/constants";

const DealCard = ({ data }) => {
    const offer = data.info;
    // Check if the offer and its logoBottom exist
    const logo = offer.logoBottom ? offer.logoBottom : offer.offerLogo;

    return (
        <div className="p-4 border border-gray-300 flex items-center h-[70px] w-[220px] rounded-xl">
            {/* Reduced width for better horizontal alignment */}

            <img src={IMG_URL + logo} alt="Deal Logo" className="h-full" />
            <div>
                <p className="text-sm font-extrabold">{offer.header}</p>
                <p className="text-sm font-bold text-gray-600">{offer.description}</p>
            </div>
            {/* Ensure the image fits well */}
        </div>
    );
};

export default DealCard;
