import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="p-8 bg-teal-300 text-white">
            <section>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </section>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="w-6 h-6" />
                    </a>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
                    <a href="./about" className="hover:underline">About Us</a>
                    <a href="./contact" className="hover:underline">Contact</a>
                    <a href="./privacy" className="hover:underline">Privacy Policy</a>
                </div>
                <p className="text-center mt-4 md:mt-0">© {new Date().getFullYear()} SPICY RECIPES</p>
            </div>
        </footer>
    );
}

export default Footer;
