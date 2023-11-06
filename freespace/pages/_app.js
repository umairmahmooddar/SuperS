import { useEffect } from "react";
import { useRouter } from "next/router";
//import style and components
import "@/styles/style.scss";
import FreeSpaceHead from "@/components/common/FreeSpaceHead";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router?.route]);
  return (
    <>
      <Provider store={store}>
        <FreeSpaceHead />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
