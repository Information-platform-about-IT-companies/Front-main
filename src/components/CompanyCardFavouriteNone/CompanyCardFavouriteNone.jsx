// UI
import { Button } from "UI-KIT/Button/Button";
// Стили
import "./CompanyCardFavouriteNone.scss";

export default function CompanyCardFavouriteNone() {
  return (
    <div className="companyCardFfvouriteNone">
      <h2 className="companyCardFfvouriteNone__header">Тут пока пусто</h2>
      <p className="companyCardFfvouriteNone__text">
        Нажмите кнопку ниже, чтобы найти полезные компании.
      </p>
      <Button size="standard" title="Поиск компаний" url="/filter" linkType="link" fill />
    </div>
  );
}
