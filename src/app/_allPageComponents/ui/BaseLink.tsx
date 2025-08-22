// components/ui/BaseLink.tsx
import styled from 'styled-components';

const BaseLink = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  font-family: 'Roboto', sans-serif;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 5px;
      background-color: #b78a77;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0px 0px 70px 25px rgba(26, 44, 84,0.45);
    }

    &::before {
      top: -2px;
    }

    &::after {
      bottom: -5px;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
    }

    &:hover::before {
      animation: bounceUp 0.8s ease-in-out infinite alternate;
    }

    &:hover::after {
      animation: bounceDown 0.8s ease-in-out infinite alternate;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
      text-decoration-thickness: 1.5px;
      text-decoration-color: #b78a77;
      color: #e8e5da;
    }
  }

  @keyframes bounceUp {
    from {
      transform: translateX(-50%) translateY(0);
    }
    to {
      transform: translateX(-50%) translateY(-4px);
    }
  }

  @keyframes bounceDown {
    from {
      transform: translateX(-50%) translateY(0);
    }
    to {
      transform: translateX(-50%) translateY(4px);
    }
  }
`;

export default BaseLink;