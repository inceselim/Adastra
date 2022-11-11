import React from 'react';
//
// ReactQuery
//
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


const queryClient = new QueryClient();
// ---------------------


//
// Navigation
//
import MainNavigation from '../navigation/MainNavigation';
// ---------------------

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
  );
}
