import "./CompanyLogo.scss";

export default function CompanyLogo({ logo, name, city }) {
  return (
    <div className="сompanyLogo__wrapper">
      {logo ? (
        <img src={logo} className="сompanyLogo__logo" alt={`Логотип компании ${name}`} />
      ) : (
        <div className="сompanyLogo__logo-cap" />
      )}
      <div className="сompanyLogo__title">
        <h2 className="сompanyLogo__name">{name}</h2>
        <span className="сompanyLogo__city">{city}</span>
      </div>
    </div>
  );
}
