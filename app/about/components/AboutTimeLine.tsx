import { MapPin } from "lucide-react";
import React from "react";

type TimeLineType = { year: string; operation: string };

const TimeLine: Array<TimeLineType> = [
  {
    year: "2020",
    operation: "Launched the website",
  },
  {
    year: "2021",
    operation: "Added new products",
  },
  {
    year: "2022",
    operation: "Added new features",
  },
  {
    year: "2023",
    operation: "Added new designs",
  },
];

function AboutTimeLine() {
  return (
    <section className="bg-muted py-12 my-14">
      <div className="container">
        <dl className="flex flex-wrap gap-4 justify-around">
          {TimeLine.map((t) => (
            <TimeCard key={t.year} {...t} />
          ))}
        </dl>
      </div>
    </section>
  );
}

const TimeCard = ({ year, operation }: TimeLineType) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <dt className="text-4xl font-dmsans font-bold text-muted-foreground">
        {year}
      </dt>
      <span className="text-secondary">
        <MapPin size={26} />
      </span>
      <dd className="">{operation}</dd>
    </div>
  );
};

export default AboutTimeLine;
