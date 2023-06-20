import "./Search.css";

export const Search = () => {
  return (
    <div className="search-important">
      <form action="" className="search-bar">
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          autoComplete="off"
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
