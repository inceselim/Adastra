import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Books } from '../components/books/Books';
import { styles } from '../styles/styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Books />
    </SafeAreaView>
  );
}
