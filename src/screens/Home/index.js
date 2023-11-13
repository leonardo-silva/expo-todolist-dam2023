import { useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import { styles } from './styles';

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask() {
    setTasks(oldState => [...oldState, newTask]);
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

      <FlashList
        data={tasks}
        keyExtractor={item => item}
        estimatedItemSize={20}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.buttonTask}>
            <Text style={styles.textTask}>
              {item}
            </Text>
          </TouchableOpacity>          
        )}
      />
    </View>
  );
}

// TextInput para entrada de dados