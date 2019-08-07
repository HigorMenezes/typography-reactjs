import styled from 'styled-components';

import { TypographyInterface, TypographyThemeInterface } from './types';

const H1DefaultTheme: TypographyThemeInterface = {
  fontWeight: 300,
  fontSize: 6,
  lineHeight: 1,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const H1 = styled.h1`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || H1DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || H1DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || H1DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    H1DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || H1DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || H1DefaultTheme.color};
`;

const H2DefaultTheme: TypographyThemeInterface = {
  fontWeight: 300,
  fontSize: 3.75,
  lineHeight: 1.04,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const H2 = styled.h2`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || H2DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || H2DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || H2DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    H2DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || H2DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || H2DefaultTheme.color};
`;

const H3DefaultTheme: TypographyThemeInterface = {
  fontWeight: 400,
  fontSize: 3,
  lineHeight: 1.04,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const H3 = styled.h3`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || H3DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || H3DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || H3DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    H3DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || H3DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || H3DefaultTheme.color};
`;

const H4DefaultTheme: TypographyThemeInterface = {
  fontWeight: 400,
  fontSize: 2.125,
  lineHeight: 1.17,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const H4 = styled.h4`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || H4DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || H4DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || H4DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    H4DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || H4DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || H4DefaultTheme.color};
`;

const H5DefaultTheme: TypographyThemeInterface = {
  fontWeight: 400,
  fontSize: 1.5,
  lineHeight: 1.33,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const H5 = styled.h5`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || H5DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || H5DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || H5DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    H5DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || H5DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || H5DefaultTheme.color};
`;

const H6DefaultTheme: TypographyThemeInterface = {
  fontWeight: 500,
  fontSize: 1.25,
  lineHeight: 1.6,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const H6 = styled.h6`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || H6DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || H6DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || H6DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    H6DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || H6DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || H6DefaultTheme.color};
`;

const Subtitle1DefaultTheme: TypographyThemeInterface = {
  fontWeight: 400,
  fontSize: 1,
  lineHeight: 1.75,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const Subtitle1 = styled.h6`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) ||
    Subtitle1DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || Subtitle1DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) ||
    Subtitle1DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    Subtitle1DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || Subtitle1DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || Subtitle1DefaultTheme.color};
`;

const Subtitle2DefaultTheme: TypographyThemeInterface = {
  fontWeight: 500,
  fontSize: 0.875,
  lineHeight: 1.57,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const Subtitle2 = styled.h6`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) ||
    Subtitle2DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || Subtitle2DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) ||
    Subtitle2DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    Subtitle2DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || Subtitle2DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || Subtitle2DefaultTheme.color};
`;

const Body1DefaultTheme: TypographyThemeInterface = {
  fontWeight: 400,
  fontSize: 1,
  lineHeight: 1.5,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const Body1 = styled.p`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || Body1DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || Body1DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || Body1DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    Body1DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || Body1DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || Body1DefaultTheme.color};
`;

const Body2DefaultTheme: TypographyThemeInterface = {
  fontWeight: 400,
  fontSize: 0.875,
  lineHeight: 1.43,
  letterSpacing: 0,
  display: 'block',
  color: 'black'
};

export const Body2 = styled.p`
  font-weight: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontWeight) || Body2DefaultTheme.fontWeight};
  font-size: ${(props: TypographyInterface) =>
    (props.theme && props.theme.fontSize) || Body2DefaultTheme.fontSize}rem;
  line-height: ${(props: TypographyInterface) =>
    (props.theme && props.theme.lineHeight) || Body2DefaultTheme.lineHeight};
  letter-spacing: ${(props: TypographyInterface) =>
    (props.theme && props.theme.letterSpacing) ||
    Body2DefaultTheme.letterSpacing}rem;
  display: ${(props: TypographyInterface) =>
    (props.theme && props.theme.display) || Body2DefaultTheme.display};
  color: ${(props: TypographyInterface) =>
    (props.theme && props.theme.color) || Body2DefaultTheme.color};
`;
