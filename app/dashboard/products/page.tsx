import { API_URL } from "@/constants";
import { Product, Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import createProduct from "@/actions/products/create";
import { Button, Input } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

const ProductsPage = async () => {
    const responseProducts = await fetch(`${API_URL}/products`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:products"]
        }
    });

    const products: Product[] = await responseProducts.json();

    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:providers"]
        }
    });

    const providers: Provider[] = await responseProviders.json();

    return (
        <form className="px-10 justify-center pt-10" action={createProduct}>
            <div className="flex flex-col p-10 rounded-md gap-6 bg-orange-500"></div>
            <h1 className="text-2x1 font-bold"> Crear producto</h1>
            <Input label="Nombre" name="productName" />
            <Input
                label="Precio"
                endContent={<LuDollarSign size="20" />}
                name="price"
            />
            <Input label="Num. de Sellos" name="countSeal" />
            <SelectProvider providers={providers} />
            <Button color="primary" type="submit">
                Crear producto
            </Button>
        </form>
    );
};

export default ProductsPage;