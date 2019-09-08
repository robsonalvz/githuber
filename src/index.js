import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';

import createNavigator from './routes';
// import { Container } from './styles';

export default class App extends Component {
    state = {
        userChecked: false,
        userLogged: false,
    };
    async componentDidMount() {
        try {
            const username = await AsyncStorage.getItem('@Githuber:username');
            this.setState({
                userChecked: true,
                userLogged: !!username,
            });
        } catch (err) {
            console.log('Erro ao recuperar o username');
        }
    }
    render() {
        const {userChecked, userLogged} = this.state;
        if (!userChecked) {
            return null;
        }
        const Routes = createNavigator(userLogged);
        return <Routes />;
    }
}
