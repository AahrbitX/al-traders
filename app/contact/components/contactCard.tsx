import Link from "next/link";
import React from "react";
import { LucideIcon } from "lucide-react";

type ContactInfo = {
  text: string;
  href?: string;
};

export type ContactCardType = {
  title: string;
  subtitle: string;
  info: ContactInfo[];
  Icon?: LucideIcon;
  isOnline?: boolean;
};

function ContactCard({
  title,
  subtitle,
  info,
  Icon,
  isOnline,
}: ContactCardType) {
  return (
    <div className="py-6 px-2 border-b border-neutral-300">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-primary" />}
        <h2 className="text-lg font-semibold mb-0">{title}</h2>
      </div>
      <p className="text-sm text-gray-500 text-pretty mt-1">{subtitle}</p>
      <div className="mt-2 space-y-1">
        {info.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <>
                <Link
                  href={item.href}
                  className="underline font-semibold underline-offset-3 inline-block"
                >
                  {item.text}
                </Link>
              </>
            ) : (
              <>
                <p className="underline decoration-primary font-semibold underline-offset-3 inline-block">
                  {item.text}
                </p>
              </>
            )}
            {isOnline !== undefined && (
              <span
                className={`ml-3 px-2 py-1 text-sm inline-block rounded-xl ${
                  isOnline
                    ? "text-emerald-600 bg-emerald-100"
                    : "text-red-600 bg-red-100"
                }`}
              >
                {isOnline ? "Online" : "Offline"}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactCard;
