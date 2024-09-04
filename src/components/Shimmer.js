const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center align-middle">
            {[...Array(12)].map((_, index) => (
                <div key={index}className="m-4 p-4 w-64 h-80 rounded-md bg-white shadow-lg">
                    <div className="w-full h-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-t-md"></div>
                    <div className="mt-4 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded"></div>
                    <div className="mt-2 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded"></div>
                    <div className="mt-2 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded"></div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;
