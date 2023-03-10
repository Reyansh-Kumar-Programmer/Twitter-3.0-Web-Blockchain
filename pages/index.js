import Head from "next/head";
import Feed from "../components/Home/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
};

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Head>
          <title>Twitter Blockchain Web 3.0</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
