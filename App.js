import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import Todo from './components/todos';
export default function App() {

  const [todos,setTodos]=useState([
    {text:'mfdkmdkm',key:'1'},
    {text:'mfdkmdkm',key:'2'},
    {text:'mfdkmdkm',key:'3'},
  ]);

  const pressHandler=(key)=>{
    setTodos(prevTodos=>{
      return prevTodos.filter(todo=>todo.key!=key);
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo item={item} pressHandler={pressHandler}></Todo>
        )}
      />
      </View>
    </View>
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
