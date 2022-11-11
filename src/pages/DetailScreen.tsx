import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function DetailScreen(props: any) {
    const name = props.route.params.name
    const authors = props.route.params.authors
    const publisher = props.route.params.publisher
    const country = props.route.params.country
    const pages = props.route.params.pages
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleMain}>{name} </Text>
            <Text style={styles.titleContent}>Authors: </Text>
            <Text style={styles.contentText}>{authors} </Text>
            <Text style={styles.titleContent}>Publisher: </Text>
            <Text style={styles.contentText}>{publisher} </Text>
            <Text style={styles.titleContent}>Country: </Text>
            <Text style={styles.contentText}>{country} </Text>
            <Text style={styles.titleContent}>Number of Pages: </Text>
            <Text style={styles.contentText}>{pages} </Text>
        </SafeAreaView>
    );
}
