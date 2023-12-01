"use client";
import { useSearchParams } from "next/navigation";
import MovieLists from "../components/movieList";
import NavBar from "../components/utility";
import Headers from "../components/movieList/heades";
import { useState, useEffect } from "react";
import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import MainMovieLists from "../components/mainContent";
import Footer from "../components/footer";
import { SkeletonLoader } from "../components/skeleton";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const [searchMovie, setsearchMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}&api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US`);
    // const data = await response.json();
    // console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}&api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setsearchMovie(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error, e.g., display an error message to the user
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [searchParams]);
    return (
        <div>
            <NavBar></NavBar>
            {/* Top Anime */}
            <Headers title={`Hasil Pencarian`}></Headers>

            {isLoading ? (
                // Display skeleton loader while data is being fetched
                <SkeletonLoader />
            ) : (
                // Display actual content when data is loaded
                <MainMovieLists api={searchMovie} />
            )}
            <Footer></Footer>
        </div>
    );
};

export default SearchPage;
