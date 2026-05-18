function SearchBar({ search, setSearch }) {
    return(
        <input 
          type="text"
          placeholder="Search Juice..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
    )
}