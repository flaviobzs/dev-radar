import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function DevItem({ dev }) {
  return (
    <Container>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`} target="_blank">
        Acessar perfil no Github
      </a>
    </Container>
  );
}

DevItem.propTypes = {
  dev: PropTypes.element.isRequired,
};
