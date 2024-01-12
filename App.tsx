import { QueryClient, QueryClientProvider } from 'react-query';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Auth from '@/components/screens/auth/Auth';
import AuthProviders from '@/providers/AuthProviders';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@/navigation/Navigation';

const queryClien = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClien}>
      <AuthProviders>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProviders>
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}
