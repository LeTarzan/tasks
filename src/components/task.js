/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../commonStyles';

export default props => {

  const doneOrNotStyle = props.doneAt != null ?
    { textDecorationLine: 'line-through' } : {}

  const date = props.doneAt ? props.doneAt : props.estimateAt;
  const estimateDate = new Date(date).toLocaleDateString()

  const getRightContent = () => {
    return (
      <TouchableOpacity
        style={styles.right}
        onPress={() => props.onDelete && props.onDelete(props.id)}>
        <Icon name="trash" size={30} color='#FFF' />
      </TouchableOpacity>
    )
  }

  const getLeftContent = () => {
    return (
      <TouchableOpacity style={styles.left}>
        <Icon name="trash" size={30} color='#FFF' style={styles.excludeIcon} />
        <Text style={styles.excludeText}>Excluir</Text>
      </TouchableOpacity>
    )
  }

  return (
    <Swipeable
      renderRightActions={getRightContent}
      renderLeftActions={getLeftContent}
      onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}>
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => props.toggleTask(props.id)}>
          <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
        </TouchableNativeFeedback>
        <View>
          <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
          <Text style={styles.date}>{estimateDate + ''}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const getCheckView = doneAt => {
  if (doneAt != null) {
    return (
      <View style={styles.done}>
        <Icon name="check" size={20} color="#FFF" />
      </View>)
  } else {
    return (<View style={styles.pending}></View>)
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff'
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    backgroundColor: '#4D7031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
  right: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  left: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',

  },
  excludeText: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20,
    margin: 10
  },
  excludeIcon: {
    marginLeft: 10
  }
});
