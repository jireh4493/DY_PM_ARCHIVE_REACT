import React, { useEffect, useState } from "react";
import styles from "../style/BottomFloatingMenu.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faMusic, faPhotoVideo, faUser } from "@fortawesome/free-solid-svg-icons";

const BottomFloatingMenu = ({ routeName }) => {
  let [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  var bottomMenuWidth = width - 94;
  const [isShow, setIsShow] = useState(true);
  console.log(isShow);
  setTimeout(
    function () {
      if (isShow === true) {
        setIsShow(false);
      }
    }, 3000
  )
  const showItWorks = () => {
    isShow ? console.log("Show") : console.log("No,,");
  };
  showItWorks();

  return (
    <>
    <div className={styles.hidden}>
      ddfdf
    </div>
      <div className={ !isShow ? `${styles.hidden}` : `${styles}`}>
        <div className={styles.container} style={{ width: bottomMenuWidth }}>
          <Link to="/" className={styles.menuContainer} style={(routeName === "PM") ? { opacity: "100%" } : { opacity: "50%" }}>
            <FontAwesomeIcon icon={faCommentDots} size="2xl" />
            <span>PM</span>
          </Link>
          <Link to="/Music" className={styles.menuContainer} style={(routeName === "Music") ? { opacity: "100%" } : { opacity: "50%" }}>
            <FontAwesomeIcon icon={faMusic} size="2xl" />
            <span>Music</span>
          </Link><Link to="/Media" className={styles.menuContainer} style={(routeName === "Media") ? { opacity: "100%" } : { opacity: "50%" }}>
            <FontAwesomeIcon icon={faPhotoVideo} size="2xl" />
            <span>Media</span>
          </Link><Link to="/Profile" className={styles.menuContainer} style={(routeName === "Profile") ? { opacity: "100%" } : { opacity: "50%" }}>
            <FontAwesomeIcon icon={faUser} size="2xl" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BottomFloatingMenu;