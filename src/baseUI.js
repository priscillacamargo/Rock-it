//**********************************//
//**********************************//
//   Customizing Base WEB theme     //
//**********************************//
//**********************************//

import { createTheme, lightThemePrimitives } from 'baseui';

const primitives = {
  ...lightThemePrimitives,
  accent: 'rgba(255,233,0)', // rockstars yellow
  accent100: 'rgba(255,233,0.8)', // rockstars yellow with opaccity
  contentInverseSecondary: 'rgba(35,35,35,0)'
};

const overrides = {
  colors: {
    buttonPrimaryFill: primitives.primaryA,
    buttonPrimaryText: primitives.primaryB,
    buttonPrimaryHover: primitives.primaryA100,
    buttonPrimaryActive: primitives.primaryA,
    buttonPrimarySelectedFill: primitives.primaryA200,
    buttonPrimarySpinnerForeground: primitives.primaryA700,
    buttonParimarySpinnerBackground: primitives.prymaryA300,
    buttonSecondaryFill: primitives.accent,
    buttonSecondaryText: primitives.primaryA,
    buttonSecondaryHover: primitives.accent100,
    buttonSecondaryActive: primitives.accent,
    buttonSecondarySelectedFill: primitives.accent,
    buttonSecondarySpinnerForeground: primitives.accent,
    buttonSecondarySpinnerBackground: primitives.accent
  }
};

export const theme = createTheme(lightThemePrimitives, overrides);
