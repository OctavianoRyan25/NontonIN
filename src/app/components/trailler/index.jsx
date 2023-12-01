"use client";
import { useState, useEffect } from "react";
import { Card, Skeleton } from "@nextui-org/react";

const Loader = () => {
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
        </div>
    </Card>;
};

const TraillerMovie = ({ id }) => {
    const [trailerKey, setTrailerKey] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                const trailers = await data.results.filter((video) => video.type === "Trailer");

                if (trailers.length > 0) {
                    setTrailerKey(trailers[0].key);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error, e.g., display an error message to the user
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-4 lg:mx-56">
            <div className="flex justify-start text-lg lg:text-3xl lg:mt-6 mt-6 mb-4">Trailer</div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex justify-start">
                    <iframe className="flex flex-wrap" width="560" height="315" src={`https://www.youtube.com/embed/${trailerKey}`} title="Movie Trailer" frameBorder="0" allowFullScreen></iframe>
                </div>
            )}
        </div>
    );
};
export default TraillerMovie;
