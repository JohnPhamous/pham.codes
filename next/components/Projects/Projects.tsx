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
          <a href={project.demo} target="_blank">
            {project.name}
          </a>
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
