import React, {Component} from 'react';

import {View, AsyncStorage, FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import OrganizationItem from './OrganizationItem';
import api from '../../services/api';
import styles from './styles';
// import { Container } from './styles';
export default class Organizations extends Component {
    state = {
        data: [],
        loading: true,
        refreshing: false,
    };
    async componentDidMount() {
        this.loadRepositories();
    }
    loadRepositories = async () => {
        this.setState({refreshing: true});
        const username = await AsyncStorage.getItem('@Githuber:username');
        const {data} = await api.get(`users/${username}/orgs`);
        this.setState({data, loading: false, refreshing: false});
    };
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="building" size={20} color={tintColor} />
        ),
    };
    renderListItem = ({item}) => <OrganizationItem repository={item} />;

    renderList = () => {
        const {data, refreshing} = this.state;
        return (
            <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={this.renderListItem}
                onRefresh={this.loadOrgs}
                refreshing={refreshing}
            />
        );
    };
    render() {
        const {loading} = this.state;
        return (
            <View style={styles.container}>
                <Header title="Organizações" />
                {loading ? (
                    <ActivityIndicator style={styles.loading} />
                ) : (
                    this.renderList()
                )}
            </View>
        );
    }
}
