"use client";
import Footer from "@/app/components/footer";
import NavBar from "@/app/components/utility";
import { Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { DetailMovies } from "@/app/components/detail";
import TraillerMovie from "@/app/components/trailler";

const DetailMovie = ({ params: { id } }) => {
    const [detailsMovie, setdetailsMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setdetailsMovie(data);
                // console.log(data);
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
        <div>
            <NavBar />
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <Spinner label="Loading..." color="warning" />
                </div>
            ) : (
                <div>
                    <DetailMovies api={detailsMovie}></DetailMovies>
                    <TraillerMovie id={id}></TraillerMovie>
                </div>
            )}
            <Footer />
        </div>
    );
};
export default DetailMovie;
