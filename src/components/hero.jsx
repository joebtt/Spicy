import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const images = [
        
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const nextImage = () => {
        setAnimationClass('animate-slide-out-left');
        setTimeout(() => {
            setCurrentImage((currentImage + 1) % images.length);
            setAnimationClass('animate-slide-in-right');
            setTimeout(() => setAnimationClass(''), 500);
        }, 500);
    };

    const prevImage = () => {
        setAnimationClass('animate-slide-out-right');
        setTimeout(() => {
            setCurrentImage((currentImage - 1 + images.length) % images.length);
            setAnimationClass('animate-slide-in-left');
            setTimeout(() => setAnimationClass(''), 500);
        }, 500);
    };

    return (
        <section className="mt-12 mb-5">
            <div className="bg-teal-300 text-white min-h-screen flex flex-col-reverse md:flex-row items-center pt-16 md:pt-24 pb-12 md:pb-0">
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-4">
                    <h1 className="ml-4 text-5xl font-bold mb-6">
                        Welcome To The New Way Of Cooking
                    </h1>
                    <p className="ml-3 text-xl mb-8">
                        This is the web-app pertaining to everything food.
                    </p>
                    <button className="ml-3 mt-4 bg-white text-teal-700 py-2 px-4 rounded-full font-semibold shadow-lg">
                       <Link to= "/signup"> Get Started</Link>
                    </button>
                </div>
                <div className={`md:w-1/2 flex flex-col items-center space-y-4 relative ${isScrolled ? 'hidden' : ''}`}>
                    <img src={images[currentImage]} alt="Cooking" className={`w-1/3 h-auto mt-3 rounded-lg shadow-lg transform ${currentImage < 2 ? 'rotate-6' : ''} transition-transform duration-500 ease-in-out ${animationClass}`} />
                    <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-700 p-2 rounded-full shadow-lg" style={{ marginLeft: '20px' }} aria-label="Previous Image">
                        <FaArrowLeft />
                    </button>
                    <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-700 p-2 rounded-full shadow-lg" style={{ marginRight: '20px' }} aria-label="Next Image">
                        <FaArrowRight />
                    </button>
                </div>
                <div className="w-full bg-gray-200 p-8 mt-8 md:hidden">
                    <p className="text-center text-teal-700">Explore our recipes and start cooking today!</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
