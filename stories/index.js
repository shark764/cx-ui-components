import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CaretIconSVG from '../src/components/SVGs/CaretIconSVG';

storiesOf('CaretIconSVG', module)
  .add('up', () => (
    <CaretIconSVG direction="up" />
  ))
  .add('down', () => (
    <CaretIconSVG direction="down" />
  ))
  .add('right', () => (
    <CaretIconSVG direction="right" />
  ))
  .add('left', () => (
    <CaretIconSVG direction="left" />
  ))
  .add('up with custom size', () => (
    <CaretIconSVG direction="up" size={25} />
  ))
