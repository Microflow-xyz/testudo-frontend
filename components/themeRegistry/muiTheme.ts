import { PaletteMode } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  PaletteOptions,
} from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';

import { PlusJakarta } from '@/font';

import tailwindConfigModule from '../../tailwind.config';

export interface TailwindColors {
  [p: string]: {
    DEFAULT: string;
    light: string;
    dark: string;
  };
}

interface CustomPaletteOptions extends PaletteOptions {
  outline?: { main: string };
}

const tailwindConfig = resolveConfig(tailwindConfigModule);
const themeColors = tailwindConfig?.theme?.colors as TailwindColors;

export const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: { main: themeColors?.primary?.light },
  onPrimary: { main: themeColors?.onPrimary?.light },
  primaryContainer: { main: themeColors?.primaryContainer?.light },
  onPrimaryContainer: { main: themeColors?.onPrimaryContainer?.light },
  primaryFixed: { main: themeColors?.primaryFixed?.light },
  onPrimaryFixed: { main: themeColors?.onPrimaryFixed?.light },
  primaryFixedDim: { main: themeColors?.primaryFixedDim?.light },
  onPrimaryFixedVariant: {
    main: themeColors?.onPrimaryFixedVariant?.light,
  },

  secondary: { main: themeColors?.secondary?.light },
  onSecondary: { main: themeColors?.onSecondary?.light },
  secondaryContainer: { main: themeColors?.secondaryContainer?.light },
  onSecondaryContainer: {
    main: themeColors?.onSecondaryContainer?.light,
  },
  secondaryFixed: { main: themeColors?.secondaryFixed?.light },
  onSecondaryFixed: { main: themeColors?.onSecondaryFixed?.light },
  secondaryFixedDim: { main: themeColors?.secondaryFixedDim?.light },
  onSecondaryFixedVariant: {
    main: themeColors?.onSecondaryFixedVariant?.light,
  },

  tertiary: { main: themeColors?.tertiary?.light },
  onTertiary: { main: themeColors?.onTertiary?.light },
  tertiaryContainer: { main: themeColors?.tertiaryContainer?.light },
  onTertiaryContainer: { main: themeColors?.onTertiaryContainer?.light },
  tertiaryFixed: { main: themeColors?.tertiaryFixed?.light },
  onTertiaryFixed: { main: themeColors?.onTertiaryFixed?.light },
  tertiaryFixedDim: { main: themeColors?.tertiaryFixedDim?.light },
  onTertiaryFixedVariant: {
    main: themeColors?.onTertiaryFixedVariant?.light,
  },

  error: { main: themeColors?.error?.light },
  onError: { main: themeColors?.onError?.light },
  errorContainer: { main: themeColors?.errorContainer?.light },
  onErrorContainer: { main: themeColors?.onErrorContainer?.light },

  surface: { main: themeColors?.surface?.light },
  onSurface: { main: themeColors?.onSurface?.light },
  surfaceVariant: { main: themeColors?.surfaceVariant?.light },
  onSurfaceVariant: { main: themeColors?.onSurfaceVariant?.light },
  inverseSurface: { main: themeColors?.inverseSurface?.light },
  inverseOnSurface: { main: themeColors?.inverseOnSurface?.light },

  surfaceContainerHighest: {
    main: themeColors?.surfaceContainerHighest?.light,
  },
  surfaceContainerHigh: { main: themeColors?.surfaceContainerHigh?.light },
  surfaceContainer: { main: themeColors?.surfaceContainer?.light },
  surfaceContainerLow: { main: themeColors?.surfaceContainerLow?.light },
  surfaceContainerLowest: { main: themeColors?.surfaceContainerLowest?.light },
  surfaceBright: { main: themeColors?.surfaceBright?.light },
  surfaceDim: { main: themeColors?.surfaceDim?.light },
  shadow: { main: themeColors?.shadow?.light },
};

