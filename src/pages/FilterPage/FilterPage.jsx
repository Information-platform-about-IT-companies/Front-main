// UI
import Breadcrumbs from "UI-KIT/Breadcrumbs/Breadcrumbs";
// components
import { Filter } from "components/Filter/Filter";
import CompanyCard from "components/CompanyCard/CompanyCard";
import { Pagination } from "components/Pagination/Pagination";
// стили
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
            type="filterCard"
            services={[
              { id: 1, name: "Исчезновение Статуи Свободы" },
              { id: 2, name: "Полет перед зрителями на сцене" },
              { id: 3, name: "Проход вскозь Великую китайскую стену" },
              { id: 4, name: "Разрезание ассистентки" },
              { id: 5, name: "блаблабла" },
            ]}
            city="Город N"
            name="Дэвид Блейн"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?"
          />
        </li>
        <li className="filterPage__listitem">
          <CompanyCard
            type="filterCard"
            services={[
              { id: 1, name: "Исчезновение Статуи Свободы" },
              { id: 2, name: "Полет перед зрителями на сцене" },
              { id: 3, name: "Проход вскозь Великую китайскую стену" },
              { id: 4, name: "Разрезание ассистентки" },
              { id: 5, name: "блаблабла" },
            ]}
            city="Город N"
            name="Дэвид Блейн"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?"
          />
        </li>
        <li className="filterPage__listitem">
          <CompanyCard
            type="filterCard"
            services={[
              { id: 1, name: "Исчезновение Статуи Свободы" },
              { id: 2, name: "Полет перед зрителями на сцене" },
              { id: 3, name: "Проход вскозь Великую китайскую стену" },
              { id: 4, name: "Разрезание ассистентки" },
              { id: 5, name: "блаблабла" },
            ]}
            city="Город N"
            name="Дэвид Блейн"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?"
          />
        </li>
        <li className="filterPage__listitem">
          <CompanyCard
            type="filterCard"
            services={[
              { id: 1, name: "Исчезновение Статуи Свободы" },
              { id: 2, name: "Полет перед зрителями на сцене" },
              { id: 3, name: "Проход вскозь Великую китайскую стену" },
              { id: 4, name: "Разрезание ассистентки" },
              { id: 5, name: "блаблабла" },
            ]}
            city="Город N"
            name="Дэвид Блейн"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae laborum nam nobis reprehenderit, tempora? Ab dolor dolorum esse, explicabo fugiat labore molestiae nulla officiis, omnis pariatur quaerat quasi quibusdam rerum suscipit veritatis. Accusamus, accusantium enim iusto libero magnam neque nihil porro praesentium qui ratione vero voluptate! Quia, quos similique?"
          />
        </li>
      </ul>
      <Pagination currentPage="1" totalPages="3" />
    </main>
  );
}

export default FilterPage;
