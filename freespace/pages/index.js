import { useState } from "react";
//import components
import Layout from "@/layouts/Layout";
import TechnologyStackList from "@/components/technologyStack/TechnologyStackList";
import WhyFreespace from "@/components/whyFreespace/WhyFreespace";
import OurEmployees from "@/components/ourEmployees/OurEmployees";
import MyModal from "@/components/common/Dialog";

const Home = ({ isOpen, setIsOpen, closeModal, openModal, isHire }) => {
  return (
    <>
      <section className="companyPage DBlock dark:bg-black">
        <TechnologyStackList />
        <WhyFreespace openModal={openModal} />
        <OurEmployees openModal={openModal} />
        <MyModal isOpen={isOpen} closeModal={closeModal} isHire={isHire} />
      </section>
    </>
  );
};

export default Layout(Home);
