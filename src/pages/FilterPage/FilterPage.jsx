import Breadcrumbs from "UI-KIT/Breadcrumbs/Breadcrumbs";
import { Filter } from "components/Filter/Filter";
import CompanyCard from "components/CompanyCard/CompanyCard";
import "./FilterPage.scss";

function FilterPage() {
  return (
    <main className="filterPage">
      <div className="filterPage__intro">
        <Breadcrumbs />
        <h1 className="filterPage__title">Изучите лучшие компании России</h1>
        <Filter />
      </div>
      <ul className="filterPage__list">
        <li className="filterPage__listitem">
          <CompanyCard
            services={[
              "Исчезновение Статуи Свободы",
              "Полет перед зрителями на сцене",
              "Проход вскозь Великую китайскую стену",
              "Разрезание ассистентки",
              "блаблабла",
            ]}
            name="Дэвид Блейн"
            iconLikeState
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?"
          />
        </li>
        <li>
          <CompanyCard
            services={[
              "Разрезание ассистентки",
              "Исчезновение Статуи Свободы",
              "блаблабла",
              "Полет перед зрителями на сцене",
              "Проход вскозь Великую китайскую стену",
            ]}
            name="Дэвид Коперфильд"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?"
          />
        </li>
      </ul>
      <div>тут будет пагинация</div>
    </main>
  );
}

export default FilterPage;
