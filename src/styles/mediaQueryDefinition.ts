import { CSSProp, css } from 'styled-components';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const sizes: { [key in DeviceType]: number} = {
  mobile: 580,
  tablet: 768,
  desktop: 1284,
};

type BackQuoteArgs = string[];
type CssFunction = (literals: TemplateStringsArray, ...args: BackQuoteArgs) => CSSProp

export const media = (Object.keys(sizes) as Array<DeviceType>).reduce((acc, key) => {
  acc[key] = (literals, ...args) => css`
    @media only screen and (max-width: ${sizes[key]}px) {
      ${css(literals, ...args)}
    }
  `;
  return acc;
}, {} as Record<DeviceType, CssFunction>)
