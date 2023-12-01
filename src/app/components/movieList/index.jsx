import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link } from "@nextui-org/react";
import { format } from "date-fns";

const MovieLists = ({ api }) => {
    const dateChange = (date) => {
        const dates = format(new Date(date), "dd-MM-yyyy");
        return dates;
    };
    return (
        <div className="max-w-full gap-2 grid grid-cols-12 px-8 lg:grid-cols-12 lg:mx-24 lg:mt-10">
            {api.results?.map((movie) => (
                <Card key={movie.id} isFooterBlurred className="w-full h-full col-span-6 sm:col-span-3">
                    <CardHeader className="absolute z-10 top-1 flex-col items-end">
                        <span className="bg-yellow-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-900 dark:text-yellow-300">{movie.vote_average} ⭐</span>
                    </CardHeader>
                    <Image removeWrapper alt="Card example background" className="z-0 w-full h-full scale-125 -translate-y-6 object-cover hover:scale-100" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <CardFooter className="absolute bg-white/30 bottom-0 z-10 justify-between">
                        <div>
                            <h4 className="text-white text-sm lg:text-xl hover:text-stone-300">{movie.title}</h4>
                            <p className="text-black text-tiny">{dateChange(movie.release_date)}</p>
                        </div>
                        <Link href={`/movie/${movie.id}`} className="text-tiny text-white hover:text-gray-300" radius="full" size="sm">
                            Lihat
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};
export default MovieLists;
