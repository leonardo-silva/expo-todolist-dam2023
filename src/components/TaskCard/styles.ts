import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#1F1E25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 2,
    marginVertical: 10,
    marginHorizontal: 20
  },
  textTask: {
    color: 'white',
    fontSize: 20
  }
});

// Platform.OS permite testar qual SO está em uso, para realizar configurações específicas de ambiente.