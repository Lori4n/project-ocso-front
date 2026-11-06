import createEmployee from "@/actions/employees/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateEmployee() {
    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
            <Input required={true} label="Nombre" name="employeeName" placeholder="Marco" />
            <Input required={true} label="Apellidos" name="employeeLastName" placeholder="Aurelio" />
            <Input required={true} label="Correo electrónico" name="employeeEmail" placeholder="marco@marco.com" />
            <Input required={true} label="Num. de Teléfono" name="employeePhoneNumber" placeholder="444XXXXX" />
            <Input required={true} type="file" name="employeePhoto" />
            <Button type="submit" color="primary">
                Actualizar datos
            </Button>
        </form>
    );
}