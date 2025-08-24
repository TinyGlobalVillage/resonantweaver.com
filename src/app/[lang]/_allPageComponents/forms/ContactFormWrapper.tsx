import styled from "styled-components";
import { media } from "@/styles/breakpoints";

export const FormWrapper = styled.section`
display: flex;
flex-direction: column;
gap: 0.75rem;
padding: 1rem;

@media ${media.mobileL}{
margin-top: 20px;
}
@media ${media.tablet}{
padding: 1rem;
margin-top: 20px;
}

@media ${media.laptop}{
margin-top: 20px;
}
@media ${media.laptopL}{
margin-top: 20px;
}

@media ${media.fourK}{
margin-top: 100px;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: .75rem;

@media ${media.laptop}{
gap: .75rem;
}
`;

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: .75rem;

label {
font-size: 1rem;
margin-bottom: -10px;
font-weight: bold;
color: #b78a77;
text-align: left;

  @media ${media.mobileM}{
  font-size: 1.25rem;
  }
  @media ${media.mobileL}{
  font-size: 1.25rem;
  }
  @media ${media.tablet}{
  font-size: 1.25rem;
  margin-bottom: 0;
  }

  @media ${media.laptop}{
  font-size: 1.25rem;
}
  @media ${media.fourK}{
  margin-top: 20px;
  font-size: 2rem;
}

}

input,
select,
textarea {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  padding: 0.25rem 0.75rem;
  font-size: .95rem;
  line-height: .75;
  border-radius: 6px;
  border: 2px solid #b78a77;
background-color: #0a0f14;
color: #b78a77;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-weight: bold;
text-align: center;
min-width: 120px;
transition: transform 0.2s ease, box-shadow 0.2s ease;

@media ${media.mobileL}{
padding: .5rem 1rem;
font-size: 1.25rem;
}
@media ${media.tablet}{
font-size: 1.25rem;
}

@media ${media.laptop}{
font-size: 1.25rem;
}
@media ${media.laptopL}{
font-size: 1.25rem;
}

}

textarea {
resize: vertical;
min-height:6rem;
}

@media ${media.tablet}{
gap: .75rem;
}
@media ${media.laptop}{
gap: 1rem;
}
`;

export const Button = styled.button`
align-self: center;
padding: 0.75rem 1.5rem;
background-color: #0a0f14;
color: #b78a77;
border-radius: 50px;
border: 2px solid #b78a77;
cursor: pointer;
text-decoration: none;
font-size: 1rem;
font-weight: bold;
font-family: 'Roboto', sans-serif;
text-align: center;
min-width: 120px;
transition: transform 0.2s ease, box-shadow 0.2s ease;

&:hover,
  &:focus {
    background: radial-gradient(circle, rgba(18, 53, 36, 1) 0%, rgba(10, 20, 17, 1) 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.35);
  }

&:disabled {
opacity: 0.6;
cursor: default;
}

@media ${media.mobileL}{
margin-bottom: 15px;
padding: .75rem 2rem;
font-size: 1rem;
}
@media ${media.tablet}{
margin-bottom: 13px;
margin-top: 20px;
padding: 1rem 2rem;
font-size: 1.25rem;
}
@media ${media.laptop}{
padding: 1rem 2.5rem;
font-size: 1rem;
margin-bottom: 0px;
}
`;

export const Status = styled.p<{ variant: 'success' | 'error' }>`
margin-top: 1rem;
text-align: center;
font-size: 1rem;
color: ${({ variant }) =>
    variant === 'success' ? '#4caf50' : '#f44336'};
`;
