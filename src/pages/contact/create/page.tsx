import type { FC } from "react";

import ContactList from "../../../sections/contact/list/view/contact-list";

const metadata = { title: `Contact Create` };

// ---------------------------------------------------------------------------------

const Page: FC = () => {
  return (
    <>
      <title>{metadata.title}</title>

      <ContactList />
    </>
  );
};

export default Page;
