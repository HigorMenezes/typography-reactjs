export interface TypographyThemeInterface {
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  display?: string;
  color?: string;
}

export interface TypographyInterface {
  children: string;
  theme?: TypographyThemeInterface;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2';
}
