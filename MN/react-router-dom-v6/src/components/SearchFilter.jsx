import React from 'react';

const SearchFilter = ({setSearchParam, inputValue, setInputValue, checkboxValue, setCheckboxValue}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const query = form.search.value
    const isLatest = form.latest.checked

    const params = {_page: 1, _limit: 15}
    if(query.length) params.search = query
    if(isLatest) params.latest = isLatest
    setSearchParam(params)
  }
  return (
    <form className="search" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="search"
          name="search"
          value={inputValue}
          onChange={(e) => {
            const filter = e.target.value
            setInputValue(filter)
          }}
        />
        <label className="label">
          <input type="checkbox" name="latest" checked={checkboxValue} onChange={(e) => {
            const filter = e.target.checked
            setCheckboxValue(filter)
          }}/>
          New only
        </label>
        <button className="search-btn btn" type="submit">
          Search
        </button>
      </form>
  );
}

export { SearchFilter };
