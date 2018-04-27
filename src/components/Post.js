import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const Post = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>
            {props.title}
        </Text>
        <Text style={styles.author}>
            {props.author}
        </Text>
        <Text style={styles.borderedLine}></Text>
        <Text style={styles.content}>
            {props.msg}
        </Text>
    </View>
);

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        padding: 20,
        borderRadius: 5,
    },
    title: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'flex-start',
    },
    author: {
        color: '#999999',
    },
    borderedLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        marginBottom: 5,
    },
    content: {
        color: '#666666',
    },
});

export default Post;