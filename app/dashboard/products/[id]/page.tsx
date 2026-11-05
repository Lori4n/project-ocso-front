import { API_URL } from "@/constants";
import ProductCard from "../_components/ProductCard";
import { authHeaders } from "@/helpers/authHeaders";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";

export default async function ProductPage({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const responseProduct = await fetch(`${API_URL}/products/${params.id}`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: [`dashboard:products:${params.id}`]
        }
    });

    const product: Product = await responseProduct.json();

    const responseProvider = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders(),
        },
    });

    const providers: Provider[] = await responseProduct.json();

    return (
        <div className="w-full">
            <h1>{product.productName}</h1>
            <h1>{product.price}</h1>
            <h1>{product.countSeal}</h1>
            <UpdateProduct product={product} providers={providers} />
        </div>
    );
}