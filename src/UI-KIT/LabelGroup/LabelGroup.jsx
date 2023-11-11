import "./LabelGroup.scss";
import { Link } from "react-router-dom";
import { Label } from "../Label/Label";
import { declinationsNumericalValues } from "../../services/constants";

export default function LabelGroup({ title, services }) {
  // для кнопок "ЕЩЕ N УСЛУГ"
  if (!services) return null;
  let filterServices;
  let filterCount;
  if (services.length > 3) {
    filterServices = services.slice(0, 3);
    filterCount = services.length - 3;
  } else filterServices = services.slice(0);
  return (
    <div className="labels__wrapper">
      <span className="labels__text">{title}:</span>

      <ul className="labels__list">
        {filterServices.map((service) => (
          <li>
            <Link to="/" className="labels__list-item">
              <Label title={service} />
            </Link>
          </li>
        ))}
        {filterCount && (
          <Label title={`Ещё ${filterCount} ${declinationsNumericalValues(filterCount)}`} />
        )}
      </ul>
    </div>
  );
}
