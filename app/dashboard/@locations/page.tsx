import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import UpdateLocation from "./_components/UpdateLocations";
import FormUpdateLocation from "./_components/FormUpdateLocation";
import { Location } from "@/entities";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import FormNewLocation from "./_components/FormNetLocation";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { store?: string };
}) => {
  const response = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashboard:locations"],
    },
  });

  let data: Location[] = await response.json();

  data = [
    {
      locationId: "0",
      locationName: "Ninguna",
      locationLatLng: [0, 0],
      locationAddress: "No existe",
    } as unknown as Location,
    ...data,
  ];

  return (
  <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
    <div className="w-1/2 my-10">
      <SelectLocation locations={data} store={searchParams.store} />
    </div>
    <div className="w-8/12">
      <LocationCard store={searchParams.store} />
    </div>
    <div className="w-6/12">
      <FormNewLocation store={searchParams.store} />
    </div>
    <div className="flex flex-row flex-grow-0 gap-10 items-center">
      <DeleteLocationButton store={searchParams.store} />
      <UpdateLocation store={searchParams.store}>
        <FormUpdateLocation store={searchParams.store} />
      </UpdateLocation>
    </div>
  </div>
);
};

export default LocationsPage;