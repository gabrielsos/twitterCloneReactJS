import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Gabriel Silva</h1>
        <h2>@bielsos99</h2>

        <p>Bem-vindo!</p>

        <ul>
          <li>
            <LocationIcon />
            Santos/SP - Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de fevereiro de 1999
          </li>
        </ul>
        <Followage>
          <span>
            seguindo
            <strong> 250</strong>
          </span>
          <span>
            <strong>250 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
