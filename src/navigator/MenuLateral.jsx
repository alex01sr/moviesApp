import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import {colores} from '../theme/appTheme';
import MenuInferior from './MenuInferior';

const Drawer = createDrawerNavigator();

export default function MenuLateral() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        /*         drawerType: width >= 768 ? 'permanent' : 'front', */
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{
          title: 'Home',
        }}
        component={MenuInferior}
      />
    </Drawer.Navigator>
  );
}

/* const MenuInterno = ({navigation}) => {
  return (
    <DrawerContentScrollView>
      <View style={theme.avatarContainer}>
        <Image
          style={theme.avatar}
          source={{
            uri: 'https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png',
          }}
        />
      </View>
      <View style={theme.menuContainer}>
        <TouchableOpacity
          style={theme.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={theme.menuTexto}>
            <Icon name="map-outline" size={22} color={colores.primary} />{' '}
            Navegacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={theme.menuBoton}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={theme.menuTexto}>
            <Icon name="settings-outline" size={22} color={colores.primary} />{' '}
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
 */
