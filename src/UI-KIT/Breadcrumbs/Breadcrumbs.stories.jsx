import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";

import { Button } from "UI-KIT/Button/Button";
import Breadcrumbs from "./Breadcrumbs";

import "./Breadcrumbs.scss";

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
      <MemoryRouter initialEntries={["/frontend"]}>
        <Story />
        <Routes>
          <Route
            path="/"
            element={
              <Button
                size="standard"
                title="Команда фронтенда"
                url="/frontend"
                linkType="navlink"
              />
            }
          />
          <Route
            path="frontend"
            element={
              <>
                <Button size="standard" title="На главную" url="/" linkType="navlink" />
                <br />
                <Button size="standard" title="Артур" url="/frontend/artur" linkType="navlink" />
                <Button size="standard" title="Алина" url="/frontend/alina" linkType="navlink" />
                <Button
                  size="standard"
                  title="Виолета"
                  url="/frontend/violetta"
                  linkType="navlink"
                />
                <Button
                  size="standard"
                  title="Евгений"
                  url="/frontend/evgeniy"
                  linkType="navlink"
                />
                <Button size="standard" title="Никита" url="/frontend/nikita" linkType="navlink" />
              </>
            }
          />
          <Route
            path="/frontend/artur"
            element={
              <>
                <Button size="standard" title="На главную" url="/" linkType="navlink" />
                <Button size="standard" title="Назад " url="/frontend" linkType="navlink" />
              </>
            }
          />
          <Route
            path="/frontend/alina"
            element={
              <>
                <Button size="standard" title="На главную" url="/" linkType="navlink" />
                <Button size="standard" title="Назад " url="/frontend" linkType="navlink" />
              </>
            }
          />
          <Route
            path="/frontend/violetta"
            element={
              <>
                <Button size="standard" title="На главную" url="/" linkType="navlink" />
                <Button size="standard" title="Назад " url="/frontend" linkType="navlink" />
              </>
            }
          />
          <Route
            path="/frontend/nikita"
            element={
              <>
                <Button size="standard" title="На главную" url="/" linkType="navlink" />
                <Button size="standard" title="Назад " url="/frontend" linkType="navlink" />
              </>
            }
          />

          <Route
            path="/frontend/evgeniy"
            element={
              <>
                <Button size="standard" title="На главную" url="/" linkType="navlink" />
                <Button size="standard" title="Назад " url="/frontend" linkType="navlink" />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export const BreadcrumbsExample = {
  args: {},
};
