import PostModel from "components/PostModel";
import backgroundPicture from "assets/sobre_mim_capa.png";
import myPicture from "assets/sobre_mim_foto.jpg";

import styles from "./About.module.css";

const ABOUT_CONTENT = {
  title: "About me",
  subtitle: "Hello, I am João Pedro",
  paragraphs: [
    "I am currently an intern developer at Embraer, mainly focused on front-end. On a daily basis, I work with JavaScript and TypeScript, using the Next.js framework and Tailwind CSS to build modern, responsive, and efficient interfaces. I believe a good interface doesn't need to be complex, but clear, functional, and well thought out for the user.",
    
    "Besides the visual part, I also get involved with some back-end tasks. I have experience working with databases like MySQL and services such as Firebase, both for authentication and data storage. This helps me have a more complete view of applications and better understand the communication between different layers of the stack.",
    
    "I really enjoy front-end because it's where I see the most direct results of my work. It's rewarding to see a feature working in practice just as planned. At the same time, I know that behind a simple screen there can be a lot of logic involved, so I always try to understand the full context before I start coding.",
    
    "I have the habit of learning on my own. I read a lot of documentation, follow community content, and like to test new tools in side projects. I try to keep a steady learning pace, even outside work, because technology changes fast and I think it's important to stay up to date.",
    
    "My current focus is to keep improving both technically and professionally. I want to become a more complete developer with a solid front-end foundation, without losing sight of the bigger picture. I enjoy working in teams, exchanging ideas with other devs, and contributing to meaningful projects. I'm still early in my career but always trying to take one step further."
  ]
};

export default function About() {
  return (
    <main>
      <PostModel fotoCapa={backgroundPicture} titulo={ABOUT_CONTENT.title}>
        <h3 className={styles.subtitulo}>{ABOUT_CONTENT.subtitle}</h3>
        <img src={myPicture} alt="João Pedro" className={styles.fotoSobreMim} />
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragrafo}>
            {paragraph}
          </p>
        ))}
      </PostModel>
    </main>
  );
}
