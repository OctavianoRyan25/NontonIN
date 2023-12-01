import NavBar from "./components/utility";
import Headers from "./components/movieList/heades";
import MainMovieLists from "./components/mainContent";
import Footer from "./components/footer";
import { format } from "date-fns";

export default async function Home() {
    const popularMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`);
    const popularMoviesJson = await popularMovies.json();
    // const movies = popularMoviesJson.results;

    const nowPlayMovies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US`);
    const nowPlaMoviesJson = await nowPlayMovies.json();

    const moviesWithTruncatedTitles = popularMoviesJson.results.map((movie) => ({
        ...movie,
        title: truncateTitle(movie.title, 4),
        release_date: dateChange(movie.release_date),
    }));
    const finalDataPopularMovie = moviesWithTruncatedTitles.slice(0, 8);
    function truncateTitle(title, maxWords) {
        const words = title.split(" ");

        if (words.length <= maxWords) {
            return title;
        } else {
            const truncatedTitle = words.slice(0, maxWords).join(" ");
            return `${truncatedTitle} ...`;
        }
    }
    function dateChange(date) {
        const dates = format(new Date(date), "dd/MM/yyyy");
        return dates;
    }

    const moviesWithTruncatedTitles2 = nowPlaMoviesJson.results.map((movie) => ({
        ...movie,
        title: truncateTitle(movie.title, 4),
        release_date: dateChange(movie.release_date),
    }));
    const finalDataNowPlayingMovie = moviesWithTruncatedTitles2.slice(0, 4);
    function truncateTitle(title, maxWords) {
        const words = title.split(" ");

        if (words.length <= maxWords) {
            return title;
        } else {
            const truncatedTitle = words.slice(0, maxWords).join(" ");
            return `${truncatedTitle} ...`;
        }
    }

    return (
        <div>
            <NavBar />
            <div className="flex justify-center text-lg lg:text-3xl lg:mt-6 mt-6 mb-4">Now Playing</div>
            <MainMovieLists api={finalDataNowPlayingMovie} />
            <Headers title={"Popular Movie"} linkHref={"/popular"} linkTitle={"Baca Selengkanya"}></Headers>
            <MainMovieLists api={finalDataPopularMovie} />
            <Footer />
        </div>
    );
}
