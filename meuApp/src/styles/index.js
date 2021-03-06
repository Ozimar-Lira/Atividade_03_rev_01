// Para que possamos utilizar o StyleSheet, temos que importa-lo
import { StyleSheet, Dimensions, StatusBar } from 'react-native';

var width = Dimensions.get('window').width;

// Estilização do componente Form
const form = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16
  },
  texts: {
    
    color: "#772ea2",
  },
  input: {
    height: 56,
    width: '100%',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    paddingLeft: 22,
    borderRadius: 4,
    backgroundColor: '#fff',

  },

  checkbox: {
    marginVertical: 20,
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    height: 56,
    width: '20%',
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#3D434D',
    fontSize: 15
  }
});


// Criamos a variavel fixa 'styles'
const styles = StyleSheet.create({
  // Criamos o grupo de estilo alinharTexto
  alinharTexto: {
    textAlign: 'center'
  },
  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title1: {
    fontSize: 32,
  },
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
  },
  containerflex: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title1: {
    fontSize: 32,
  },
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
  },

  containerflex: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title1: {
    fontSize: 32,
  },
});

// Para que nosso arquivo possa ser importado, temos que exportar ele
// Utilizamos 'export default grupo1' se quisermos exportar um grupo de estilo// Utilizarmos 'export { grupo1, grupo2, grupo3 }' para exportarmos mais de um
export { styles, outroStyles, header, form };