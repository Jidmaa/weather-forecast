import { BiSearchAlt } from "react-icons/bi";
export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Entrez le nom d'un pays "
        className="search"
      />
      <BiSearchAlt className="search-icon" />
    </div>
  );
}
