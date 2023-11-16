import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import { styles } from './styles';
import { Button } from '../../components/Button';

interface TaskData {
  id: string;
  name: string;
}

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function handleAddNewTask() {
    const data: TaskData = {
      id: String((new Date).getTime()),
      name: newTask
    }

    setTasks(oldState => [...oldState, data]);
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

      <Button 
        onPress={handleAddNewTask}
        activeOpacity={0.7}
        title='Adicionar tarefa'
      />

      <Text style={styles.text}>
        Minhas Tarefas
      </Text>

      <FlashList
        data={tasks}
        keyExtractor={item => item.id}
        estimatedItemSize={20}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.buttonTask}>
            <Text style={styles.textTask}>
              {item.name}
            </Text>
          </TouchableOpacity>          
        )}
      />
    </View>
  );
}

// TextInput para entrada de dados