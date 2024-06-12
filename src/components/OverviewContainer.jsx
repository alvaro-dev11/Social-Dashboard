import data from "../../data/data.json";
import { OverviewCard, OverviewTodayCard } from "./OverviewCard";

const convertNumberToK = (number) => {
  if (number >= 10000) {
    number = number / 1000;
    return `${number}k`;
  }
  return number;
};

export const OverviewContainer = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex justify-center flex-wrap gap-[30px] absolute top-[191px] tablet:top-[140px] desktop:top-[160px] left-0 right-0">
      {data.overview.map((elemento) => (
        <OverviewCard
          key={elemento.id}
          user={elemento.user}
          audienceType={elemento.audienceType}
          audience={convertNumberToK(elemento.audience)}
          network={elemento.network}
          today={elemento.today}
          isUp={elemento.isUp}
        />
      ))}
    </section>
  );
};

export const OverviewTodayContainer = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <h2 className="text-Dark-Grayish-Blue dark:text-white text-2xl mb-[27px] ml-8 tablet:ml-14 desktop:ml-0 font-bold">
        Overview - Today
      </h2>
      <div className="flex flex-wrap justify-center gap-[30px] px-4 desktop:px-0">
        {data["overview-today"].map((elemento) => (
          <OverviewTodayCard
            key={elemento.id}
            statsType={elemento.statsType}
            stats={convertNumberToK(elemento.stats)}
            network={elemento.network}
            porcentage={elemento.porcentage}
            isUp={elemento.isUp}
          />
        ))}
      </div>
    </section>
  );
};
