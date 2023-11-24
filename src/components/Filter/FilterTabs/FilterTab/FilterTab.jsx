import "./FilterTab.scss";
import IconArrow from "UI-KIT/Icons/IconArrow";

export function Tab({ formName, tabName, total, direction, onClick }) {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick(tabName);
    }
  };
  return (
    <div
      className="filter__tab"
      onClick={() => onClick(formName)}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <span>{tabName}</span>
      {total && <span className="filter__tab-count">{`(${total})`}</span>}
      <IconArrow size="24" color="var(--text-color)" direction={direction} />
    </div>
  );
}
