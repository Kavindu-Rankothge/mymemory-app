import React from 'react';
import { View } from 'react-native';

function AppItemSeparator({size}) {
  return (
    <View style={{marginVertical: size, width: "100%"}} />
  );
}

export default AppItemSeparator;