"use client";
import MovieLists from "../components/movieList";
import NavBar from "../components/utility";
import { useState, useEffect } from "react";
import React from "react";
import { Card, Pagination, Skeleton } from "@nextui-org/react";
import Footer from "../components/footer";
import { SkeletonLoader } from "../components/skeleton";

const PopularPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [upComing, setupComing] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=${currentPage}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setupComing(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error, e.g., display an error message to the user
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    return (
        <div>
            <NavBar></NavBar>
            {/* Top Anime */}
            <div className="flex justify-center text-lg font-bold lg:text-3xl lg:mt-6 mt-6 mb-4">Upcoming 🔜</div>

            {isLoading ? (
                // Display skeleton loader while data is being fetched
                <SkeletonLoader />
            ) : (
                // Display actual content when data is loaded
                <div>
                    <MovieLists api={upComing} />
                    <div className="flex justify-center mt-10 mb-10">
                        <Pagination isCompact showControls total={20} page={currentPage} onChange={setCurrentPage} color="secondary"></Pagination>
                    </div>

                    {/* <Paginations currentPage={currentPage} lastPage={upComing.total_pages} setCurrentPage={setCurrentPage}></Paginations> */}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default PopularPage;
