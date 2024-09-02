const ShimmersMenu = () => {
    return (
        <div className="flex flex-col items-center space-y-4 p-4 animate-pulse">
            {/* Card */}
            <div className="h-[200px] w-[800px] bg-gray-300 rounded-lg flex p-4">
                <div className="h-[165px] w-[165px] bg-gray-400 rounded-lg shimmer"></div>
                <div className="flex flex-col ml-4">
                    <h3 className="h-4 w-1/2 bg-gray-400 rounded-md shimmer"></h3>
                    <p className="h-4 w-1/4 bg-gray-400 rounded-md shimmer mt-2"></p>
                    <p className="h-4 w-1/4 bg-gray-400 rounded-md shimmer mt-2"></p>
                    <p className="h-4 w-1/5 bg-gray-400 rounded-md shimmer mt-2"></p>
                </div>
            </div>
        </div>
    );
};



export default ShimmersMenu;
