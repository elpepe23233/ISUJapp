import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
//importar pantallas 
import InicioScreen from './src/components/inicio';
import ContactoScreen from './src/components/contacto';
import CarrerasScreen from './src/components/carreras';
import AdmisionesScreen from './src/components/admisiones';
const Tab=createBottomTabNavigator();

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
         <Tab.Navigator 
         screenOptions={{
          //estilos de la parte superior
          headerTitleAlign:'center', 
            headerStyle: { backgroundColor: "#5a00d8ff" },
            headerTintColor: "#fff", 
            //estilos de la parte inferior
            
            tabBarStyle: { backgroundColor: "#202020ff" }, 
         }}>
            
          <Tab.Screen name= "Inicio" component={InicioScreen }  options={{ //optimizar este codigo para llamar funcion de manera rapida
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color={color} />
      ), 
    }} /> 
    
          <Tab.Screen name= "Contacto" component={ContactoScreen}   
             options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person" size={size} color={color} />
      ),
    }} />
          <Tab.Screen name= "Carreras" component={CarrerasScreen}
              options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="school-outline" size={size} color={color} />
      ),
    }} />
          <Tab.Screen name= "Admisiones" component={AdmisionesScreen}
           options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="document-text-outline" size={size} color={color} />
      ),
    }} />


          </Tab.Navigator> 
        </NavigationContainer>
        </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
