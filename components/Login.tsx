import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../helpers/query';

const Login = () => {
  const queryClient = useQueryClient();

  const handlePress = () => {
    queryClient.setQueryData([queryKeys.loggedInUser], {
      token: 'TOKENNNNNNNNNN',
    });
  };

  return (
    <TouchableHighlight onPress={handlePress} style={styles.login}>
      <Text>Make me login</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  login: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginTop: 10,
    backgroundColor: '#fcafca',
    borderRadius: 4,
  },
});

export default Login;
