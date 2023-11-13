import "./Category.scss";
import PropTypes, { string } from "prop-types";

import { CategoryTitle } from "UI-KIT/CategoryTitle/CategoryTitle";
import { LinkItem } from "UI-KIT/Link/LinkItem";

export function Category({ categories, categoryTitle, id }) {
  return (
    <>
      <CategoryTitle title={categoryTitle} id={id} />
      <ul className="category">
        {categories.map((category) => (
          <li className="category_link" key={category.title}>
            <LinkItem title={category.title} withBullet={false} url={category.link} />
          </li>
        ))}
      </ul>
    </>
  );
}

Category.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  id: PropTypes.string.isRequired,
};
