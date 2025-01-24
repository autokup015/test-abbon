import type { FC } from "react";

import CreateList from "../../../sections/contact/create/create-list";

const metadata = { title: `Contact Create` };

// ---------------------------------------------------------------------------------

const Page: FC = () => {
  return (
    <>
      <title>{metadata.title}</title>

      <CreateList />
    </>
  );
};

export default Page;
