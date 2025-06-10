import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, TextField, Grid, colors, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import TaskPage from './TaskPage';


function TodoPage() {

    const [todoList, setTodoList] = useState([]);
    const [titleInput, setTitleInput] = useState('');
    const [filteredValue, setFilteredValue] = useState('all');

    // USE EFFECT TO SAVE TO DO LIST IN LOCAL STORAGE 
    useEffect( () => {
        const storageList = JSON.parse(localStorage.getItem('todoList'));
        if (storageList) {
            setTodoList(storageList);
        };

    }, []);

    let tasksToBeRendered = todoList;
    // ADD NEW TASK WITH TEXTFIELD MUI COMPONENT
    const handleInputClick = () => {
        const newTask = {
            id: uuidv4(),
            title: titleInput,
            isCompleted: false
        };

        const updatedList = [...todoList, newTask];
        setTodoList(updatedList);
        localStorage.setItem('todoList', JSON.stringify(updatedList));
        setTitleInput('');
    };

    // HANDLE CHECKICON IN TASKPAGE COMPONENT
    const handleCheck= (taskId) => {
        const updatedList = todoList.map( (t) => {
            if (t.id == taskId) {
                t.isCompleted = !t.isCompleted;
            }
            return t;
        })
        setTodoList(updatedList);
        localStorage.setItem('todoList', JSON.stringify(updatedList));
    };

    // FILTERING COMPLETED TASKS
    const completedList = todoList.filter((t) => {
        return t.isCompleted;
    });

    // FILTERING NON COMPLETED TASKS
    const nonCompletedList = todoList.filter((t) => {
        return !t.isCompleted;
    });

    // FILTERING TASKS
    if(filteredValue == 'inProgress'){
        tasksToBeRendered = nonCompletedList;
    }else if (filteredValue == 'completed') {
        tasksToBeRendered = completedList;
    }else {
        tasksToBeRendered = todoList;
    };

    const filterTasks = (e) => {
        setFilteredValue(e.target.value);
    }
    const styles = {
        box : {
            bgcolor: 'white', 
            height: '65vh', 
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '1rem',
        },
        buttonGroup : {
            width : '75%',
            gap: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button : {
            fontSize: '0.7rem', 
            backgroundColor: '#c5cae9',
            color: '#283593',
            border: 'solid 1px #283593',
            borderRadius: 0,
            '&:hover': {
                backgroundColor: '#7986cb',
                color: 'white',
            },
        },
        textFieldGrid : {
            width: '90%',
            display: 'flex',
            marginY: '20px',
            background: colors.indigo[50],
            borderRadius: '5px'
        },
        textFieldBtn: {
            width: '120px',
            height: '100%',
            borderRadius: '5px',
            fontSize: '0.9rem',
            backgroundColor: '#7986cb',
            color: 'white',
            border: 'solid 1px #283593',
            borderRadius: 0,
            '&:hover': {
                backgroundColor: '#3f51b5',
                color: 'white',
            },
        },
        textField: {
            height: '50%',
        }
    };

  return (
    <div>
        <Container maxWidth='sm'>
            <Box sx={styles.box}>
                <Typography 
                    variant='h4' 
                    sx={{
                        fontFamily: 'Verdana, sans-serif',
                        fontWeight: '600',
                        color: 'black',
                        letterSpacing: '0.5px',
                        }}>
                            Tasks
                </Typography>
                {/* FILTERING BUTTONS */}
                <ToggleButtonGroup
                    sx={styles.buttonGroup}
                    value={filteredValue}
                    exclusive
                    onChange={filterTasks}
                >
                    <ToggleButton sx={styles.button} variant='text' value='all'>All</ToggleButton>
                    <ToggleButton sx={styles.button} variant='text' value='inProgress'>In progress</ToggleButton>
                    <ToggleButton sx={styles.button} variant='text' value='completed'>Completed</ToggleButton>
                </ToggleButtonGroup>
                {/* IMPORT TASKPAGE COMPONENT TO DISPLAY TASKS */}
                <Box sx={{width: '90%',  overflowY: 'auto'}}>
                {tasksToBeRendered.map((task) => (
                    <TaskPage 
                        key={task.id} 
                        task={task} 
                        handleCheck={handleCheck}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
        
                ))}
                </Box>
                {/* TEXT FIELD FOR ADDING NEW TASKS */}
                <Grid container spacing={0} sx={styles.textFieldGrid}>
                    <Grid item size={8}> 
                       <TextField 
                            label="Add New Task" 
                            variant="outlined" 
                            size="small" 
                            sx={styles.textField}
                            value={titleInput}
                            onChange={(e) => setTitleInput(e.target.value)}
                            />
                    </Grid>
                    <Grid item size={4}>
                        <Button 
                            sx={styles.textFieldBtn} 
                            variant='text' 
                            onClick={() => handleInputClick()}
                            disabled={titleInput.length == 0}    
                        >Add Task</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default TodoPage;
