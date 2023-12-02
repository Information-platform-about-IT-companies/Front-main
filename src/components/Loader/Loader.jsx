import Spinner from "UI-KIT/Spinner/Spinner";

import "./Loader.scss";

export function Loader() {
  return (
    <>
      <div className="loader-background" />
      <div className="loader">
        <Spinner />
      </div>
    </>
  );
}
