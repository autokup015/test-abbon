import type { FC } from "react";
import ContactView from "../../sections/contact/view/contact-view";

const metadata = { title: `Contact List` };

// ---------------------------------------------------------------------------------

const Contact: FC = () => {
  return (
    <>
      <title>{metadata.title}</title>
      
      <ContactView />
    </>
  );
};

export default Contact;
