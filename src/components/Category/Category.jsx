import PropTypes from "prop-types";
// UI-KIT
import { CategoryTitle } from "UI-KIT/CategoryTitle/CategoryTitle";
import { LinkItem } from "UI-KIT/Link/LinkItem";
// styles
import "./Category.scss";

export function Category({ name, icon, services = [] }) {
  return (
    <>
      <CategoryTitle title={name} icon={icon} />
      <ul className="category" data-testid="category">
        {services.map((service) => (
          <li className="category_link" key={service.name}>
            <LinkItem
              title={service.name}
              url={`/filter/?services=[${service.id}]`}
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
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
