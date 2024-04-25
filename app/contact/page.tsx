import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with us at WebJini! Whether you have questions about our services or want to discuss your project requirements, our team is here to help. Reach out to us today for expert assistance and personalized solutions.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Contact WebJini for expert web services tailored to your needs. Let's elevate your online presence together!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
