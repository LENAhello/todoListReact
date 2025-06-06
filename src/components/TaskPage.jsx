import React from 'react';
import {Card, CardContent, Typography, Grid, IconButton, colors } from '@mui/material';

// ICONS
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

function TaskPage() {

    const styles = {
        card : {
            background: '#e8eaf6',
            marginY: '5px',
            color: 'white',
            fontWeight: 'bold',
            border: 'solid 2px #9fa8da',
            borderRadius: '5px',
        },
        typography : {
            fontFamily: 'Verdana, sans-serif',
            fontWeight: 500,
            fontSize: '1.2rem',
            color: '#5c6bc0',
            letterSpacing: '0.5px',
        },
        checkIcon : {
            background: 'white',
            border: 'solid 2px green',
            size: 'small',
            padding: '0',
            marginX: '2px',
            color: 'green',
            '&:hover': {
                background: 'green',
                color: 'white',
            },
        },
        deleteIcon : {
            background: 'white',
            border: 'solid 2px crimson',
            size: 'small',
            padding: '0',
            marginX: '2px',
            color: 'crimson',
            '&:hover': {
                background: 'crimson',
                color: 'white',
            },
        },
        editNoteIcon : {
            background: 'white',
            border: 'solid 2px purple',
            size: 'small',
            padding: '0',
            marginX: '2px',
            color: 'purple',
            '&:hover': {
                background: 'purple',
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
                        <Typography sx={styles.typography}>
                            Fisrt Task
                        </Typography>
                    </Grid>
                    <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                        <IconButton sx={styles.checkIcon}>
                            <CheckIcon />   
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
        <Card sx={styles.card}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography sx={styles.typography}>
                            Fisrt Task
                        </Typography>
                    </Grid>
                    <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                        <IconButton sx={styles.checkIcon}>
                            <CheckIcon />   
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
