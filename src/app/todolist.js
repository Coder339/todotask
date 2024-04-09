import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../styles/colors'
import { APP_IMAGE } from '../utils/constants'
import { fonts } from '../styles/fonts'
import DeletePopup from '../components/modals/deletePopup'
import EditTodoModal from '../components/modals/editTodoModal'

export default function Todolist() {

    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [todos, setTodos] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [todoID, setTodoID] = useState(null)

    const [modalVisible, setModalVisible] = useState(false)
    const [deletePopupVisible, setDeletePopupVisible] = useState(false)

    const [minInput, setMinInput] = useState('')
    const [maxInput, setMaxInput] = useState('')


    const addTodo = () => {
        if (title.trim() === ''){
            Alert.alert('Please add title')
            return
        }
        else if(about.trim() === ''){
            Alert.alert('Please add About')
            return
        }
        
        let todo = { 
            id: todos.length + 1, 
            title, 
            about,
            selected:false 
        }
        setTodos([...todos,todo ]);
        setTitle('');
        setAbout('');
    };

    const removeTodo=()=>{
        const filteredTodo = todos.filter(todo=>todo.id!==todoID)
        setTodos(filteredTodo)
        setDeletePopupVisible(false)
    }

    const chooseItem=(item,itemIndex)=>{  
        const updatedItem = todos.map((element,index)=>{
            return index===itemIndex ? {...element,selected:!item.selected} : {...element,selected:false}
        })

        setTodos(updatedItem)
    }

    // const editItemHandler=(inputs)=>{
    //     console.log('selectedItem',selectedItem);
    //     console.log('inputs',inputs);
    //     setModalVisible(false)


    // }



    const editItemHandler=()=>{

        if (minInput.trim() === ''){
            Alert.alert('Please add min input')
            return
        }
        else if(maxInput.trim() === ''){
            Alert.alert('Please add max input')
            return
        }
        // let input = {
        //     title:minInput,
        //     about:maxInput
        // }
        // onPress(input)
        const updateIndex = todos.findIndex(item=>item.id===selectedItem.id)
        console.log('updateIndex',updateIndex);
        const upadateTodos = [...todos]
        upadateTodos[updateIndex].title = minInput
        upadateTodos[updateIndex].about = maxInput
        setTodos(upadateTodos)

        console.log(minInput,maxInput);
        setModalVisible(false)
        setMinInput('')
        setMaxInput('')
    }

    const onCancelHandler=()=>{
        setModalVisible(false)
    }

    const todoItem=({item,index})=>{
        return(
            <>
            <Pressable style={{
                flexDirection:'row',
                padding:16,
                borderWidth:1,
                borderColor:colors.primary,
                borderRadius:8,
                backgroundColor:colors.itemBackground
                }}
                onPress={()=>chooseItem(item,index)}
                >
                <View style={{flex:1}}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.about} numberOfLines={1}>{item.about}</Text>
                </View>
                <Pressable 
                    onPress={()=>{
                        setTodoID(item.id)
                        setDeletePopupVisible(true)
                    }} 
                    style={{...styles.addButton,marginStart:16,width:32,height:32}}>
                    <Image
                        source={APP_IMAGE.cross}
                        style={{width:10,height:10}}
                        resizeMode='contain'
                    />
                </Pressable>
            </Pressable>
            {item.selected &&
            <View style={{flexDirection:'row',alignItems:'center',marginTop:8,alignSelf:"flex-end"}}>
                <Pressable 
                    // onPress={()=>removeTodo(item)} 
                    style={{...styles.addButton,marginEnd:6,width:36,height:36,borderWidth:1}}>
                    <Image
                        source={APP_IMAGE.info}
                        style={{width:4,height:18}}
                        resizeMode='contain'
                    />
                </Pressable>
                <Pressable 
                    onPress={()=>{
                        setSelectedItem(item)
                        setModalVisible(true)
                        setMinInput(item.title)
                        setMaxInput(item.about)
                    }} 
                    style={{...styles.addButton,marginStart:6,width:36,height:36,borderWidth:1}}>
                    <Image
                        source={APP_IMAGE.edit}
                        style={{width:12,height:12}}
                        resizeMode='contain'
                    />
                </Pressable>
            </View>
            }
            </>
        )
    }

    const itemSeparator=()=>{
        return(
            <View style={{height:16}}/>
        )
    }

    const noTaskList=()=>{
        return(
            <View style={{marginTop:40,alignItems:'center'}}>
                <View style={styles.divider}/>
                <Text style={styles.emptyListTitle}>No tasks</Text>
                <View style={styles.divider}/>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:"center",}}>
                <View style={{flex:1,gap:8}}>
                    <TextInput
                        placeholder='Title...'
                        placeholderTextColor={colors.placeholder}
                        style={styles.input}
                        onChangeText={(text)=>setTitle(text)}
                        value={title}
                    />
                    <TextInput
                        placeholder='About...'
                        placeholderTextColor={colors.placeholder}
                        style={styles.input}
                        onChangeText={(text)=>setAbout(text)}
                        value={about}
                    />
                </View>
                <Pressable style={styles.addButton} onPress={addTodo}>
                    <Image
                        source={APP_IMAGE.add}
                        style={{width:24,height:24}}
                        resizeMode='contain'
                    />
                </Pressable>
            </View>
            <FlatList
                data={todos}
                renderItem={todoItem}
                keyExtractor={(item,index)=>item.id}
                contentContainerStyle={{paddingVertical:24}}
                ItemSeparatorComponent={itemSeparator}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={noTaskList}
            />
            <DeletePopup
                visible={deletePopupVisible}
                setVisible={setDeletePopupVisible}
                onPress={removeTodo}
                setTodoID={setTodoID}
            />
            <EditTodoModal
                visible={modalVisible}
                setVisible={setModalVisible}
                onPress={editItemHandler}
                onCancel={onCancelHandler}
                minInput={minInput}
                maxInput={maxInput}
                setMinInput={setMinInput}
                setMaxInput={setMaxInput}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{backgroundColor:colors.secondary,flex:1,paddingHorizontal:20,paddingTop:20},
    input:{
        padding:0,
        margin:0,
        borderWidth:1,
        borderColor:colors.primary,
        paddingHorizontal:8,
        flex:1,
        color:colors.text,
        borderRadius:4,
        backgroundColor:colors.itemBackground
    },
    addButton:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:colors.primary,
        borderRadius:8,
        width:70,
        height:70,
        marginStart:8

    },
    title:{fontFamily:fonts.boldFont,fontSize:20,color:colors.text},
    about:{fontFamily:fonts.boldFont,fontSize:14,color:colors.text,marginTop:8},
    divider:{borderTopWidth:3,borderColor:colors.primary,width:64},
    emptyListTitle:{fontFamily:fonts.boldFont,fontSize:24,color:colors.text,marginVertical:14}
})