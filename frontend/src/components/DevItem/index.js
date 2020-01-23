import React from 'react';

import { Container } from './styles';

export default function DevItem({ dev }) {
  return (
    <Container>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/40578027?s=460&v=4"
          alt="Jose"
        />
        <div className="user-info">
          <strong>Flávio BS</strong>
          <span>ReactJS, Node.js, Laravel, Django</span>
        </div>
      </header>
      <p>flaviobzs tra lalalalalalaallaalla </p>
      <a href="https://github.com/flaviobzs">Acessar perfil no Github</a>
    </Container>

    // <Container>
    //   <header>
    //     <img
    //       src={dev.avatar_url}
    //       alt={dev.name}
    //     />
    //     <div className="user-info">
    //       <strong>{dev.name}</strong>
    //       <span>{dev.techs.join(', ')}</span>
    //     </div>
    //   </header>
    //   <p>{dev.bio}</p>
    //   <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    // </Container>
  );
}
