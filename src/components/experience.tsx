"use client"
import styles from "../../styles/experience.module.css";
import config from "../config";
import {useEffect} from "react";

export default function Experience() {
    useEffect(()=>{
        const radioButton = document.getElementById(`exp0`);
        radioButton.checked = true;
    },[])
  return (
    <div>
      <h1>Experience</h1>
      <hr />
      <div className={styles.tabs}>
        {config.experiences.map((items, i: number) => (
          <>
            <input
              type="radio"
              className={styles.tabs_radio}
              name="experience"
              id={`exp${i}`}
            />
            <label htmlFor={`exp${i}`} className={styles.tabs_label}>
              {items.companyName}
            </label>
            <div className={styles.tabs_content}>
              <div>
                <span>
                  <h2> {items.companyName}</h2>
                  <h3>{items.position}</h3>
                </span>
                <p>{items.timeDuration}</p>
              </div>
              <div>
                {items.description.map((item, j: number) => (
                  <p key={j}>{item}</p>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
