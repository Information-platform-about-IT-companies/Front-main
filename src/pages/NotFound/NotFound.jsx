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
    <main className="not-found">
      <h1 className="not-found__header">404</h1>
      <p className="not-found__paragraph">Страница не найдена</p>
      <div className="not-found__tentacle-left" />
      <div className="not-found__tentacle-right-top" />
      <div className="not-found__tentacle-right-bottom" />
      <Button
        type="button"
        title={isSameSite ? "Назад" : "На главную"}
        size="standard"
        onClick={handleButtonNotFound}
      />
    </main>
  );
}
