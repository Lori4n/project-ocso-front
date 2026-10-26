import ManagerCards from "./_components/ManagerCard";

const ManagersPage = async () => {
  return (
    <div className="w-4/12 h-[90vh] max-h-[90vh] overflow-y-auto">
      <ManagerCards />
    </div>
  )
}

export default ManagersPage;