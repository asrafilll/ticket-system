import DashboardNavbar from "./Dashboard.Navbar";

export const Dashboard = () => {
  return (
    <div className="mt-2">
      <DashboardNavbar />

      <div className="max-w-5xl mx-auto mt-10 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="border-1 border-neutral-100 shadow-sm w-1/3 h-60 rounded-lg"></div>
          <div className="border-1 border-neutral-100 shadow-sm w-1/3 h-60 rounded-lg"></div>
          <div className="border-1 border-neutral-100 shadow-sm w-1/3 h-60 rounded-lg"></div>
        </div>
        <div className="border-1 border-neutral-100 shadow-sm w-full h-96 rounded-lg"></div>
      </div>
    </div>
  );
};
