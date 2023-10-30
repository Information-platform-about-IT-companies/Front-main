import { Search } from "../Search/Search";

function Main() {
  return (
    <main>
      <section className="Intro">
        <h1 className="Intro__title">Найдите подходящие для вас IT-компании в России</h1>
        <Search />
      </section>
      <section className="Companies">
        <h2 className="Companies__subtitle">Найдите компанию, которая Вам нужна</h2>
        <p>Мы разбили все компании на основные 4 категории для вашего удобства</p>
      </section>
    </main>
  );
}

export default Main;
