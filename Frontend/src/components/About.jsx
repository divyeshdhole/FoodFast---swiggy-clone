const About = () => {
    return (
        <div className="max-w-full mx-auto p-6 bg-gray-900 mt-[100px]">
            <h1 className="text-3xl font-bold mb-4 text-white">About FoodFast</h1>
            <p className="text-lg text-white mb-4">
                FoodFast is a fictional restaurant review website created as a coding exercise by Divyesh Dhole.
            </p>
            <p className="text-lg text-white mb-4">
                The app features a search bar, a list of shimmers, and a list of restaurant cards. The search bar allows users to search for restaurants by name or cuisine. The shimmers are used to create a visual effect when loading restaurant data. The restaurant cards display the restaurant name, logo, rating, and estimated delivery time.
            </p>
            <p className="text-lg text-white">
                Feel free to explore the code and contribute to the project by submitting pull requests or reporting issues.
            </p>
        </div>
    );
};

export default About;
