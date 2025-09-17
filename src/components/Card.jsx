import {getPoster} from "../api/api";

function Card({movie}) {
    return (
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                    src={getPoster(movie.poster_path)}
                    alt={movie.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-sm opacity-1 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h2 className="text-white font-bold text-lg mb-2">{movie.title}</h2>
                    <p className="text-sm text-gray-200 max-h-100 overflow-y-auto scrollbar-none">{movie.overview}</p>
                </div>
            </div>
    )
}

export default Card