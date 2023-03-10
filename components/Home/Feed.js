import { useContext, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";
import ProfilePic from "../../public/sampleprofilepic.jpg";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll `,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Rexnoah",
    userName: "2vixH7ij65MzATF3WoWpugruaArfu3h1YZi3BQHUgPFW",
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    text: 'Good Morning @Digi and @Distort 🌞',
    isProfileImageNft: true,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: "Distort",
    userName: "2vixH7ij65MzATF3WoWpugruaArfu3h1YZi3BQHUgPFW",
    avatar: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg',
    text: 'Wassuupp Qazi How are you? This twitter 3.0 DApp Looks Awesome 🔥 good work @RexNoah and @Qazi',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
]

const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {
        tweets.map((tweet, index) => (
          <Post 
            key={index}
            displayName={tweet.displayName}
            userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        ))
      }
    </div>
  );
};

export default Feed;
