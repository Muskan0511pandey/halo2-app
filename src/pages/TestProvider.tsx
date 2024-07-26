import React from 'react';
import { MantineProvider } from '@mantine/core';

export function TestProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
}