const columns = [
  { name: "ID", uid: "id" },
  { name: "TICKET TYPE", uid: "name" },
  { name: "ACTIONS", uid: "actions" },
];

const ticketTypes = [
  "New Installation",
  "Setup POS",
  "Additional Installation",
  "Maintenance",
  "Dismantle",
].map((name, index) => ({
  id: index + 1,
  name,
}));

export { columns, ticketTypes };
