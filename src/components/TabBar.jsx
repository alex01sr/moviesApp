import {BlurView} from '@react-native-community/blur';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
export default function TabBar({state, descriptors, navigation}) {
  return (
    <>
      <BlurView
        blurRadius={2}
        blurType="dark"
        overlayColor=""
        blurAmount={10}
        style={styles.boxBlur}
      />
      <View style={[styles.boxBlur, styles.box]}>
        <View style={styles.boxText}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({name: route.name, merge: true});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            let iconName = '';
            let iconNameFocu = '';
            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                iconNameFocu = 'home';
                break;
              case 'Buscar':
                iconName = 'search-outline';
                iconNameFocu = 'search';
                break;
              case 'Favoritas':
                iconName = 'bookmark-outline';
                iconNameFocu = 'bookmark';
                break;
            }
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}>
                <View style={styles.boxIcon}>
                  <Icon
                    name={isFocused ? iconNameFocu : iconName}
                    size={heightPercentageToDP(3.5)}
                    color="white"
                  />
                  {isFocused && (
                    <Icon
                      name="ellipse"
                      size={heightPercentageToDP(0.5)}
                      color="white"
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  boxBlur: {
    position: 'absolute',

    height: heightPercentageToDP(9),
    width: widthPercentageToDP(85),
    right: widthPercentageToDP(7.5),
    left: widthPercentageToDP(7.5),
    bottom: heightPercentageToDP(2),
  },
  box: {
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C410',

    borderRadius: 59,
  },

  boxIcon: {
    alignItems: 'center',
  },
  boxText: {
    flexDirection: 'row',
    width: widthPercentageToDP(90),
    justifyContent: 'space-around',
  },
});
