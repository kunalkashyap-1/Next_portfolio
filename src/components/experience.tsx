"use client"
import styles from "../../styles/experience.module.css";
import config from "../config";
import {useEffect} from "react";
import Image from "next/image";
import rightArrow from "../icons/right-chevron.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {
  const prefersReducedMotion = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  };
    useEffect(()=>{
        const radioButton = document.getElementById(`exp0`) as HTMLInputElement;
        if(radioButton){
        radioButton.checked = true;
        }

        AOS.init({
          // Only enable AOS animations if prefers-reduced-motion is false
          disable: prefersReducedMotion(),
          once: true, // Animations will be triggered only once
        });
    },[])
  return (
    <div 
    data-aos={prefersReducedMotion() ? undefined : 'fade-up'}
    data-aos-duration="1000"
    className="experience">
      <h1 id="experience" className="title-heading">Experience</h1>
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
            <div 
            data-aos={prefersReducedMotion() ? undefined : 'fade-left'}
            data-aos-delay="100"
            className={styles.tabs_content}>
              <div>
                  <h2 className={styles.tabs_title}> {items.companyName}</h2>
                <span className="flex justify-between pr-4">
                  <h3 className={styles.tabs_highlights}>{items.position}</h3>
                <p>{items.timeDuration}</p>
                </span>

              </div>
              <div>
                {items.description.map((item, j: number) => (
                  <div key={j} className="flex p-2">
                  <Image 
                  style={{
                    height:"20px",

                  }}
                  src={rightArrow}
                  alt="arrow-icon"
                  width={20}
                  height={2}
                  />
                  <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
