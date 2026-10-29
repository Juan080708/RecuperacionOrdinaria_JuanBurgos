import { View, Text, Image, StyleSheet } from "react-native";
 
export default function CardShow({ show }) {
  const resumen = show.summary
    ? show.summary.replace(/<[^>]*>/g, "")
    : "Sin resumen disponible";
 
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{show.name}</Text>
 
      {show.image && (
        <Image
          source={{ uri: show.image.medium }}
          style={styles.imagen}
        />
      )}
 
      <Text>Géneros: {show.genres.join(", ") || "Sin género"}</Text>
      <Text>Inicio: {show.premiered || "No disponible"}</Text>
      <Text>Fin: {show.ended || "En emisión o sin fecha"}</Text>
      <Text style={styles.resumen}>{resumen}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  imagen: {
    width: 150,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10
  },
  resumen: {
    marginTop: 8,
    lineHeight: 20
  }
});