import { useState } from "react";
import { Asyncpaginate } from "react-select-async-paginate";
const Search = () => {
  const [search, setSearch] = useState(null);

  const handleOnChange
  return (
    <Asyncpaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
    />
  );
};
export default Search;
