import Login from '../components/pages/Auth/Login';
import NewAccount from '../components/pages/Auth/NewAccount';
import Products from '../components/pages/Product/Products';
import CreateProduct from '../components/pages/Product/CreateProduct';
import UpdateProduct from '../components/pages/Product/UpdateProduct';

const login = {
    url: "/",
    type: "public",
    component: Login
}

const newAccount = {
    url: "/new-account",
    type: "public",
    component: NewAccount
}

const products = {
    url: "/products",
    type: "private",
    component: Products
}

const createProduct = {
    url: "/create-product",
    type: "private",
    component: CreateProduct
}

const updateProduct = {
    url: "/update-product/:id",
    type: "private",
    component: UpdateProduct
}

const states = [ login, newAccount, products, createProduct, updateProduct];

export default states;