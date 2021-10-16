export default function SearchBar(props) {
    // function myHandleSearch() {
    //     handleSearch();
    // }
    // function myHandleChange() {
    //     handleChange();
    // } 

  return (
    <form onSubmit={props.handleSearch}>
      <input
        type="text"
        placeholder="search for a figure"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
