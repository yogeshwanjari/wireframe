import React, { Component } from 'react';
import { Header, } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
const ApiView = props => {
    const {
        goForFetch,
        goForAxios,
        fromFetch,
        fromAxios,
        axiosData,
        renderItem,
        FlatListItemSeparator,
        dataSource,
        loading,
    } = props;

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  
    return (
        <View style={styles.parentContainer}>
            {/* <View style={{ margin: 18 }}>
                <Button
                    title={'Click using Fetch'}
                    onPress={goForFetch}
                    color='green'
                />
            </View> */}

            <View style={{ paddingTop: 10 }}>
                <Header 
                
                leftComponent={{ icon: 'ios-chevron-back-circle-outline', type:"ionicon", color:'white', }} 
                rightComponent={{ icon: 'menu', color:'white'}} />
                   
                <Button
                    title={'click here for Fetch APi'}
                    onPress={goForAxios}
                    color="green"
                />
                <Text style={{fontSize:20,textAlign:'left',fontWeight:'bold',color:'black',margin:1}}>Tasks</Text>
 <Searchbar style={{margin:10}}
      placeholder="Search Results"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

            </View>

            {fromFetch ? (
                <FlatList
                    data={dataSource}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            ) : (
                <FlatList 
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            )}
            {loading && (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text>Fetching Data</Text>
                </View>
            )}
        </View>
    );
};
export default ApiView;
