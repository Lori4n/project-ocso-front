import axios from "axios";
import { Location } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
  const token = cookies().get(TOKEN_NAME)?.value;
  const { data } = await axios.get<Location>(`${API_URL}/location/${store}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  
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