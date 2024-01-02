export const formatDate = (dateString: string) => {
  const dateParts = dateString.split("T");
  const date = dateParts[0];
  const time = dateParts[1].split(".")[0];

  const [year, month, day] = date.split("-");
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};
