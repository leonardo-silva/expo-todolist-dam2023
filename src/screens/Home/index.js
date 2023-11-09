import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask() {
    setTasks(oldState => [...oldState, newTask]);

    console.log(tasks);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá Leonardo
      </Text>

      <TextInput 
        style={styles.input}
        placeholder='Digite sua tarefa...'
        placeholderTextColor='#555555'
        onChangeText={setNewTask}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Text style={styles.buttonText}>
          Adicionar
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Minhas Tarefas
      </Text>
    </View>
  );
}

// TextInput para entrada de dados