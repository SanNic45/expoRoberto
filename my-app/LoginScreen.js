import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    Alert.alert('Bienvenido', `Hola ${username}`);
  };

  return (
    <View>
      <Text>Bienvenido</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={onLogin} />
      <Button title="Registrarse" onPress={() => { /* Aquí va la lógica de redirección al registro */ }} />
      <Text>Versión de la aplicación: 1.0.0</Text>
    </View>
  );
};

export default LoginScreen;