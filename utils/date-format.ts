import { format } from "date-fns";
import id from "date-fns/locale/id";

export default function dateFormat(date: Date) {
  return format(date, "EEEE dd-MMMM-yyyy", { locale: id });
}
