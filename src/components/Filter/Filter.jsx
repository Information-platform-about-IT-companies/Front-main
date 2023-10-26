import { useState } from "react";
import "./Filter.scss";

import { FilterTabs } from "./FilterTabs/FilterTabs";
import { FilterNav } from "./FilterNav/FilterNav";

export function Filter() {
  const [activeForm, setActiveForm] = useState("Город");

  return (
    <section className="filter">
      <FilterTabs activeForm={activeForm} setActiveForm={setActiveForm} />
      <div className="filter__content">
        <FilterNav activeForm={activeForm} setActiveForm={setActiveForm} />
      </div>
    </section>
  );
}
