import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import UserGuides from "../pages/UserGuides";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/guides", element: <UserGuides /> },
        ],
    },
]);

export default router;
