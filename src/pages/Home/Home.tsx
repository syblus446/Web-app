import { Header } from "../../features/theme/Header";
import { FaImage } from "react-icons/fa";
import styles from "./Home.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { togglePostModal } from "../../features/currentUser/userSlice";
import { Feed } from "../../features";
import './Reel/src/App';
import { Routes, Route, Link } from "react-router-dom";

export function Home(): JSX.Element {
  const { currentUserImage } = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

 
  return (
    <Routes>
     <>
     <div className={styles.home}>
      <Header page="Home" />
      <div className={styles.tweetField}>
        <div className={styles.userAvatar}>
          <img src={currentUserImage} alt="" />
          <h1>Mowe</h1>
        </div>
        <Route>
        <Link to="./Reel/src/App">
        <div className={styles.userAvatar}> 
        <img src={currentUserImage} alt=""/> // THIS IS THE IMG WHERE USER CLICK AND REELS START PLAYING 
          <h1>Haewae</h1>
        </div>
        </Link>
        </Route>
        <div className={styles.userAvatar}>
          <img src={currentUserImage} alt="" />
          <h1>‎ ‎ ‎  Lveewe</h1>
        </div>
        <div className={styles.userAvatar}>
       <img src={currentUserImage} alt=""/>
          <h1>gy</h1>
        </div>
        <div>
          <div>
          </div>
        </div>
      </div>
      <Feed />
    </div>
   </>
   </Routes>
  );
}