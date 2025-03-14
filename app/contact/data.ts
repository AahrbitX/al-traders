import {
  Mail,
  PhoneCall,
  LocateIcon,
  MessagesSquare,
  ChartColumnStacked,
} from "lucide-react";
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
    title: "Chat to Sales",
    Icon: ChartColumnStacked,
    subtitle: "Interested in switching? Speak to our friendly team.",
    info: [{ text: "sales@aahrbitx.com" }],
  },
  {
    title: "Email Support",
    Icon: Mail,
    subtitle: "Email us and we'll get back to you within 24 hours.",
    info: [{ text: "support@aahrbitx.com" }],
  },
  {
    title: "Chat Support",
    Icon: MessagesSquare,
    subtitle: "Chat to our staff 24/7 for instant access to support",
    info: [{ text: "Start Live Chat" }],
    isOnline: isCompanyActive(),
  },
  {
    title: "Call us",
    Icon: PhoneCall,
    subtitle: "Mon - Fri , 09:00 AM to 05:00 PM (IST)",
    info: [{ text: "+91 1231234566" }, { text: "+91 890890764" }],
  },
  {
    title: "Chennai",
    Icon: LocateIcon,
    subtitle: "Visit our Office Mon - Fri , 09:00 AM to 05:00 PM",
    info: [{ text: "12, main road, chennai, chennai, Tamilnadu." }],
  },
  {
    title: "Kanyakumari",
    Icon: LocateIcon,
    subtitle: "Visit our Office Mon - Fri , 09:00 AM to 05:00 PM",
    info: [{ text: "12, main road, kanyakumari, Kanyakumari, Tamilnadu." }],
  },
];
