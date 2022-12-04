import {createDrawerNavigator} from '@react-navigation/drawer';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import MenuLateralContent from '../components/MenuLateralContent';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {colores} from '../theme/appTheme';
import MenuInferior from './MenuInferior';

const Drawer = createDrawerNavigator();

export default function MenuLateral() {
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuLateralContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'left',
        headerShown: false,
        drawerStyle: {
          width: widthPercentageToDP(70),
          borderBottomRightRadius: 30,
          borderTopRightRadius: 30,

          backgroundColor: `${colores.primary}`,
        },
      }}>
      <Drawer.Screen name="StackNavigator" component={MenuInferior} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} />
    </Drawer.Navigator>
  );
}
