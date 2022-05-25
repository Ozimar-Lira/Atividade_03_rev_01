// Para que possamos utilizar o StyleSheet, temos que importa-lo
import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

// Estilização do componente Form
const form = StyleSheet.create({
  container: {
    margin: 20
  },
  texts: {
    color: "#772ea2",
  },
  inputs: {

    backgroundColor: '#e8e8eb',
    padding: 10,
    marginVertical: 1,
    width: Dimensions.get('window').width * 0.5,
    borderColor: '#b5b5b5',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 18,
  },
  checkbox: {
    marginVertical: 20,
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


// Criamos a variavel fixa 'styles'
const styles = StyleSheet.create({
  // Criamos o grupo de estilo alinharTexto
  alinharTexto: {
    textAlign: 'center'
  }
});

const outroStyles = StyleSheet.create({
  primeiroTexto: {
    textTransform: 'uppercase',
    fontSize: 50
  },

  segundoTexto: {
    color: '#3fd4eb',
    fontSize: 16
  },

  terceiroTexto: {
    color: 'lightseagreen'
  }
});

const header = StyleSheet.create({
  background: {
    width: width,
    height: 80,
    backgroundColor: "#772ea2"
  },
  container: {
    left: 16
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500"
  },
  logo: {
    width: 80,
    height: 80,
    right: 20,
    position: "absolute",
  }
});

// Para que nosso arquivo possa ser importado, temos que exportar ele
// Utilizamos 'export default grupo1' se quisermos exportar um grupo de estilo// Utilizarmos 'export { grupo1, grupo2, grupo3 }' para exportarmos mais de um
export { styles, outroStyles, header, form };