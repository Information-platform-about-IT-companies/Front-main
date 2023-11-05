import { MemoryRouter, Routes, Route } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import "./Breadcrumbs.scss";
import Main from "../../pages/Main/Main";
// import WelcomePage from "components/WelcomePage/WelcomePage";

export default {
  title: "UI-KIT/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Хлебные крошки",
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/home"]}>
        <Story />
        <Routes>
          <Route path="home" element={<Main />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export const BreadcrumbsExample = {
  args: {},
};
