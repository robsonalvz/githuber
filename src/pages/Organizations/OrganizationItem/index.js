import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const OrganizationItem = ({org}) => (
    <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: org.avatar_url}} />
        <View style={styles.header}>
            <Text style={styles.title}>{org.login}</Text>
            <Text style={styles.description}>{org.description}</Text>
        </View>

    </View>
);
OrganizationItem.propTypes = {
    org: PropTypes.shape({
        login: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};
export default OrganizationItem;
