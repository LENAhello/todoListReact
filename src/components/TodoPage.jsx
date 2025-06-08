import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Grid, colors } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import TaskPage from './TaskPage';

const todoListOne = [
    {
        id: uuidv4(),
        title: 'doing my yyy',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: 'doing my homework',
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: 'doing my oo',
        isCompleted: false,
    },
];

function TodoPage() {

    const [todoList, setTodoList] = useState(todoListOne);
    const [titleInput, setTitleInput] = useState('');

    const handelInputClick = () => {
        const newTask = {
            id: uuidv4(),
            title: titleInput,
            isCompleted: false
        };

        setTodoList([...todoListOne, newTask]);
        setTitleInput('');
    };

    const handleCheck= (taskId) => {
        const updatedList = todoList.map( (t) => {
            if (t.id == taskId) {
                t.isCompleted = !t.isCompleted;
            }
            return t;
        })
        setTodoList(updatedList);
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
            marginY: '20px'
        },
        textFieldBtn: {
            width: '140px',
            height: '100%',
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
                <Box sx={styles.buttonGroup}>
                    <Button sx={styles.button} variant='text'>All</Button>
                    <Button sx={styles.button} variant='text'>In progress</Button>
                    <Button sx={styles.button} variant='text'>Completed</Button>
                </Box>
                <Box sx={{width: '90%',  overflowY: 'auto'}}>
                {todoList.map((task) => (
                    <TaskPage 
                        key={task.id} 
                        task={task} 
                        handleCheck={handleCheck}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    />
        
                ))}
                </Box>
                <Grid container spacing={0} sx={styles.textFieldGrid}>
                    <Grid item size={8} sx={{ marginRight:'-20px'}}> 
                       <TextField 
                            label="Add New Task" 
                            variant="outlined" 
                            size="small" 
                            sx={styles.textField}
                            value={titleInput}
                            onChange={(e) => setTitleInput(e.target.value)}
                            />
                    </Grid>
                    <Grid item size={4} >
                        <Button sx={styles.textFieldBtn} variant='text' onClick={() => handelInputClick()}>Add Task</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default TodoPage;
