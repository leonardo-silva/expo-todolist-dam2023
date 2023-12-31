import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: 'white',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginHorizontal: 20
  }
});

// Platform.OS permite testar qual SO está em uso, para realizar configurações específicas de ambiente.