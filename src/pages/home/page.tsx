import type { FC } from "react";
import HomeView from "../../sections/home/view/home-view";

const metadata = { title: `Homepage` };

// ---------------------------------------------------------------------------------

const HomePage: FC = () => {
  return (
    <>
      <title>{metadata.title}</title>

      <HomeView />
    </>
  );
};

export default HomePage;
