import React from 'react';
import {Routes} from "react-router";
import AppRoute from '@/views/app';
import RootLayout from "@/views/layout";

const App = () => {
  return (
    <Routes>
      <RootLayout>
      <AppRoute />
      </RootLayout>
    </Routes>
  );
};

export default App;
