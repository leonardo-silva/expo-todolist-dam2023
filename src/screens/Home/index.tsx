import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import { styles } from './styles';
import { Button } from '../../components/Button';
import { TaskCard } from '../../components/TaskCard';

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

  function handleRemoveTask(id: string) {
    setTasks(oldState => oldState.filter(
      task => task.id != id
    ))
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
          <TaskCard 
            title={item.name}
            onPress={() => handleRemoveTask(item.id)}
          />
        )}
      />
    </View>
  );
}

// TextInput para entrada de dados