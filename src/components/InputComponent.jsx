import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colores, tamaño_texto, theme} from '../theme/appTheme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

export default function InputComponent({
  title,
  password,
  value = '',
  setChange = () => {},
}) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.boxInput}>
      <Text
        style={[
          theme.title,
          {
            fontSize: tamaño_texto.large,
            marginVertical: heightPercentageToDP(0.5),
          },
        ]}>
        {title}
      </Text>
      <TextInput
        value={value}
        secureTextEntry={password ? !visible : false}
        placeholderTextColor="#DDDDDD50"
        style={styles.input}
        onChangeText={setChange}
        selectionColor={colores.secondary}
        placeholder={`Ingrese un ${title ? title : 'placeholder'}`}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => setVisible(!visible)}>
        {password && (
          <Icon
            name={visible ? 'eye-outline' : 'eye-off-outline'}
            size={heightPercentageToDP(3)}
            color="#DDDDDD50"
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff10',
    borderRadius: 10,
    paddingHorizontal: widthPercentageToDP(5),
    color: '#fff',
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
  },
  boxInput: {
    marginVertical: heightPercentageToDP(2),
    height: heightPercentageToDP(10),
  },
  icon: {
    position: 'absolute',
    right: heightPercentageToDP(1),
    top: heightPercentageToDP(5),
  },
});
