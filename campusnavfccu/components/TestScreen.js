// TestScreen.js
import React from 'react';
import ScreenWrapper from './ScreenWrapper';
import Test from './Test';

const TestScreen = (props) => {
  return (
    <ScreenWrapper>
      <Test {...props} />
    </ScreenWrapper>
  );
};

export default TestScreen;
