export default function searchFilter(){
    return(
        <div className="content-search-filter" id="content-search-filter">
        <div className="input-search">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for a country" />
        </div>
        <div className="select-filter">
            <select name="filter" id="selectFilter" className="filter">
                <option value="" selected hidden>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    </div>
    )
}