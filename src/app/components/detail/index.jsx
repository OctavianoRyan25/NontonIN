import Image from "next/image";
import { format } from "date-fns";
import { Divider } from "@nextui-org/react";

export const DetailMovies = ({ api }) => {
    const isAdultHandler = (adult) => {
        if (adult === true) {
            return "PG-18";
        } else {
            return "PG-13";
        }
    };

    const dateChange = (date) => {
        const dates = format(new Date(date), "dd-MM-yyyy");
        return dates;
    };

    return (
        <div className="max-w-full gap-2  px-8 lg:mx-24 lg:mt-10">
            <div className="backdrop mb-4 lg:mx-24 relative overflow-hidden rounded-md shadow-inner">
                <div className="absolute top-0 right-0 my-3 lg:my-5 lg:mx-8 z-10 sm:text-base text:sm">
                    <span className="bg-yellow-100 text-white text-xs lg:text-xs lg:font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-yellow-300">{api.vote_average} ⭐</span>
                </div>
                <div className="absolute bottom-0 left-0 mx-4 my-3 lg:my-5 lg:mx-8 z-10 sm:text-base text:sm">
                    <div className="flex flex-wrap gap-1">
                        <div>
                            <Image alt="Card example background" className="z-0 w-full h-24 lg:h-60 rounded-lg object-cover" src={`https://image.tmdb.org/t/p/w500/${api.poster_path}`} width={500} height={281} />
                        </div>
                        <div className="flex flex-col justify-end my-1 lg:text-3xl">
                            <div className="font-bold text-lg lg:text-3xl hover:text-gray-200">{api.title}</div>
                            <div className="italic text-xs lg:text-base hover:text-gray-200">{api.tagline}</div>
                        </div>
                    </div>
                </div>
                <Image alt="Card example background" className="z-0 w-full lg:h-96 object-cover" src={`https://image.tmdb.org/t/p/w500/${api.backdrop_path}`} width={500} height={281} />
                {/* {api.backdrop_path} */}
            </div>
            <div className="flex flex-wrap gap-2 lg:mx-24">
                Genre :
                {api.genres.map((genre) => (
                    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-xs lg:text-base px-2 py-1 rounded-md" key={genre.id}>
                        {genre.name}
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 my-4 lg:mx-24">
                <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-xs lg:text-base px-2 py-1 rounded-md">{dateChange(api.release_date)} </div>
                <Divider orientation="vertical" />
                <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-xs lg:text-base px-2 py-1 rounded-md">{api.runtime} min</div>
                <Divider orientation="vertical" />
                <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-xs lg:text-base px-2 py-1 rounded-md">{isAdultHandler(api.adult)}</div>
            </div>
            <div className="flex flex-wrap gap-2 my-4 lg:mx-24">Summary: {api.overview}</div>
        </div>
    );
};
