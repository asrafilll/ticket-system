export const Dashboard = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="border-1 border-neutral-100 shadow-sm h-fit rounded-lg py-6 pl-4 pr-12">
            <div className="text-md font-light text-neutral-400">
              Total Tickets
            </div>
            <div className="text-5xl font-semibold text-emerald-800 mt-2">
              2500
            </div>
          </div>
        </div>
        <div className="border-1 border-neutral-100 shadow-sm w-full h-96 rounded-lg"></div>
      </div>
    </div>
  );
};
