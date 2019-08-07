import styled from 'styled-components';

import { TypographyInterface } from './types';

export const H1 = styled.h1`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

H1.defaultProps = {
  theme: {
    fontWeight: 300,
    fontSize: 6,
    lineHeight: 1,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const H2 = styled.h2`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

H2.defaultProps = {
  theme: {
    fontWeight: 300,
    fontSize: 3.75,
    lineHeight: 1.04,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const H3 = styled.h3`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

H3.defaultProps = {
  theme: {
    fontWeight: 400,
    fontSize: 3,
    lineHeight: 1.04,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const H4 = styled.h4`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

H4.defaultProps = {
  theme: {
    fontWeight: 400,
    fontSize: 2.125,
    lineHeight: 1.17,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const H5 = styled.h5`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

H5.defaultProps = {
  theme: {
    fontWeight: 400,
    fontSize: 1.5,
    lineHeight: 1.33,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const H6 = styled.h6`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

H6.defaultProps = {
  theme: {
    fontWeight: 500,
    fontSize: 1.25,
    lineHeight: 1.6,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const Subtitle1 = styled.h6`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

Subtitle1.defaultProps = {
  theme: {
    fontWeight: 400,
    fontSize: 1,
    lineHeight: 1.75,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const Subtitle2 = styled.h6`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

Subtitle2.defaultProps = {
  theme: {
    fontWeight: 500,
    fontSize: 0.875,
    lineHeight: 1.57,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const Body1 = styled.p`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

Body1.defaultProps = {
  theme: {
    fontWeight: 400,
    fontSize: 1,
    lineHeight: 1.5,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};

export const Body2 = styled.p`
  font-weight: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    props.theme && props.theme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    props.theme && props.theme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    props.theme && props.theme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    props.theme && props.theme.display};
  color: ${(props: TypographyInterface) => props.theme && props.theme.color};
`;

Body2.defaultProps = {
  theme: {
    fontWeight: 400,
    fontSize: 0.875,
    lineHeight: 1.43,
    letterSpacing: 0,
    display: 'block',
    color: 'black'
  }
};
