import React from 'react';
import { Camera as ExpoCamera } from 'expo-camera';
import { View } from 'react-native';

// import { Container } from './styles';

const Camera: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
        <ExpoCamera style={{ flex: 1 }}/>
    </View>
  );
}

export default Camera;