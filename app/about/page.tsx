import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " About ",
  description:
    "Empower Your Online Presence with WebJini: Your One-Stop Destination for Innovative Web Services",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="At WebJini, we're driven by innovation. Our mission? To empower businesses with cutting-edge web solutions. Meet our team and discover how we're shaping the digital future."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
