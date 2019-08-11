import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TodoDetailScreen extends Component {
    pressDone = (todoItem, todoList, id) => {
        const { navigation } = this.props;
        if (todoItem.status === 'Active') {
            todoItem.status = 'Done';
            const foundIndex = todoList.findIndex(todoItem => todoItem.id === id);
            todoList[foundIndex] = todoItem;
            navigation.goBack();
        }
        else {
            navigation.goBack();
        }
    }
    render() {
        const { navigation } = this.props;
        const todoItem = navigation.getParam("data");
        const todoList = navigation.getParam("dataList");
        textStatus = todoItem.status;
        return (
            <View style={styles.wrapper}>
                <View style={styles.bodyWrapper}>
                    <Text style={styles.bodyTxt}>Task {todoItem.id} </Text>
                    <Text style={styles.bodyTxt}>Status: {todoItem.status} </Text>
                    <Text style={styles.bodyTxt}>{todoItem.body}</Text>
                </View>
                <View style={styles.doneBtn}>
                    <TouchableOpacity onPress={() => this.pressDone(todoItem, todoList, todoItem.id)}>
                        <Text style={styles.doneTxt}>
                            {textStatus === 'Done' ? 'Back' : 'Done'}
                        </Text>
                    </TouchableOpacity>
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
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyTxt: {
        fontSize: 20,
        fontWeight: '600',
    },
    doneBtn: {
        backgroundColor: 'green',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1,
        width: 120,
    },
    doneTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
})