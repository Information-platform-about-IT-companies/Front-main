import { useNavigate, useLocation } from "react-router-dom";
// UI-KIT
import { Button } from "UI-KIT/Button/Button";
// styles
import "./NotFound.scss";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  const isSameSite =
    document.referrer.includes(window.location.origin) || location.state?.fromSameSite;

  const handleButtonNotFound = () => {
    if (isSameSite) {
      navigate(-1);
    }
    navigate("/");
  };

  return (
    <main className="not-found fullwidth">
      <h1 className="not-found__header">404</h1>
      <p className="not-found__paragraph">Страница не найдена</p>
      <Button
        title={isSameSite ? "Назад" : "На главную"}
        fill={false}
        size="standard"
        onClick={handleButtonNotFound}
      />
    </main>
  );
}
