// // // // // pages/_app.tsx
// // // import '@/styles/globals.css'; // Import your global CSS file
// // // import type { AppProps } from 'next/app';
// // // import { MantineProvider } from '@mantine/core';
// // // import { Notifications } from '@mantine/notifications';

// // // export default function App({ Component, pageProps }: AppProps) {
// // //   return (
// // //     <MantineProvider withGlobalStyles withNormalizeCSS>
// // //       <Notifications />
// // //       <Component {...pageProps} />
// // //     </MantineProvider>
// // //   );
// // // }
// // import '@/styles/globals.css';
// // import type { AppProps } from 'next/app';
// // import { MantineProvider } from '@mantine/core';
// // import { Notifications } from '@mantine/notifications';
// // import React, { ReactElement } from 'react';

// // // Extending MantineProviderProps to include the missing properties
// // interface ExtendedMantineProviderProps extends React.ComponentProps<typeof MantineProvider> {
// //   withGlobalStyles?: boolean;
// //   withNormalizeCSS?: boolean;
// // }

// // const App = ({ Component, pageProps }: AppProps): ReactElement => {
// //   return (
// //     <MantineProvider withNormalizeCSS withGlobalStyles >
// //       <Notifications />
// //       <Component {...pageProps} />
// //     </MantineProvider>
// //   );
// // };

// // export default App;
// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';
// import { MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Notifications />
//       <Component {...pageProps} />
//     </MantineProvider>
//   );
// };

// export default App;
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Notifications } from '@mantine/notifications';
import { TestProvider } from './TestProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TestProvider>
      <Notifications />
      <Component {...pageProps} />
    </TestProvider>
  )
}

