import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {colors} from '../../constants/themes';
import {styles} from './styles';

const AlbumDetail = ({navigation, route}) => {
  const {album} = route.params;
  const {name, artist, coverArt, releaseDate} = album;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.coverArt} source={`${coverArt}`} />
      <Text>{artist}</Text>
      <Text>{releaseDate}</Text>
      <Button
        title="Order now"
        onPress={() => null}
        color={colors.primaryColor}
      />
    </View>
  );
};

export default AlbumDetail;
