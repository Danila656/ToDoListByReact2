import React, {useState, useEffect} from 'react';
import './App.css';
import UnitWithDeleteButtons from './Components/UnitWithDeleteButtons';
import AddUnit from './Components/AddUnit';
import TaskList from './Components/TaskList';

const App = () => {
    const [arrayWithTasksInfo, changeArray] = useState([]);
    const [textField, changeTextField] = useState('');

    useEffect(() => {
        changeArray(JSON.parse(localStorage.getItem('arrayWithTasksInfo')));
    },[]);

    const deleteTask = (event) => {
        const task = event.target.parentNode.parentNode;

        changeArray(arrayWithTasksInfo.filter((item) => (Number(task.id) !== item.taskId)));
    };

    const acceptOrCancelTask = (event) => {
        const task = event.target.parentNode.parentNode;
        const array = arrayWithTasksInfo;

        array.forEach(function (item) {
            if (Number(task.id) === item.taskId) {
                item.taskStatus = !item.taskStatus;
            }
        })

        changeArray(array.filter(item => true));
    };

    const deleteReadyTasks = () => {
        changeArray(arrayWithTasksInfo.filter(item => !item.taskStatus));
        localStorage.setItem('arrayWithTasksInfo', JSON.stringify(arrayWithTasksInfo));
    };

    const deleteAllTasks = () => {
        changeArray([]);
        localStorage.setItem('arrayWithTasksInfo', JSON.stringify(arrayWithTasksInfo));
    };

    const addInput = (event) => {
        changeTextField(event.target);
    };

    const createNewTask = () => {
        const addTime = createNewTime();
        const taskName = textField.value;
        const taskStatus = false;
        const taskId = +new Date;

        if (checkNameCorrect(taskName)) {
            changeArray(arrayWithTasksInfo.concat({
                addTime: addTime,
                taskName: taskName,
                taskStatus: taskStatus,
                taskId: taskId
            }));
            textField.value = '';
            localStorage.setItem('arrayWithTasksInfo', JSON.stringify(arrayWithTasksInfo));
        }
    };

    const checkNameCorrect = (name) => {
        let pass = true;

        if (name === '') {
            pass = false;
        }

        if (arrayWithTasksInfo.length !== 0) {
            arrayWithTasksInfo.forEach(function (item) {
                if (item.taskName === name) {
                    pass = false
                }
            });
        }

        return pass;
    };

    const createNewTime = () => {
        const date = new Date;
        const year = date.getFullYear();
        let month = date.getMonth();
        let dayOfMonth = date.getDate();

        if (month < 10) {
            month += 1;
            month = '0' + month;
        }
        if (dayOfMonth < 10) {
            dayOfMonth = '0' + dayOfMonth;
        }

        return dayOfMonth + '.' + month + '.' + year;
    };

    return (
        <div>
            <UnitWithDeleteButtons deliverDeleteReadyTasksFunction={deleteReadyTasks}
                                   deliverDeleteAllTasksFunction={deleteAllTasks}/>
            <AddUnit deliverCreateNewTaskFunction={createNewTask}
                     deliverInput={(event) => addInput(event)}
                     deliverNewTask={createNewTask}/>
            <TaskList deliverDeleteFunction={(event) => deleteTask(event)}
                      deliverAcceptOrCancelFunction={(event) => acceptOrCancelTask(event)}
                      arrayWithTasksInfo={arrayWithTasksInfo}/>
        </div>
    );
}

export default App;

