import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';
import Login from './components/Login';

// or any pure javascript modules available in npm
import { /* QueryClientProvider, */ QueryClient } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  /* persistQueryClient, */ PersistQueryClientProvider,
} from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { queryKeys } from './helpers/query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const asyncStoragePersistor = createAsyncStoragePersister({
  storage: AsyncStorage,
  key: queryKeys.loggedInUser,
});
/* persistQueryClient({
  queryClient,
  persister: asyncStoragePersistor,
}); */

export default function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersistor }}
    >
      <View style={styles.container}>
        <View>
          <AssetExample />
        </View>
        <Login />
      </View>
    </PersistQueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
