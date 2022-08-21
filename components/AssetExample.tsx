import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../helpers/query';

export default function AssetExample() {
  const { data: signInData } = useQuery([queryKeys.loggedInUser])


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {signInData ? 'You are in' : 'You are out'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
