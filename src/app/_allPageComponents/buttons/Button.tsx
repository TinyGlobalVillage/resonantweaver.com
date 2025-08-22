'use client';
import styled from 'styled-components';

const Button = styled.a.attrs(props => ({
  href: props.href,
}))`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: 2px solid #b78a77;
  text-decoration: none;
  background-color: #0a0f14;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: center;
  min-width: 120px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus {
    background: radial-gradient(circle, rgba(18, 53, 36, 1) 0%, rgba(10, 20, 17, 1) 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.35);
  }
`;

export default Button;
