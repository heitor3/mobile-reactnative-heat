import React from 'react';

import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>

      </Text>

      <View>
        <UserPhoto
          imageUri=""
          sizes="SMALL"
        />

        <Text style={styles.userName}>
          Nome do usuário
        </Text>
      </View>

    </View>
  );
}