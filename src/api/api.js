const URL = import.meta.env.VITE_URL
const IMAGE = import.meta.env.VITE_IMAGE
const TOKEN = import.meta.env.VITE_TOKEN

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`
    }
}

export async function getMovies() {
    try {
        const res = await fetch(URL, options)
        if(!res.ok) throw new Error("Error al cargar películas")
        const data = await res.json()
        return data.results
    } 
    catch(err) {
        console.error(err)
        return []
    }
}

export async function searchMovies(query) {
    if(!query) return []
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`
    try {
        const res = await fetch(searchUrl, options)
        if(!res.ok) throw new Error("Error al buscar película")
        const data = await res.json()
        return data.results
    }
    catch(err) {
        console.error(err)
        return []
    }
}

export function getPoster(posterPath) {
    return posterPath ? `${IMAGE}${posterPath}` : null
}