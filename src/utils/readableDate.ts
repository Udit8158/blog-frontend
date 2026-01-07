const readableDateFormat = (dateStr: string) => {
  const date = new Date(dateStr);

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

console.log(readableDateFormat("2025-12-29T13:34:56.230Z"));

export { readableDateFormat };
