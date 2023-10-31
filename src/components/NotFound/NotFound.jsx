import "./NotFound.scss";

import { Button } from "UI-KIT/Button/Button";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__header">404</h1>
      <p className="not-found__paragraph">Страница не найдена</p>
      <Button title="На главную" fill={false} size="standard" url="/" />
    </main>
  );
}

export default NotFound;
