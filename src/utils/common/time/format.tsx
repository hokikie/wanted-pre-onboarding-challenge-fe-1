export const timeFormat = (date: string) => {
  return new Intl.DateTimeFormat("ko", {
    dateStyle: "long",
  }).format(new Date(date));
};
