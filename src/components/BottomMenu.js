import React from "react";
import styles from "../style/BottomMenu.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faMusic, faPhotoVideo, faUser } from "@fortawesome/free-solid-svg-icons";

const BottomMenu = ({ routeName }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerFlex}>
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

export default BottomMenu;