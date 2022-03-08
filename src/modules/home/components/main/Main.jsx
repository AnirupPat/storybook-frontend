import React, { Fragment } from "react";
import StoryCard from "../../../../components/storyCard/StoryCard";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <StoryCard />
      <StoryCard />
    </div>
  );
};

export default Main;
