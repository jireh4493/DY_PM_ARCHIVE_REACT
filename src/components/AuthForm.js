import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { authService } from "../fbase";
import styles from "../style/AuthForm.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import easterEgg from "../assets/Images/IMG_2926.jpg"

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    let data;
    try {
      if (!newAccount) {
        data = await createUserWithEmailAndPassword(authService, email, password);
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  }
  const onKeyPress = async (event) => {
    if (event.key === "Enter") {
      let data;
      try {
        if (!newAccount) {
          data = await createUserWithEmailAndPassword(authService, email, password);
        } else {
          data = await signInWithEmailAndPassword(authService, email, password);
        }
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.log(error)
      }
    }
  }
  if (error === "Firebase: Error (auth/invalid-email).") {
    setError("Invalid Email");
  }
  if (error === "Firebase: Error (auth/email-already-in-use).") {
    setError("This email already in use");
  }
  if (error === "Firebase: Error (auth/missing-password).") {
    setError("Empty Password");
  }
  if (error === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
    setError("Password should be at least 6 characters")
  }
  if (error === "Firebase: Error (auth/wrong-password).") {
    setError("Wrong Password");
  }
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const { target: { name } } = event;
    let provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }

    await signInWithPopup(authService, provider);
  }
  let [height, setHeight] = useState(window.innerHeight);
  const handleResize = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  height = (height - 340) / 2;

  return (
    <>
      <div style={{ marginTop: height }}>
        <div className={styles.DYTitleContainer}>
          <div className={styles.DYTitle1} >Dayeon🐿️</div>
          <div className={styles.DYTitle2} >PM Archive</div>
        </div>
        <div className={styles.container} >
          <div className={styles.authFormContainer}>
            <span className={styles.authFormTitleMain}>{newAccount ? "Login" : "Sign In"}</span>
            <span>&nbsp;</span>
            <span className={styles.authFormTitleSub} onClick={toggleAccount}>{!newAccount ? "Login" : "Sign In"}</span>
          </div>
          <form className={styles.authFormInputContainer} onSubmit={onSubmit} >
            <input name="email" type="text" placeholder="Email" onChange={onChange} required value={email} className={styles.authFormInput} />
            <input name="password" type="password" placeholder="Password" onChange={onChange} required value={password} onKeyPress={onKeyPress} className={styles.authFormInput} />
          </form>
          <div className={styles.authFormSubmitContainer}>
            <button name="google" onClick={onSocialClick} className={styles.authFormSubmit} >Continue with <FontAwesomeIcon icon={faGoogle} /></button>
            <input type="submit" value={newAccount ? "Login!" : "Sign In!"} className={styles.authFormSubmit} onClick={onSubmit} />
          </div>
          <div className={styles.authFormError}>
            {error && <span >{error}</span>}
          </div>
        </div>
      </div>
      <div className={styles.scrollDownContainer}>
        <div className={styles.scrollDownArrow}>
          <FontAwesomeIcon icon={faArrowDown} bounce />
        </div>
        <div className={styles.scrollDownText}>
          Scroll Down
        </div>
      </div>

      <footer>
        <img src={easterEgg} alt="pic" className={styles.easterEggPhoto} />
        <div style={{ marginBottom: "50px" }}>My Tiny Squirrel🐿️</div>
        <div>
          <span>Designed & Developed by </span><span className={styles.highlight}>CoLoR</span>
        </div>
        <div>
          (Contact: Twitter&nbsp;<a href="https://twitter.com/Dye0n0302" rel="noreferrer" target="_blank">@Dye0n0302</a>)
        </div>
      </footer>
    </>
  )
}

export default AuthForm;
