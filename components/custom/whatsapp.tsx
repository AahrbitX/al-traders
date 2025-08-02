"use client";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SVGProps, useState } from "react";

interface WhatsappInterface {
  companyName: string;
  companyDesignation: string;
  companyNumber: number;
}

export const WhatsAppOverlay = (props: WhatsappInterface) => {
  const { companyName, companyDesignation, companyNumber } = props;

  const [open, setopen] = useState<boolean>(false);

  function openWhatsapp() {
    const url = `https://wa.me/${companyNumber}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <button
        title="Whatsapp"
        className="fixed bottom-6 right-8 rounded-full bg-green-500 p-3.5"
        onClick={() => setopen(!open)}
      >
        {!open ? (
          <WhatsappIcon width={24} height={24} fill="white" />
        ) : (
          <X width={24} height={24} fill="white" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 1000 }}
            className="fixed bottom-24 right-0 grid w-96 grid-rows-[100px,1fr] rounded-xl bg-white shadow-xl sm:right-8"
          >
            <div className="flex w-full items-center justify-evenly rounded-t-xl bg-emerald-500  text-white">
              <WhatsappIcon width={35} height={35} fill="white" />
              <div className="w-3/4">
                <p className="font-dmsans text-lg font-bold">
                  Start a Conversation
                </p>
                <p className="text-xs font-light text-white/90">
                  Click one of our Member below to chat on&nbsp;
                  <span className="font-bold font-dmsans">Whatsapp</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col py-3 pl-3 pr-4">
              <p className="mb-2 text-sm text-muted-foreground">
                Team typically replies in few minutes
              </p>
              <div
                onClick={openWhatsapp}
                className="flex my-1 cursor-pointer items-center justify-between hover:shadow-xl transition-all duration-200 rounded-xl pr-4"
              >
                <div className="flex items-center gap-2 border-l-2 border-green-500 grow py-2 px-2">
                  <WhatappIconBig />
                  <div className="pl-2">
                    <p>{companyName}</p>
                    <p className="text-sm opacity-60">{companyDesignation}</p>
                  </div>
                </div>
                <WhatsappIcon width={24} height={24} fill="#cccccc" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 2.91006C16.0832 1.98399 14.9912 1.24973 13.7876 0.750111C12.5841 0.250494 11.2931 -0.00448012 9.99 5.95696e-05C4.53 5.95696e-05 0.0800002 4.45006 0.0800002 9.91006C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92006C19.9 7.27006 18.87 4.78006 17 2.91006ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17775 12.977 1.74114 11.4593 1.74 9.91006C1.74 5.37006 5.44 1.67006 9.98 1.67006C12.18 1.67006 14.25 2.53006 15.8 4.09006C16.5675 4.85402 17.1757 5.76272 17.5894 6.76348C18.0031 7.76425 18.214 8.83717 18.21 9.92006C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63006 7.57 9.38006C7.43 9.13006 7.55 9.00006 7.68 8.87006C7.79 8.76006 7.93 8.58006 8.05 8.44006C8.17 8.30006 8.22 8.19006 8.3 8.03006C8.38 7.86006 8.34 7.72006 8.28 7.60006C8.22 7.48006 7.72 6.26006 7.52 5.76006C7.32 5.28006 7.11 5.34006 6.96 5.33006H6.48C6.31 5.33006 6.05 5.39006 5.82 5.64006C5.6 5.89006 4.96 6.49006 4.96 7.71006C4.96 8.93006 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z"
      fill={props.fill}
    />
  </svg>
);

const WhatappIconBig = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 256 258"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_248_6)">
      <path
        d="M5.46311 127.456C5.45711 149.133 11.1211 170.299 21.8911 188.955L4.43311 252.697L69.6651 235.593C87.7074 245.415 107.923 250.562 128.465 250.563H128.519C196.334 250.563 251.537 195.38 251.566 127.553C251.579 94.6859 238.791 63.7799 215.557 40.5279C192.327 17.2779 161.432 4.4669 128.514 4.4519C60.6911 4.4519 5.49211 59.6319 5.46411 127.456"
        fill="url(#paint0_linear_248_6)"
      />
      <path
        d="M1.07 127.416C1.063 149.873 6.93 171.796 18.084 191.12L0 257.147L67.571 239.43C86.189 249.581 107.151 254.933 128.481 254.941H128.536C198.784 254.941 255.97 197.773 256 127.518C256.012 93.47 242.764 61.453 218.7 37.368C194.633 13.286 162.633 0.014 128.536 0C58.276 0 1.098 57.16 1.07 127.416ZM41.311 187.792L38.788 183.787C28.182 166.923 22.584 147.435 22.592 127.424C22.614 69.029 70.138 21.52 128.576 21.52C156.876 21.532 183.472 32.564 203.476 52.58C223.479 72.598 234.486 99.208 234.479 127.51C234.453 185.905 186.928 233.42 128.536 233.42H128.494C109.481 233.41 90.834 228.304 74.572 218.655L70.702 216.36L30.604 226.873L41.311 187.792Z"
        fill="url(#paint1_linear_248_6)"
      />
      <path
        d="M96.6781 74.1479C94.2921 68.8449 91.7811 68.7379 89.5121 68.6449C87.6541 68.5649 85.5301 68.5709 83.4081 68.5709C81.2841 68.5709 77.8331 69.3699 74.9161 72.5549C71.9961 75.7429 63.7681 83.4469 63.7681 99.1159C63.7681 114.786 75.1811 129.929 76.7721 132.056C78.3651 134.179 98.8051 167.363 131.177 180.129C158.081 190.738 163.556 188.628 169.395 188.096C175.235 187.566 188.239 180.394 190.892 172.957C193.547 165.521 193.547 159.147 192.751 157.815C191.955 156.488 189.831 155.691 186.646 154.099C183.46 152.506 167.802 144.801 164.883 143.738C161.963 142.676 159.84 142.146 157.716 145.335C155.592 148.519 149.493 155.691 147.634 157.815C145.777 159.944 143.918 160.209 140.734 158.616C137.547 157.018 127.29 153.659 115.121 142.81C105.653 134.368 99.2611 123.943 97.4031 120.754C95.5451 117.57 97.2041 115.844 98.8011 114.257C100.232 112.83 101.987 110.538 103.581 108.679C105.169 106.819 105.699 105.492 106.761 103.368C107.824 101.242 107.292 99.3819 106.497 97.7889C105.699 96.1959 99.5101 80.4449 96.6781 74.1479Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_248_6"
        x1={12361.1}
        y1={24829}
        x2={12361.1}
        y2={4.4519}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1FAF38" />
        <stop offset={1} stopColor="#60D669" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_248_6"
        x1={12800}
        y1={25714.7}
        x2={12800}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="white" />
      </linearGradient>
      <clipPath id="clip0_248_6">
        <rect width={256} height={258} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
