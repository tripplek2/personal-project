import SideBar from "./SearchBar";

function SideBar({ search, setSearch }) {
  return (
    <div>
        <h3>Search</h3>
        <SearchBar search={search} setSearch={setSearch} />
      
    </div>
  )
}

export default SideBar;
