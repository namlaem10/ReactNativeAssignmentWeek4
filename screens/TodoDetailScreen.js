import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { UpdateBodyItem, UpdateStatusItem } from './TodoScreen';

export default class TodoDetailScreen extends Component {
    state = {
        txtEdit: '',
    }
    pressDone = (todoItem, todoList, id) => {
        const { navigation } = this.props;
        if (todoItem.status === 'Active') {
            todoItem.status = 'Done';
            UpdateStatusItem(id, todoItem.status)
            const foundIndex = todoList.findIndex(todoItem => todoItem.id === id);
            todoList[foundIndex] = todoItem;
        }
        else
            console.log(todoItem.status)
        navigation.goBack();
    }
    onChange = text => {
        this.setState({
            txtEdit: text,
        })
    }
    onPressEdit = (todoItem, todoList, id) => {
        const { txtEdit } = this.state;
        UpdateBodyItem(id, txtEdit)
        if(txtEdit !== ''){
            todoItem.body = txtEdit;
            const foundIndex = todoList.findIndex(todoItem => todoItem.id === id);
            todoList[foundIndex] = todoItem;
            this.setState({
                txtEdit: '',
            })
        }
    };
    render() {
        const { navigation } = this.props;
        const todoItem = navigation.getParam("data");
        const todoList = navigation.getParam("dataList");
        textStatus = todoItem.status;
        const { txtEdit } = this.state
        return (
            <View style={styles.wrapper}>
                <View style={styles.bodyWrapper}>
                    <Text style={styles.bodyTxt}>Task {todoItem.id} </Text>
                    <Text style={styles.bodyTxt}>Status: {todoItem.status} </Text>
                    <Text style={styles.bodyTxt}>{todoItem.body}</Text>
                    <Text>Edit content here</Text>
                    <TextInput style={styles.TextInput} onChangeText={this.onChange} value={txtEdit}>
                    </TextInput>
                </View>
                <View style={styles.groupBtn}>
                    <View style={styles.doneBtn}>
                        <TouchableOpacity onPress={() => this.pressDone(todoItem, todoList, todoItem.id)}>
                            <Text style={styles.doneTxt}>
                                {textStatus === 'Done' ? 'Back' : 'Done'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.editBtn}>
                        <TouchableOpacity
                            style={styles.editBtn}
                            onPress={() => this.onPressEdit(todoItem, todoList, todoItem.id)}
                        >
                            <Text style={styles.editTxt}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
TodoDetailScreen.navigationOptions = {
    title: 'TodoDetail',
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    bodyWrapper: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200
    },
    bodyTxt: {
        fontSize: 20,
        fontWeight: '600',
    },
    groupBtn: {
        flex: 0.2,
        flexDirection: 'row'
    },
    doneBtn: {
        backgroundColor: 'green',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 50, 
        marginRight: 5
    },
    doneTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    editBtn: {
        backgroundColor: 'green',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 50
    },
    editTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    TextInput: {
        height: 30,
        width: 300,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
})