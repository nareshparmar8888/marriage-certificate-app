export const formatDate = (dateString: any) => {
  const dateParts = dateString?.split("T");
  const date = dateParts[0];
  const [year, month, day] = date?.split("-");
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export const convertDateFormat = (dateString: string): string => {
  const inputDate: Date = new Date(dateString);

  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid Date");
  }

  const month: string = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day: string = String(inputDate.getDate()).padStart(2, "0");
  const year: number = inputDate.getFullYear();

  const formattedDate: string = `${month}-${day}-${year}`;

  return formattedDate;
};
