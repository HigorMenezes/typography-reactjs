import React from 'react';

import { TypographyInterface } from './types';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2
} from './styles';

const TypographyComponent: React.FC<TypographyInterface> = props =>
  (props.variant === 'h1' && <H1 {...props} />) ||
  (props.variant === 'h2' && <H2 {...props} />) ||
  (props.variant === 'h3' && <H3 {...props} />) ||
  (props.variant === 'h4' && <H4 {...props} />) ||
  (props.variant === 'h5' && <H5 {...props} />) ||
  (props.variant === 'h6' && <H6 {...props} />) ||
  (props.variant === 'subtitle1' && <Subtitle1 {...props} />) ||
  (props.variant === 'subtitle2' && <Subtitle2 {...props} />) ||
  (props.variant === 'body1' && <Body1 {...props} />) ||
  (props.variant === 'body2' && <Body2 {...props} />) || <H1 {...props} />;

export default TypographyComponent;
