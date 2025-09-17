import Card from "./Card"

function Container({movies}) {
    return (
        <div className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movies.map(movie => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}

export default Container