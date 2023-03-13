import styled from 'styled-components';

export const Paragraf = styled.p`
  animation-name: myAnimation;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes myAnimation {
    0% {
      color: red;
    }
    50% {
      color: yellow;
    }
    100% {
      color: green;
    }
  } ;
`;
