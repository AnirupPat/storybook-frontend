import React from "react";
import author1 from "../../utils/images/author1.jpeg";
import thumbnail from "../../utils/images/thumbnail1.png";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { stories } from "../../utils/data/stories";
import { authors } from "../../utils/data/authors";
import styles from "./StoryCard.module.scss";

const StoryCard = ({ story }) => {
  console.log(story);
  return (
    <div className={styles.storyCard}>
      <header className={styles.header}>
        <img src={story.pic} alt="author img"></img>
        <span>{story.name}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.date}>{story.story.postedDate}</span>
      </header>
      <div className={styles.body}>
        <div className={styles.content}>
          <h2>{story.story.title}</h2>
          <div className={styles.text}>{story.story.desc}</div>
        </div>
        <div className={styles.thumbnail}>
          <img src={story.story.thumbnail} alt="thumbnail image"></img>
        </div>
      </div>
      <div className={styles.footer}>
        <ButtonUnstyled className={styles.button}>
          {story.story.tag}
        </ButtonUnstyled>
        <span className={styles.pointers}>{story.story.timeToRead}</span>
        <span className={styles.dot}>·</span>
        <span className={styles.pointers}>Selected for you</span>
      </div>
    </div>
  );
};

export default StoryCard;
