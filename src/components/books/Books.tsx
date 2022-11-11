import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { Text, FlatList, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { UseGetBooks } from "../../api/api";
import { styles } from "./styles";


export const Books = () => {
    const { data, isLoading } = UseGetBooks();
    const navigation: any = useNavigation()
    const renderItem = ({ item }: any) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
            name: item.name, authors: item.authors,publisher:item.publisher,country:item.country,pages:item.numberOfPages
        })}>
            <View style={styles.item}>
                <ScrollView>
                    <Text style={styles.title}>{item.name}</Text>
                </ScrollView>
            </View>
        </TouchableOpacity>
    );
    if (!isLoading) {
        <SafeAreaView>
            <Text>Loading...</Text>
        </SafeAreaView>
    }
    return (
        <FlatList horizontal
            data={data}
            keyExtractor={item => item.url}
            renderItem={renderItem}
        />
    )
}