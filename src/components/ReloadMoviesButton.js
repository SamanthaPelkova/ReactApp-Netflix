import "./ReloadMoviesButton.css"

const ReloadMoviesButton = (props) => {
    return(
<button className="reload-movies-button" onClick={props.reloadMovies} >Načíst filmy</button>
    )
}

export default ReloadMoviesButton