import React from 'react';
import roles from '../../content/roles.content.json';
import { styled } from '../../styles/stitches.config';
import List from '../List/List';
import Comment from '../../components/Comment/Comment';

/**
 * Number of roles to show with full details.
 * Roles outside of this range will be truncated.
 */
const NUMBER_OF_ROLES_TO_SHOW = 5;

const Roles = () => {
  /**
   * Roles to show in full detail.
   */
  const fullDetailRoles = roles.slice(0, NUMBER_OF_ROLES_TO_SHOW);
  /**
   * The organizations for `fullDetailRoles`.
   * Some organizations are duplicated so we create a set to have only unique organizations.
   */
  const fullDetailRoleOrganizations = new Set(fullDetailRoles.map((role) => role.location));

  /**
   * Roles that will not be shown in full detail.
   * These roles should be the remaining subset from `fullDetailRoles`.
   */
  const truncatedRoles = roles.slice(NUMBER_OF_ROLES_TO_SHOW);
  /**
   * The organizations for `truncatedRoles`.
   * Some organizations are duplicated so we create a set to have only unique organizations.
   */
  const truncatedRoleOrganizations = Array.from(
    new Set(truncatedRoles.map((role) => role.location))
  );

  /**
   * Organizations can be in both `fullDetailRoles` and `truncatedRoles`.
   * We want to render organizations that have not been mentioned yet so we take the difference between the 2 sets.
   */
  const uniqueOrganizations = Array.from(
    new Set([...truncatedRoleOrganizations].filter((x) => !fullDetailRoleOrganizations.has(x)))
  ).sort();
  // @ts-expect-error
  const listFormatter = new Intl.ListFormat('en');

  return (
    <List>
      {fullDetailRoles.map((role) => (
        <Role old={role.class === 'old'} new={role.class === 'new'}>
          <Title>{role.role}</Title> at{' '}
          <Organization target="_blank" href={role.link}>
            {role.location}
          </Organization>
        </Role>
      ))}

      <Comment>
        // I've also done some stuff at {listFormatter.format(uniqueOrganizations)}.
      </Comment>
    </List>
  );
};

export default Roles;

const Role = styled('li', {
  variants: {
    new: {
      true: {
        '&::before': {
          content: '+',
          left: 'calc(-1 * $s8)',
          position: 'relative',
          marginLeft: 'calc(1ch * -1)',
          color: '$success',
        },
      },
    },
    old: {
      true: {
        color: '$comment !important',
        '&::before': {
          content: '-',
          left: 'calc(-1 * $s8)',
          position: 'relative',
          marginLeft: 'calc(1ch * -1)',
          color: '$alert',
        },

        '& a, & span': {
          color: '$comment !important',
        },
      },
    },
  },
});

const Title = styled('span', {
  color: '$secondaryAccent',
});

const Organization = styled('a', {
  color: '$link',
});
