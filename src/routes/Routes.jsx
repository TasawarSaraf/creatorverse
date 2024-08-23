import React from "react";
import { useRoutes } from "react-router-dom";
import ShowCreators from "../pages/ShowCreators";
import AddCreator from "../pages/AddCreator";
import EditCreator from "../pages/EditCreator";
import ViewCreator from "../pages/ViewCreator";

/**it was asked to use useRoutes */


const Routes = () =>{
    let routes = useRoutes([
        {path: "/", element: <ShowCreators/>},
        {path: "add-creator", element: <AddCreator/>},
        {path: "edit-creator", element: <EditCreator/>},
        {path: "view-creator", element: <ViewCreator/>}
    ]);

    return routes;
};


export default Routes;