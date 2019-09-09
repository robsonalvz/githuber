import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const OrganizationItem = ({org}) => (
    <View style={styles.container}>
        <Text style={styles.title}>{org.login}</Text>
    </View>
);
OrganizationItem.propTypes = {
    org: PropTypes.shape({
        login: PropTypes.string,
    }).isRequired,
};
export default OrganizationItem;
