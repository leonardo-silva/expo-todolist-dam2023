import { StatusBar, SafeAreaView } from 'react-native';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Home/>
    </SafeAreaView>
  );
}
