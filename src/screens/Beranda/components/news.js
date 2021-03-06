import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {Icons} from '../../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../../../redux/actions/news';
export default function news() {
  // const news = [
  //   {
  //     id: '1',
  //     title: 'Godzila Tayang Tahun Ini ?',
  //     views: '22',
  //     like: '49',
  //     posted: '2 jam lalu',
  //     img: Icons.poster1,
  //   },
  //   {
  //     id: '2',
  //     title: 'Godzila Tayang Tahun Ini ?',
  //     views: '22',
  //     like: '49',
  //     posted: '2 jam lalu',
  //     img: Icons.poster1,
  //   },
  //   {
  //     id: '3',
  //     title: 'Godzila Tayang Tahun Ini ?',
  //     views: '22',
  //     like: '49',
  //     posted: '2 jam lalu',
  //     img: Icons.poster1,
  //   },
  // ];

  const dispatch = useDispatch();
  const {news} = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const renderItems = ({item}) => {
    return (
      <>
        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          <Image
            source={{uri: item.img}}
            style={{height: 80, width: 80, borderRadius: 10, flex: 1}}
          />
          <View style={{flex: 3}}>
            <View style={styles.contentRow}>
              <Text style={{fontSize: 15, marginLeft: 15, flex: 1}}>
                {item.title}
              </Text>
              <Text style={[styles.badge]}>News</Text>
            </View>
            <View
              style={[styles.contentRow, {position: 'absolute', bottom: 0}]}>
              <Text style={styles.itemDetail}>
                <Image source={Icons.eye} style={{height: 10, width: 17}} />{' '}
                {item.views}
              </Text>
              <Text style={styles.itemDetail}>
                {'  '}{' '}
                <Image source={Icons.like} style={{height: 14, width: 14}} />{' '}
                {item.like}
              </Text>
              <Text style={[styles.itemDetail, {flex: 3, textAlign: 'right'}]}>
                {item.posted}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.line}></Text>
      </>
    );
  };

  return (
    <>
      <View
        style={[
          styles.contentRow,
          {paddingVertical: 10, paddingHorizontal: 10},
        ]}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>TIX Now</Text>
        </View>
        <View style={[styles.contentRow, {flex: 1}]}>
          <Text> Semua </Text>
          <Image source={Icons.arrow_right} style={{height: 24, width: 24}} />
        </View>
      </View>
      <Text style={{marginHorizontal: 10, color: 'grey', marginBottom: 10}}>
        Update berita terbaru seputar dunia film
      </Text>
      <View>
        <FlatList
          data={news}
          renderItem={renderItems}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 15,
    color: 'grey',
    borderColor: 'grey',
    fontSize: 10,
  },
  itemDetail: {
    fontSize: 12,
    color: 'grey',
    marginLeft: 15,
    flex: 1,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    width: Dimensions.get('window').width,
    marginVertical: 10,
  },
});
