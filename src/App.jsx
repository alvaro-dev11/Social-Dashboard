import { Header } from "./components/Header";
import {
  OverviewContainer,
  OverviewTodayContainer,
} from "./components/OverviewContainer";

function App() {
  return (
    <main className="max-w-[1140px] relative mx-auto">
      <Header />
      <OverviewContainer />
      <OverviewTodayContainer />
      <div class="text-center dark:text-white">
        Challenge by{" "}
        <a
          class="text-Dark-Desaturated-Blue dark:text-Desaturated-Blue font-bold"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          class="text-Dark-Desaturated-Blue dark:text-Desaturated-Blue font-bold"
          href="https://github.com/alvaro-dev11"
          target="_blank">
          Alvaro Villanueva
        </a>
        .
      </div>
    </main>
  );
}

export default App;
