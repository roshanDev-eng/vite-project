import { Route, Routes } from "react-router-dom";
import Routes_Object, { routerarray } from "../Routes_Object";

const PagesRoutes = () => {
  return (
    <Routes>
      {routerarray.map((route, index) => {
        const hasNested =
          Array.isArray(route.nested) && route.nested.length > 0;

        return hasNested ? (
          <Route key={index} path={route.path} element={route.element}>
            {route.nested.map((nested, nestedIndex) => {
              console.log(nested.path);
              return (
                <Route
                  key={nestedIndex}
                  path={nested.path}
                  element={nested.element}
                />
              );
            })}
          </Route>
        ) : (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            index={route.index}
          />
        );
      })}
    </Routes>
  );
};

export default PagesRoutes;
