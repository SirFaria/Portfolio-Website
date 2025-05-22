import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between">
        <div className="">
          <h3 className="text-white text-center font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-center text-[14px]">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] blue-text-gradient`}>
              • {tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects demonstrate my skills and experience in
          projects I have worked through my career. Each project is briefly
          described and has their techs below.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
