import { StyleSheet, Text, View, StatusBar} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 178,
    backgroundColor: '#1967FB',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
 
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 4,
    borderColor: '#E3E3E3',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    flex: 1,
    marginLeft: 12
  },
  title: {
    color: '#FFF',
    fontSize: 20
  },
  subtitle: {
    color: '#FFF',
    fontSize: 13
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  containerflex: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    
    marginTop:30
  },
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingTop: 15,
    paddingBottom: 15,


  },
  title1: {

    color: '#FFF',
    fontSize: 15,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#b8cdff',
    paddingHorizontal: 20
  },

  itemflex: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 24,
    borderColor: '#E3E3E3',
    borderWidth: 2,
    backgroundColor: '#b8cdff'
  },
  itemPhoto: {
    color: '#FFF',
    fontSize: 15,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#b8cdff',
    paddingHorizontal: 20
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 20,
    color: '#999999',
    marginBottom: 5
  },
  itemP2: {
    fontSize: 14,
    color: '#999999',
  },

aberto: {
  fontSize: 14,
  color: 'red',
  textDecorationLine: 'none', 

},

concluido: {
  fontSize: 14,
  color: 'green',
  textDecorationLine: 'line-through', 
  textDecorationStyle: 'solid' 
},

atrasado: {
  fontSize: 14,
  color: 'red',
  alignItems: 'center',
  backgroundColor: 'black',
  textDecorationStyle: 'solid' 
},

noprazo: {
  fontSize: 14,
  color: 'green',
  alignItems: 'center',
  textDecorationStyle: 'solid' 
},

  checkbox: {
    marginVertical: 20,
  },
});