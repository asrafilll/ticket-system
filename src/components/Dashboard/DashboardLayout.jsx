import DashboardLayoutNavbar from "./Dashboard.Navbar";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="mt-2">
      <DashboardLayoutNavbar />
      <div className="max-w-6xl mx-auto mt-10 flex flex-col gap-4 h-full">
        {children}
      </div>
    </div>
  );
};
