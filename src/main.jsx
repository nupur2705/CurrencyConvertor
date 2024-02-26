import * as React from 'react'
import { ChakraProvider,ColorModeScript,theme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import ColorModeSwitcher from './ColorModeSwitcher'
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
export const server=`https://api.coingecko.com/api/v3`;
