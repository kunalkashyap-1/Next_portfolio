"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Image from "next/image";
import rightArrow from "../icons/right-chevron.png";
import styles from "../../styles/experience.module.css";
import config from "../config";

export default function Experience() {
  const [value, setValue] = useState(0); // We'll use an index for the selected tab

  const handleChange: any = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="experience">
      <h1 id="experience" className="title-heading">
        Experience
      </h1>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        visibleScrollbar={true}
        TabIndicatorProps={{ style: { backgroundColor: "#009578" } }}
        textColor="inherit"
        sx={{
          "& .MuiTab-root": {
            // color: '#009578',
            fontWeight: "bold",
            fontSize: "1.2em",
            textTransform: "none",
            textAlign: "center",
          },
          "& .Mui-selected": {
            color: "#009578",
          },
          "@media (max-width:600px": {
            "& .MuiTab-root": {
              fontSize: "1em",
            },
          },
        }}
        style={{
          scrollbarWidth: "thin",
        }}
      >
        {config.experiences.map((items, i) => (
          <Tab key={i} label={items.companyName} id={`exp${i}`} className="" />
        ))}
      </Tabs>

      {config.experiences.map((items, i) => (
        <TabPanel
          key={i}
          value={value}
          index={i}
          styles={styles}
          experience={items}
        />
      ))}
    </div>
  );
}

function TabPanel({ value, index, styles, experience }: any) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experience-tabpanel-${index}`}
      aria-labelledby={`experience-tab-${index}`}
      style={{ margin: "10px", padding: "10px" }}
    >
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration={800}
        className=""
      >
        <div>
          <h2 className="font-bold text-2xl text-slate-100">
            {experience.companyName}
          </h2>
          <span className="flex justify-between pr-4">
            <h3 className="italic text-xl">{experience.position}</h3>
            <p>{experience.timeDuration}</p>
          </span>
        </div>
        <div>
          {experience.description.map((item: any, j: any) => (
            <div key={j} className="flex p-2">
              <Image
                style={{
                  height: "20px",
                  marginTop: "4px",
                }}
                src={rightArrow}
                alt="arrow-icon"
                width={20}
                height={2}
              />
              <p className="text-xl">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
