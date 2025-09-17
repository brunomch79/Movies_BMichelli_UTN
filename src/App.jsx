import {useState, useEffect} from "react"
import {getMovies, searchMovies} from "./api/api"
import Container from "./components/Container"
import { FaCat } from 'react-icons/fa'

function App() {
    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(()=> {
        async function fetchMovies() {
            const results = await getMovies()
            setMovies(results)
        }
        fetchMovies()
    }, [])

    const handleSearch = async (e)=> {
        const query = e.target.value;
        setSearchQuery(query)
        if(query) {
            const results = await searchMovies(query)
            setMovies(results)
        }
        else {
            const results = await getMovies()
            setMovies(results)
        }
    }

    return (
        <div className = "min-h-screen bg-gray-900 text-amber-400 p-6">
            <h1 className="text-5xl md:text-6xl font-extrabold my-8 text-center flex justify-center items-center gap-4 animate-pulse-colors transition-transform duration-300 hover:scale-105">
                <FaCat className="text-amber-400 w-12 h-12 animate-pulse" />
                <FaCat className="text-amber-400 w-12 h-12 animate-pulse" />
                <FaCat className="text-amber-400 w-12 h-12 animate-pulse" />
                MICHO EXPLORER
                <FaCat className="text-amber-400 w-12 h-12 animate-pulse transform scale-x-[-1]" />
                <FaCat className="text-amber-400 w-12 h-12 animate-pulse transform scale-x-[-1]" />
                <FaCat className="text-amber-400 w-12 h-12 animate-pulse transform scale-x-[-1]" />
            </h1>
            <input
                type="text"
                placeholder = "Buscar Película"
                value = {searchQuery}
                onChange = {handleSearch}
                className = "border-3 p-2 mb-4 w-full rounded-2xl focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
            />
            <Container movies = {movies}/>
        </div>
    )
}

export default App
