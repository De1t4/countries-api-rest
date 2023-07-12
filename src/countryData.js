export default function Country(props){
    return(
        <div className="card-country">
            <div className="content-image-country">
                <img src={props.image} alt="image-country" />
            </div>
            <div className="info-country">
                <h3>{props.name}</h3>
                <p>Population: <span>{props.population}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    )
}