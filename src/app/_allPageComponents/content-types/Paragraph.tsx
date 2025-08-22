'use client';

import styled from 'styled-components';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const StyledParagraph = styled.p`
  margin-bottom: 0.2rem;
`;

export default function Paragraph({
  children,
  ...rest
}: ParagraphProps) {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
}
