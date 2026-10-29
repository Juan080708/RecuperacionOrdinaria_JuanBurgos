import { View, Text, Image, Button, StyleSheet } from "react-native";
 
export default function Inicio({ navigation }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.card}>
 
        <Text style={styles.titulo}>Datos del estudiante</Text>
        <Text>Nombre: Juan Pablo Burgos Guzmán</Text>
        <Text>Carnet: 20240126</Text>
        <Text>Sección y grupo: 2A</Text>
 
        <Text style={styles.modulo}>
          Recuperación Ordinaria Módulo 5
        </Text>
        <Text>Desarrollo de componentes para dispositivos móviles</Text>
 
        <View style={styles.boton}>
          <Button
            title="Ver series"
            color="#c91a1a"
            onPress={() => navigation.navigate("Series")}
          />
        </View>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f1f1f1"
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 4,
    alignItems: "center"
  },
  logo: {
    width: 130,
    height: 100,
    marginBottom: 15
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },
  modulo: {
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center"
  },
  boton: {
    marginTop: 20,
    width: "100%"
  }
});