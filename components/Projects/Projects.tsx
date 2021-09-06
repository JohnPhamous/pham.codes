import React from 'react';
import projects from '../../content/projects.content.json';
import { styled } from '../../styles/stitches.config';
import Comment from '../Comment/Comment';
import List from '../List/List';

const Projects = () => {
  return (
    <List>
      {projects.map((project) => (
        <Item key={project.name}>
          {/*  eslint-disable-next-line react/jsx-no-target-blank */}
          <a href={project.demo} target="_blank">
            {project.name}
          </a>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <Comment>// {project.description}</Comment>
        </Item>
      ))}
    </List>
  );
};

export default Projects;

const Item = styled('li', {
  display: 'flex',
  flexDirection: 'column',

  '& > p': {
    margin: 0,
    marginTop: '$s8',
  },
});
