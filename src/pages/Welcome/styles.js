import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secundary,
        padding: metrics.basePadding * 2,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    title: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
    },

    text: {
        textAlign: 'center',
        marginTop: metrics.baseMargin,
        fontSize: 14,
        color: colors.light,
        lineHeight: 21,
    },

    form: {
        marginTop: metrics.baseMargin * 2,
    },

    input: {
        backgroundColor: colors.white,
        borderRadius: metrics.borderRadius,
        height: 44,
        paddingHorizontal: metrics.basePadding,
    },

    error: {
        color: colors.danger,
        marginTop: metrics.baseMargin,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: colors.primary,
        borderRadius: metrics.baseRadius,
        height: 44,
        marginTop: metrics.baseMargin,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.white,
    },
});

export default styles;
