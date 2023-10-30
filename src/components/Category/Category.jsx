import "./Category.scss";
import PropTypes from "prop-types";

import { CategoryTitle } from "UI-KIT/CategoryTitle/CategoryTitle";
import { LinkItem } from "UI-KIT/Link/LinkItem";

export function Category({ categories, categoryTitle, icon }) {
  return (
    <>
      <CategoryTitle title={categoryTitle} icon={icon} />
      <ul className="category">
        {categories.map((category) => (
          <li className="category_link" key={category.title}>
            <LinkItem title={category.title} withBullet url="/" />
          </li>
        ))}
      </ul>
    </>
  );
}

Category.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
