import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import ManagerCard from "./_components/ManagerCard";

export default async function ManagerPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
    next: {
        tags: [`dashboard:managers:${params.id}`]
    }
  });

  const data: Manager = await response.json();
    return (
        <div>
            <ManagerCard manager={data} />
        </div>
  );
}