import { PhoneCall, LocateIcon, MessagesSquare } from "lucide-react";
import { ContactCardType } from "./components/contactCard";

export const companyName = "AL Traders";

export const isCompanyActive = (): boolean => {
  const startTime = new Date();
  const endTime = new Date();

  startTime.setHours(9);
  startTime.setMinutes(0);
  startTime.setSeconds(0);
  endTime.setHours(17);

  return startTime <= new Date() && new Date() <= endTime;
};

export const ContactInfo: ContactCardType[] = [
  {
    title: "Chat Support",
    Icon: MessagesSquare,
    subtitle: "Chat to our staff 24/7 for instant access to support",
    info: [{ text: "Start Live Chat", href: "https://wa.me/9677776883" }],
    isOnline: isCompanyActive(),
  },
  {
    title: "Call us",
    Icon: PhoneCall,
    subtitle: "Mon - Fri , 09:00 AM to 05:00 PM (IST)",
    info: [{ text: "+91 9677776883" }, { text: "+91 8056414376" }],
  },
  {
    title: "Nagercoil-1",
    Icon: LocateIcon,
    subtitle: "Visit our Office Mon - Fri , 09:00 AM to 05:00 PM",
    info: [{ text: "763, M.S. Road, Vadasery, Nagercoil-1" }],
  },
  {
    title: "Nagercoil-2",
    Icon: LocateIcon,
    subtitle: "Visit our Office Mon - Fri , 09:00 AM to 05:00 PM",
    info: [{ text: "661-Cape Road, Kottar, Nagerkoil-2" }],
  },
];
