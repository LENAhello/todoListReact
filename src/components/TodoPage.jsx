import React from 'react';
import { Box, Container, Typography, Button, TextField, Grid, colors } from '@mui/material';
import TaskPage from './TaskPage';

function TodoPage() {

    const styles = {
        box : {
            bgcolor: 'white', 
            height: '60vh', 
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
            marginTop: '20px'
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
    }

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
                <Box sx={{width: '90%'}}>
                    <TaskPage/>
                </Box>
                <Grid container spacing={0} sx={styles.textFieldGrid}>
                    <Grid item size={8} sx={{ marginRight:'-20px'}}> 
                       <TextField label="Add New Task" variant="outlined" sx={styles.textField}/>
                    </Grid>
                    <Grid item size={4} >
                        <Button sx={styles.textFieldBtn} variant='text'>Add Task</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default TodoPage;
