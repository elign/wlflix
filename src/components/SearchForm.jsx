export default function SearchForm({
  searchTerm,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
