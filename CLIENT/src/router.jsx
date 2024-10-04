import {createBrowserRouter ,redirect} from "react-router-dom"
import MainLayout from "./pages/MainLayout"
import App from "./pages/HomePage"
import AllProducts from "./pages/allProducts"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: 'products',
                element: <AllProducts/>
            }
        ]
    }
])

export default router