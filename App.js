import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image } from 'react-native';

const imgExterna = {uri: 'https://estaticos.elcolombiano.com/binrepository/848x565/68c0/780d565/none/11101/UPIA/foto-getty_45248333_20240531183800.jpg'}

export default function App() {
  return (
   
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <ImageBackground source={require('./assets/fondo.jpg')} style={styles.background} resizeMode="cover">
          <StatusBar style="auto" />
          <View style={styles.card}>
            <Image source={imgExterna} style={styles.perfil}  />
            <Text style={styles.nombre}>Juan Fernando Quintero</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    
  },
  container: {
    flex: 1,
  },
  card: {
    marginTop: 100,
    backgroundColor: '#fff',
    width: 300,
    height: 500,
    display: 'grid',
    placeItems: 'center',
    borderRadius: '5%',
  },
  perfil: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: '20%',
  },
  
  nombre: {
    fontFamily: 'Montserrat', 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#333', 
    textAlign: 'center',  
  }
});
