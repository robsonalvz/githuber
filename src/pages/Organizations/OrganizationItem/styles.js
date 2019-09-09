import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../styles';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: metrics.borderRadius,
        padding: metrics.basePadding,
        marginHorizontal: metrics.baseMargin * 2,
        marginTop: metrics.baseMargin,
    },
    header: {
        margin: metrics.baseMargin / 2,
        padding: metrics.basePadding,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
    },
    avatar: {
        width: 50,
        height: 50,
    },
});
export default styles;