export const darkPalette: CustomPaletteOptions = {
  mode: 'dark',
  primary: { main: themeColors?.primary?.dark },
  onPrimary: { main: themeColors?.onPrimary?.dark },
  primaryContainer: { main: themeColors?.primaryContainer?.dark },
  onPrimaryContainer: { main: themeColors?.onPrimaryContainer?.dark },
  primaryFixed: { main: themeColors?.primaryFixed?.dark },
  onPrimaryFixed: { main: themeColors?.onPrimaryFixed?.dark },
  primaryFixedDim: { main: themeColors?.primaryFixedDim?.dark },
  onPrimaryFixedVariant: {
    main: themeColors?.onPrimaryFixedVariant?.dark,
  },

  secondary: { main: themeColors?.secondary?.dark },
  onSecondary: { main: themeColors?.onSecondary?.dark },
  secondaryContainer: { main: themeColors?.secondaryContainer?.dark },
  onSecondaryContainer: {
    main: themeColors?.onSecondaryContainer?.dark,
  },
  secondaryFixed: { main: themeColors?.secondaryFixed?.dark },
  onSecondaryFixed: { main: themeColors?.onSecondaryFixed?.dark },
  secondaryFixedDim: { main: themeColors?.secondaryFixedDim?.dark },
  onSecondaryFixedVariant: {
    main: themeColors?.onSecondaryFixedVariant?.dark,
  },

  tertiary: { main: themeColors?.tertiary?.dark },
  onTertiary: { main: themeColors?.onTertiary?.dark },
  tertiaryContainer: { main: themeColors?.tertiaryContainer?.dark },
  onTertiaryContainer: { main: themeColors?.onTertiaryContainer?.dark },
  tertiaryFixed: { main: themeColors?.tertiaryFixed?.dark },
  onTertiaryFixed: { main: themeColors?.onTertiaryFixed?.dark },
  tertiaryFixedDim: { main: themeColors?.tertiaryFixedDim?.dark },
  onTertiaryFixedVariant: {
    main: themeColors?.onTertiaryFixedVariant?.dark,
  },

  error: { main: themeColors?.error?.dark },
  onError: { main: themeColors?.onError?.dark },
  errorContainer: { main: themeColors?.errorContainer?.dark },
  onErrorContainer: { main: themeColors?.onErrorContainer?.dark },
  outline: { main: themeColors?.outline?.dark },

  surface: { main: themeColors?.surface?.dark },
  onSurface: { main: themeColors?.onSurface?.dark },
  surfaceVariant: { main: themeColors?.surfaceVariant?.dark },
  onSurfaceVariant: { main: themeColors?.onSurfaceVariant?.dark },
  inverseSurface: { main: themeColors?.inverseSurface?.dark },
  inverseOnSurface: { main: themeColors?.inverseOnSurface?.dark },

  surfaceContainerHighest: { main: themeColors?.surfaceContainerHighest?.dark },
  surfaceContainerHigh: { main: themeColors?.surfaceContainerHigh?.dark },
  surfaceContainer: { main: themeColors?.surfaceContainer?.dark },
  surfaceContainerLow: { main: themeColors?.surfaceContainerLow?.dark },
  surfaceContainerLowest: { main: themeColors?.surfaceContainerLowest?.dark },
  surfaceBright: { main: themeColors?.surfaceBright?.dark },
  surfaceDim: { main: themeColors?.surfaceDim?.dark },
  shadow: { main: themeColors?.shadow?.dark },
};

export const getMuiTheme = (mode: PaletteMode = 'light') => {
  const muiTheme: ThemeOptions = {
    palette: {
      mode: mode,
      ...(mode === 'light' ? lightPalette : darkPalette),

      green: {
        light: '#3A9E2B',
        main: '#3A9E2B',
      },
      orange: {
        light: '#FF8022',
        main: '#FF8022',
      },
      pink: {
        light: '#ED24D9',
        main: '#ED24D9',
      },
      yellow: {
        light: '#EBC13E',
        main: '#EBC13E',
      },
    },
    typography: {
      fontFamily: PlusJakarta.style.fontFamily,
    },
    breakpoints: {
      values: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
      },
    },
  };

  return createTheme(muiTheme);
};
