import About from "../pages/About";
import Services from "../pages/Services";

export const RequireRoutes = [
    { path: "/services", name: "Services", Component: Services },
    { path: "/about", name: "About", Component: About },
  ]