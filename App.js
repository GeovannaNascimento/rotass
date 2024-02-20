import * as React from 'react'; import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Início({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Menu</Text>
      <Button
        title="Menu de Páginas"
        color="pink"
        onPress={() => navigation.navigate('Paginas')} />
    </View>
  );
}

function Sobre({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Menu</Text>
      <Button
        color="pink"
        title="Menu de Páginas"
        onPress={() => navigation.navigate('Paginas')} />
    </View>
  );
}

function Contatos({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Menu</Text>
      <Button
        color="pink"
        title="Menu de Páginas"
        onPress={() => navigation.navigate('Paginas')} />
    </View>
  );
}

function Avisos({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
      <Text>Menu</Text>
      <Button
        color="pink"
        title="Menu de Páginas"
        onPress={() => navigation.navigate('Paginas')} />
    </View>
  );
}


function Paginas({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
      <Button   color="pink" title="Início" onPress={() => navigation.navigate('Início')} />
      <Button   color="pink" title="Sobre nós" onPress={() => navigation.navigate('Sobre')} />
      <Button   color="pink" title="Contatos" onPress={() => navigation.navigate('Contatos')} />
      <Button   color="pink" title="Avisos Prévios" onPress={() => navigation.navigate('Avisos')} />
      <Button   color="pink" title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}







const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Início" component={Início} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contatos" component={Contatos} />
        <Stack.Screen name="Avisos" component={Avisos} />
        <Stack.Screen name="Paginas" component={Paginas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;