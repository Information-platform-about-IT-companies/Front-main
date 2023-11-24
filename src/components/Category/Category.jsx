import PropTypes from "prop-types";
// UI-KIT
import { CategoryTitle } from "UI-KIT/CategoryTitle/CategoryTitle";
import { LinkItem } from "UI-KIT/Link/LinkItem";
// styles
import "./Category.scss";

export function Category({ categories, categoryTitle, id }) {
  return (
    <>
      <CategoryTitle title={categoryTitle} id={id} />
      <ul className="category" data-testid="category">
        {categories.map((category) => (
          <li className="category_link" key={category.title}>
            <LinkItem
              title={category.title}
              url={category.link}
              textColor="var(--text-color)"
              lineColor="var(--link-underline)"
            />
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
