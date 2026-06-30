function SearchBar({ city, setCity, searchWeather }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchWeather();
        }}
      />

      <button onClick={searchWeather}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;