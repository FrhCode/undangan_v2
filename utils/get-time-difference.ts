import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

export default function getTimeDifference(
  date: Date,
  futureDate: Date
): [number, number, number, number] {
  const days = differenceInDays(futureDate, date);
  const hours = differenceInHours(futureDate, date) % 24;
  const minutes = differenceInMinutes(futureDate, date) % 60;
  const seconds = differenceInSeconds(futureDate, date) % 60;

  return [days, hours, minutes, seconds];
}
