import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import PeliculaDetalles from '../screens/PeliculaDetalles';

import {colores} from '../theme/appTheme';

const Stack = createStackNavigator();

export default function Inicio() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colores.primary},
      }}>
      <Stack.Screen name="HomePeliculas" component={Home} />
      <Stack.Screen name="PeliculaDetalles" component={PeliculaDetalles} />
    </Stack.Navigator>
  );
}
