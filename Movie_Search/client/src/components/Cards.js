
const Cards = ({title, year, genre, director}) => {
    return (
        <div className="d-flex">
            <div
            className="card text-black d-flex flex-row " 
            style={{
            backgroundImage: `../Movie_Search/client/public/Movie_poster.jpg`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            width: "200px",
            borderRadius: "10px",
            margin: "10px"
            }}
        >
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Director: {director}</p>
                    <p className="card-text">Year: {year}</p>
                    <p className="card-text">Genre: {genre}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;