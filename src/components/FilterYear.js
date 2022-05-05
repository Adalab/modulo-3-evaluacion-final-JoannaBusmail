function FilterYear(props) {
  const handleSelectOption = () => {};
  const renderYears = () => {
    return props.years.map((theYear) => {
      return (
        <>
          <option value={theYear}>{theYear}</option>
        </>
      );
    });
  };
  return (
    <>
      <label> Year</label>
      <select name='year' onChange={handleSelectOption}>
        <option value='all'>ALL</option>;{renderYears()}
      </select>
    </>
  );
}

export default FilterYear;
