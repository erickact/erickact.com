import React from "react";
import clsx from "clsx";
import { Linkedin, Github, FileText, Code } from "lucide-react";

const SocialNetwork = (props: React.HTMLProps<HTMLDivElement>) => {
  const { className } = props;
  return (
    <div className={clsx("flex gap-4", className)}>
      <a
        className="flex gap-1"
        title="Ericka's Linkedin"
        href="https://www.linkedin.com/in/erickact/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin /> Linkedin
      </a>

      <a
        className="flex gap-1"
        title="Ericka's Github"
        href="https://github.com/erickact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github /> Github
      </a>
      <a
        className="flex gap-1"
        title="Ericka's Resume"
        href="https://bit.ly/erickact-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FileText /> Resume
      </a>
      <a
        className="flex gap-1"
        title="Ericka's Codewars"
        href="https://www.codewars.com/users/erickact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Code /> Codewars
      </a>
    </div>
  );
};

export default SocialNetwork;
