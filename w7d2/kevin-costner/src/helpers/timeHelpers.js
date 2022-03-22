export const calculateDayDifference = (lastWatered) => {
  const lastWateredDate = new Date(lastWatered);
  const currentDate = new Date();

  const diffInMs = currentDate.getTime() - lastWateredDate.getTime();
  const diffInDays = Math.floor(diffInMs / 1000 / 86400);

  return diffInDays;
};
