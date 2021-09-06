import React from 'react';
import projects from '../../content/projects.content.json';
import styles from './Projects.module.css';
import Comment from '../Comment/Comment';
import List from '../List/List';

const Projects = () => {
  return (
    <List>
      {projects.map((project) => (
        <li className={styles.item} key={project.name}>
          {/*  eslint-disable-next-line react/jsx-no-target-blank */}
          <a href={project.demo} target="_blank">
            {project.name}
          </a>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <Comment>// {project.description}</Comment>
        </li>
      ))}
    </List>
  );
};

export default Projects;
