import { Employee } from "@/entities";
import { Card, CardBody, CardFooter, CardHeader, Divider, Button } from "@nextui-org/react";

export default function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <Card className="size-72 max-h-72 min-h-72 bg-orange-50">
            <CardHeader>
                <h1 className="font-bold text-xl">{employee.employeeName + " " + employee.employeeLastName}</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo: <b>{employee.employeeEmail}</b></p>
                <p>Número de teléfono: <b>{employee.employeePhoneNumber}</b></p>
            </CardBody>
        </Card>
    );
}