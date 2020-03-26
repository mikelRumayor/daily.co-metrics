import styled from 'styled-components';

const theme = key => props => {
  const value = props.theme[key];
  return value;
};

const prop = key => props => props[key];

export {
  css,
  createGlobalStyle,
  createGlobalStyle as injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
} from 'styled-components';

export { prop, theme };

export default styled;
