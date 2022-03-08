import React from "react";
import author1 from "../../utils/images/author1.jpeg";
import thumbnail from "../../utils/images/thumbnail1.png";
import styles from "./StoryCard.module.scss";

const StoryCard = () => {
  return (
    <div className={styles.storyCard}>
      <header className={styles.header}>
        <img src={author1} alt="Girl in a jacket"></img>
        <span>Anirup Patnaik</span>
        <span className={styles.dot}>·</span>
        <span className={styles.date}>Mar 01</span>
      </header>
      <div className={styles.body}>
        <div className={styles.content}>
          <h2>7 Killer One-Liners in JavaScript</h2>
          <div className={styles.text}>
            JavaScript is the most crucial pillar of Web Development. This
            article contains code snippets hand-picked by sterilized
            contamination-free gloves and placed onto a satin pillow. A team of
            50 inspected the code and ensured
          </div>
        </div>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt="thumbnail image"></img>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;