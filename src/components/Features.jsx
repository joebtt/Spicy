function Features() {
    const features = [
        {
            title: "Fast Development",
            description: "Vite provides a fast and lean development experience with instant server start and lightning-fast HMR.",
            image: "path/to/fast-development.jpg",
        },
        {
            title: "Optimized Build",
            description: "Vite uses Rollup for production builds, ensuring highly optimized static assets.",
            image: "path/to/optimized-build.jpg",
        },
        {
            title: "Rich Features",
            description: "Out of the box support for TypeScript, JSX, CSS, and more.",
            image: "path/to/rich-features.jpg",
        },
        {
            title: "Flexible",
            description: "Easily extendable via plugins and supports various frameworks.",
            image: "path/to/flexible.jpg",
        },
        {
            title: "Search",
            description: "Quickly find what you need with powerful search capabilities.",
            image: "path/to/search.jpg",
        },
        {
            title: "Customizable",
            description: "Tailor the app to your needs with extensive customization options.",
            image: "path/to/customizable.jpg",
        },
        {
            title: "Responsive Design",
            description: "Enjoy a seamless experience across all devices with responsive design.",
            image: "path/to/responsive-design.jpg",
        },
        {
            title: "Community Support",
            description: "Benefit from a large and active community for support and resources.",
            image: "path/to/community-support.jpg",
        },
    ];

    return (
        <div className="bg-grey-800 p-9">
            <h2 className="text-center ml-1 mr-2 rounded-full pb-2 pt-2 bg-teal-400 text-3xl font-bold mb-4 mt-7">Features of Our Vite App</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                {features.map((feature, index) => (
                    <div key={index} className="bg-teal-700 p-4 rounded-lg shadow-lg">
                        <img src={feature.image} alt={feature.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-lg">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
