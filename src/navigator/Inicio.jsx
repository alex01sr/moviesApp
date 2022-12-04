import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import PeliculaDetalles from '../screens/PeliculaDetalles';
import Splash from '../screens/Splash';
import {colores} from '../theme/appTheme';
import MenuLateral from './MenuLateral';

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
