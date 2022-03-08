import React, { Fragment, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { stories } from "../../../../utils/data/stories";
import { authors } from "../../../../utils/data/authors";
import StoryCard from "../../../../components/storyCard/StoryCard";
import styles from "./Main.module.scss";

const Main = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let postData = stories.map((story) => {
    let authorData = authors.filter((author) => author.id === story.authorId);
    return { story, ...authorData[0] };
  });

  let storyLists = postData.map((story) => {
    return <StoryCard story={story} />;
  });
  return (
    <div className={styles.main}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Following" value="1" />
            <Tab label="Recommended" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">{storyLists[0]}</TabPanel>
        <TabPanel value="2">{storyLists}</TabPanel>
      </TabContext>
    </div>
  );
};

export default Main;
