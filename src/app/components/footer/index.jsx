const { default: Link } = require("next/link");

const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-black mt-16">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:underline">NontonIN</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/" className="mr-4 hover:underline md:mr-6">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/popular" className="mr-4 hover:underline md:mr-6">
                                Popular
                            </Link>
                        </li>
                        <li>
                            <Link href="/now_playing" className="mr-4 hover:underline md:mr-6">
                                Now PLaying
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <a className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 Made with ❤️ by <span className="font-bold">Octaviano Ryan</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
