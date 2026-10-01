import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from './screens/Tela1';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tela1"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1f2937',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: '#f3f7ff',
          },
        }}
      >
        <Stack.Screen name="Tela1" component={Tela1} options={{ title: 'Início' }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ title: 'Segunda Tela' }} />
        <Stack.Screen name="Tela3" component={Tela3} options={{ title: 'Terceira Tela' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}