import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {colores} from '../theme/appTheme';
import Buscar from '../screens/Buscar';
import TabBar from '../components/TabBar';
import Favoritas from '../screens/Favoritas';
import Inicio from './Inicio';
const Tab = createBottomTabNavigator();

export default function MenuInferior() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: colores.primary}}>
      <Tab.Screen name="Home" component={Inicio} />
      <Tab.Screen name="Buscar" component={Buscar} />

      <Tab.Screen name="Favoritas" component={Favoritas} />
    </Tab.Navigator>
  );
}
