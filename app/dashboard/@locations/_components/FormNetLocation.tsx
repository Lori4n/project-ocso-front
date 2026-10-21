import { Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create"

export default function FormNewLocation() {

return (
    <form action={createLocation}>
        <Input label="Nombre de tienda" name="locationName"/>
        <button> Subir</button>
    </form>
    );
}
