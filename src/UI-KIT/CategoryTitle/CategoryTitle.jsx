import "./CategoryTitle.scss";
import PropTypes from "prop-types";
import IconСategoryWeb from "UI-KIT/Icons/IconСategoryWeb";
import IconСategorySoftware from "UI-KIT/Icons/IconСategorySoftware";
import IconСategoryDesign from "UI-KIT/Icons/IconСategoryDesign";
import IconСategoryMarketing from "UI-KIT/Icons/IconСategoryMarketing";

export function CategoryTitle({ title, id }) {
  let icon;

  if (id === "1") {
    icon = <IconСategoryWeb />;
  } else if (id === "2") {
    icon = <IconСategorySoftware />;
  } else if (id === "3") {
    icon = <IconСategoryDesign />;
  } else {
    icon = <IconСategoryMarketing />;
  }

  return (
    <span className="category_title">
      {icon}
      {title}
    </span>
  );
}

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
