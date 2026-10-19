import EmployeesLocation from "./@locations/_components/EmployeeLocation";

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="h-full w-4/12">
        <div className="h-[90vh] overflow-hidden overflow-y-auto first:mt-0 my-10 last:mb-0">
          <EmployeesLocation store={searchParams?.store} />
          <EmployeesLocation store={searchParams?.store} />
          <EmployeesLocation store={searchParams?.store} />
          <EmployeesLocation store={searchParams?.store} />
        </div>
      </div>
    </>
  );
}