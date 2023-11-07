const columns = [
  { name: "ID", uid: "id" },
  { name: "NAME", uid: "name" },
  { name: "BRANCH/VENDOR", uid: "branch" },
  { name: "ROLE", uid: "role" },
  { name: "ACTIONS", uid: "actions" },
];

const userDatas = [
  {
    id: 1,
    name: "Person A",
    branch: "HO",
    role: "Admin",
  },
  {
    id: 2,
    name: "Person B",
    branch: "Vendor A",
    role: "Technician",
  },
  {
    id: 3,
    name: "Person C",
    branch: "Vendor A",
    role: "Admin",
  },
  {
    id: 4,
    name: "Person D",
    branch: "Vendor B",
    role: "Technician",
  },
  {
    id: 5,
    name: "Person E",
    branch: "Vendor B",
    role: "Admin",
  },
];

export { columns, userDatas };
