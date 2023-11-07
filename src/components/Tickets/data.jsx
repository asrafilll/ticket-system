const columns = [
  { name: "TICKET NO", uid: "id", sortable: true },
  { name: "STORE", uid: "store", sortable: true },
  { name: "ISSUE CATEGORY", uid: "issueCategory", sortable: true },
  { name: "VENDOR", uid: "vendor", sortable: true },
  { name: "DATE OF SUBMIT", uid: "dateSubmit", sortable: true },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusColorMap = {
  "Assign Team": "warning",
  "Assign Schedule": "secondary",
  "On Progress": "primary",
  Reschedule: "warning",
  Done: "success",
};

const statusOptions = [
  { name: "New Ticket", uid: "New Ticket" },
  { name: "Assign Team", uid: "Assign Team" },
  { name: "Assign Schedule", uid: "Assign Schedule" },
  { name: "On Progress", uid: "On Progress" },
  { name: "Reschedule", uid: "Reschedule" },
  { name: "Done", uid: "Done" },
];

const tickets = [
  {
    id: "ATMOS-HO-0001",
    store: "Kopi Kenangan - Store A",
    issueCategory: "CAM",
    vendor: "Vendor A",
    dateSubmit: "20 September 2022",
    status: "Assign Team",
  },
  {
    id: "ATMOS-HO-0002",
    store: "Warung Steak - Store B",
    issueCategory: "POS",
    vendor: "Vendor B",
    dateSubmit: "22 September 2022",
    status: "Done",
  },
  {
    id: "ATMOS-HO-0003",
    store: "Buku Tahunan - Store C",
    issueCategory: "Network",
    vendor: "Vendor C",
    dateSubmit: "25 September 2022",
    status: "On Progress",
  },
  {
    id: "ATMOS-HO-0004",
    store: "Martabak Manis - Store D",
    issueCategory: "Freezer",
    vendor: "Vendor D",
    dateSubmit: "27 September 2022",
    status: "Reschedule",
  },
  {
    id: "ATMOS-HO-0005",
    store: "Gym Center - Store E",
    issueCategory: "AC",
    vendor: "Vendor E",
    dateSubmit: "29 September 2022",
    status: "New Ticket",
  },
  {
    id: "ATMOS-HO-0006",
    store: "Laundry Express - Store F",
    issueCategory: "Washer",
    vendor: "Vendor F",
    dateSubmit: "1 October 2022",
    status: "Assign Schedule",
  },
];

export { columns, tickets, statusOptions };
