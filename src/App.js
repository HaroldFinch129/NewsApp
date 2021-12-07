import React from 'react';
import {SafeAreaView, Text, StyleSheet,FlatList} from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news_data}
        renderItem={({item}) => <NewsCard news={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});

export default App;
