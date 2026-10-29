import { View, Text, FlatList, StyleSheet } from "react-native";
import useSeries from "../Hooks/useSeries";
import CardShow from "../components/cardShow";
import Loading from "../components/Loading";
 
export default function Series() {
  const { series, loading, error } = useSeries();
 
  if (loading) return <Loading />;
 
  if (error) {
    return (
      <View style={styles.centro}>
        <Text>Error al cargar las series. Revisa tu conexión.</Text>
      </View>
    );
  }
 
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={series}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CardShow show={item} />}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f1f1f1"
  },
  lista: {
    padding: 15
  },
  centro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});