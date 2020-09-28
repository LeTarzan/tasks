/* eslint-disable prettier/prettier */
import {Alert, Platform} from 'react-native';

// const server = Platform.OS === 'ios' 
//   ? 'http://localhost:3000' : 'http://10.0.2.2:3000'

const server = 'http://0a5ca5338795.ngrok.io'

const showError = (err) => {
  console.log(err)
  if(err.response && err.response.data){
    return Alert.alert('Ops!', 'Ocorreu um problema!', `Mensagem: ${err.response.data}`)
  }
  Alert.alert('Ops!', 'Ocorreu um problema!')
};

const showSuccess = (msg) => {
  Alert.alert('Sucesso!', msg)
};

export {
  server,
  showError,
  showSuccess,
};
