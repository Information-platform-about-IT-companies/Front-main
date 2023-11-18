import "./SearchHintList.scss";

export default function SearchHintList({ title, optionsObjectList, onSelect }) {
  const isOntionsObjectListUndefined = !!(
    // eslint-disable-next-line no-undefined
    (optionsObjectList === null || optionsObjectList === undefined)
  );
  const handleSelect = (text) => {
    onSelect(text);
  };

  const handleKeyPress = (e, text) => {
    if (e.key === "Enter") {
      onSelect(text);
    }
  };

  return (
    <div className="search-hint-list__container">
      <div
        className={`search-hint-list__header ${
          isOntionsObjectListUndefined ? "search-hint-list__header_no-found" : ""
        }`}
      >
        {`${isOntionsObjectListUndefined ? `${title}` : `Найдено в ${title}`}`}
      </div>
      {optionsObjectList?.map((option) => (
        <li className="search-hint-list__element" key={option.name}>
          <div
            className="search-hint-list__element-text"
            onClick={() => handleSelect(option.name)}
            onKeyDown={(e) => handleKeyPress(e, option.name)}
            role="button"
            tabIndex={0}
          >
            {option.name}
          </div>
        </li>
      ))}
    </div>
  );
}
