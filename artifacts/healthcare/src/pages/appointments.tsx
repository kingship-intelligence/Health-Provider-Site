import { useEffect } from "react";
import { APPOINTMENT_REQUEST_URL } from "@/lib/site-links";

export default function Appointments() {
  useEffect(() => {
    window.location.replace(APPOINTMENT_REQUEST_URL);
  }, []);

  return null;
}
