import { Location } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { API_URL } from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
  if (!store) return;
  const response = await fetch(`${API_URL}/location/${store}`, {
    headers: {
      ...authHeaders()
    },
    next: {
      tags: ["dashboard:locations", `dashboard:locations:${store}`]
    }
  });
  
  const data: Location = await response.json()
  return (
    <Card>
      <CardHeader>
        <b className="w-full">{data.locationName}</b>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="w-full">
          Manager:
          <Link href={{ pathname: `/dashboard/managers/${data.manager?.managerId}` }}>
            <b>{data.manager?.managerFullName}</b>
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}