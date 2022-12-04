import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {tamaño_texto} from '../theme/appTheme';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useFilter} from '../hooks/useFilter';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {setFilter} from '../../redux/actions';

export default function CardCategoria({genero}) {
  const {name, id} = genero;
  const {filterSelect} = useSelector(state => state);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (filterSelect.name === name) {
      setState(true);
    } else {
      setState(false);
    }
  }, [filterSelect.name]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: state ? '#FF692B40' : 'transparent'},
      ]}
      onPress={() => dispatch(setFilter(genero))}>
      <Text style={styles.textCategoria}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(5),
    /*  backgroundColor: '#FF692B40', */
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthPercentageToDP(5),
    marginHorizontal: widthPercentageToDP(1),
  },
  textCategoria: {
    fontFamily: 'Roboto-Medium',
    fontSize: tamaño_texto.medium,
    color: '#fff',
  },
});
