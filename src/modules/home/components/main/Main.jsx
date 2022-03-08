import React, { Fragment } from "react";
import { stories } from "../../../../utils/data/stories";
import { authors } from "../../../../utils/data/authors";
import StoryCard from "../../../../components/storyCard/StoryCard";
import styles from "./Main.module.scss";

const Main = () => {
  let postData = stories.map((story) => {
    let authorData = authors.filter((author) => author.id === story.authorId);
    return { story, ...authorData[0] };
  });

  let storyLists = postData.map((story) => {
    return <StoryCard story={story} />;
  });
  return <div className={styles.main}>{storyLists}</div>;
};

export default Main;
