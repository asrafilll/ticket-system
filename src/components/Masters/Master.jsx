import MasterNavbar from "./Masters.Navbar";

export const Masters = () => {
  return (
    <div className="mt-2">
      <MasterNavbar />

      <div className="max-w-5xl mx-auto mt-10">
        <div className="flex gap-4 items-start">
          <div className="border-1 border-neutral-100 w-1/3 rounded-lg">
            <div className="flex-col gap-4 text-sm text-slate-600">
              <div className="border-neutral-100 border-b-1 p-3">
                Ticket Type
              </div>
              <div className="border-neutral-100 border-b-1 p-3">Customers</div>
              <div className="border-neutral-100 border-b-1 p-3">PIC Data</div>
              <div className="border-neutral-100 border-b-1 p-3">Vendors</div>
              <div className="border-neutral-100 border-b-1 p-3">Users</div>
            </div>
          </div>
          <div className="border-1 border-neutral-100 shadow-sm w-2/3 h-[700px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
