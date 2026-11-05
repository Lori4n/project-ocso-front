"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function deleteProduct(productId : string, formData: FormData) {

  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
      'conten-type': 'application/json'
    },
  });

  if (response.status === 201) revalidateTag("dashboard:product");
}