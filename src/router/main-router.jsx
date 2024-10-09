import { nanoid } from "nanoid";
import { Home } from "../home";
import { ProductDetail } from "../pages/product-detail";

export const MainRouter = [
    {
        id: nanoid(),
        component: Home
    },
    {
        id: nanoid(),
        path: "product-detail",
        component: ProductDetail
    }
]