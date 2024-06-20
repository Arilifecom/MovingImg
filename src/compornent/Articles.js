import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import aricle1 from "../../public/Images/article1.png";
import aricle2 from "../../public/Images/article2.png";
import aricle3 from "../../public/Images/article3.png";
import aricle4 from "../../public/Images/article4.png";
import aricle5 from "../../public/Images/article5.png";
import aricle6 from "../../public/Images/article6.png";
import aricle7 from "../../public/Images/article7.png";
import Link from "next/link";

const FramerImg = motion(Image);

const MobingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX - 300);
    y.set(10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline sm:text-lg">
        {title}
      </h2>
      <FramerImg
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0
    border border-solid border-dark border-r-4 border-b-4"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MobingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <>
      <ul>
        <Article
          title="The Art of Article Writing: Tips and Techniques"
          date="Jun 6, 2024"
          link="/"
          img={aricle1}
        />
        <Article
          title="Unlocking the Secrets of Effective Article Writing"
          date="Jun 6, 2024"
          link="/"
          img={aricle2}
        />
        <Article
          title="Mastering the Craft of Article Creation"
          date="Jun 6, 2024"
          link="/"
          img={aricle3}
        />
        <Article
          title="A Comprehensive Guide to Writing Engaging Articles"
          date="Jun 6, 2024"
          link="/"
          img={aricle4}
        />
        <Article
          title="The Power of Words: How to Write Compelling Articles"
          date="Jun 6, 2024"
          link="/"
          img={aricle5}
        />
        <Article
          title="Article Writing 101: From Concept to Publication"
          date="Jun 6, 2024"
          link="/"
          img={aricle6}
        />
        <Article
          title="Strategies for Writing Impactful Articles"
          date="Jun 6, 2024"
          link="/"
          img={aricle7}
        />
      </ul>
    </>
  );
};

export default Articles;
