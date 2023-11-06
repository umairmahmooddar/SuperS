import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";

const Layout =
  (Component) =>
  ({ ...props }) => {
    let [isOpen, setIsOpen] = useState(false);
    let [isHire, setIsHire] = useState("");

    function closeModal() {
      setIsOpen(false);
      setIsHire("");
    }

    function openModal(value) {
      setIsHire(value ? "true" : "false");
    }

    useEffect(() => {
      isHire && setIsOpen(true);
    }, [isHire]);
    return (
      <div className="Layout DBlock">
        <Header openModal={openModal} />
        <Component
          {...props}
          isOpen={isOpen}
          isHire={isHire}
          setIsOpen={setIsOpen}
          closeModal={closeModal}
          openModal={openModal}
        />
        <Footer />
      </div>
    );
  };

export default Layout;
