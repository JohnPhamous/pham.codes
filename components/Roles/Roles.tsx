import React from 'react';
import roles from '../../content/roles.content.json';
import List from '../List/List';
import Comment from '../../components/Comment/Comment';
import styles from './Roles.module.css';

/**
 * Number of roles to show with full details.
 * Roles outside of this range will be truncated.
 */
const NUMBER_OF_ROLES_TO_SHOW = 6;

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
    <>
      <List>
        {fullDetailRoles.map((role) => (
          <li
            key={`${role.role}-${role.location}`}
            className={`${role.class === 'old' ? styles.old : ''} ${
              role.class === 'new' ? styles.new : ''
            }`}
          >
            <span className={styles.title}>{role.role}</span> at{' '}
            <a
              className={styles.organization}
              target="_blank"
              href={role.link}
              rel="noopener noreferrer"
            >
              {role.location}
            </a>
          </li>
        ))}
      </List>
      {/*  eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <Comment>
        // I&apos;ve also done some stuff at {listFormatter.format(uniqueOrganizations)}.
      </Comment>
    </>
  );
};

export default Roles;
