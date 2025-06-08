import React from 'react';
import {Card, CardContent, Typography, Grid, IconButton, colors } from '@mui/material';

// ICONS
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

function TaskPage({task, handleCheck}) {

    const styles = {
        card : {
            background: task.isCompleted ? '#B5E6C7' : '#e8eaf6',
            marginY: '5px',
            color: 'white',
            fontWeight: 'bold',
            border:  task.isCompleted ? 'solid 2px #379958' : 'solid 2px #9fa8da',
            borderRadius: '5px',
        },
        typography : {
            fontFamily: 'Verdana, sans-serif',
            fontWeight: 500,
            color: task.isCompleted ? '#379958' : '#5c6bc0',
            letterSpacing: '0.5px',
        },
        checkIcon : {
            background: 'white',
            border: 'solid 2px #50C878',
            size: 'small',
            padding: '0',
            marginX: '2px',
            color: '#50C878',
            '&:hover': {
                background: '#50C878',
                color: 'white',
            },
        },
        deleteIcon : {
            background: 'white',
            border: 'solid 2px #CD5C5C',
            size: 'small',
            padding: '0',
            marginX: '2px',
            color: '#CD5C5C',
            '&:hover': {
                background: '#CD5C5C',
                color: 'white',
            },
        },
        editNoteIcon : {
            background: 'white',
            border: 'solid 2px Plum',
            size: 'small',
            padding: '0',
            marginX: '2px',
            color: 'Plum',
            '&:hover': {
                background: 'Plum',
                color: 'white',
            },
        }
    }
  return (
    <>
        <Card sx={styles.card}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography variant='body1' sx={styles.typography}>
                            {task.title}
                        </Typography>
                    </Grid>
                    <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                        <IconButton sx={styles.checkIcon}>
                            <CheckIcon onClick={() => handleCheck(task.id)}/>   
                        </IconButton>
                        <IconButton sx={styles.deleteIcon}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton sx={styles.editNoteIcon}>
                            <EditNoteIcon/> 
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </>
  )
}

export default TaskPage
