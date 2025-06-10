import React, { useState } from 'react';
import {
    Button, 
    Card, 
    CardContent, 
    colors,
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    DialogActions, 
    Grid, 
    IconButton,
    TextField, 
    Typography
} from '@mui/material';

// ICONS
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

function TaskPage({task, handleCheck, todoList, setTodoList}) {

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showUpdateDialog, setShowUpdateDialog] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task.title);

    const handelDeleteTask = () => {
        const updatedList = todoList.filter((t) =>{
            return t.id != task.id;
        });

        setTodoList(updatedList);
        localStorage.setItem('todoList', JSON.stringify(updatedList));
    }; 
    const handelUpdateTask = () => {
        const updatedList = todoList.map((t) => {
            if(t.id == task.id) {
                return {...t, title: updatedTask};
            }else{
                return t;
            }
        });
        setTodoList(updatedList);
        localStorage.setItem('todoList', JSON.stringify(updatedList));
        setShowUpdateDialog(false);
    }; 

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
            color: task.isCompleted ? '#006241' : '#5c6bc0',
            letterSpacing: '0.5px',
            textDecoration: task.isCompleted ? 'line-through': 'none',
        },
        deleteDialog : {
            background: colors.red[50],
        },
        deleteDialogBtn : {
            color: 'red',
            '&:hover' : {
                background: colors.red[50],
            },
        },
        updateDialog : {
            width: '60%',
            background: colors.purple[50],
        },
        updateDialogBtn : {
            color: 'purple',
            '&:hover' : {
                background: colors.purple[50],
            },
        },
        checkIcon : {
            background: task.isCompleted ? '#50C878' :'white',
            border: 'solid 2px #50C878',
            size: 'small',
            padding: '0',
            marginX: '2px',
            color: task.isCompleted ? 'white' : '#50C878',
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
    };

  return (
    <>
        {/* DELETE ALERT DIALOG */}
        <Dialog
            open={showDeleteDialog}
            onClose={() => setShowDeleteDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{ sx: styles.deleteDialog }}
        >
            <DialogTitle id="alert-dialog-title">
            Deleting Task "{task.title}"
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
               Are you sure that you want to delete this task. Please note that you can't restore deleted tasks!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setShowDeleteDialog(false)}>Close</Button>
            <Button sx={styles.deleteDialogBtn} onClick={handelDeleteTask} autoFocus>
                Delete
            </Button>
            </DialogActions>
        </Dialog>
        {/* UPDATE FORM DIALOG */}
        <Dialog
            open={showUpdateDialog}
            onClose={() => setShowUpdateDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{ sx: styles.updateDialog}}
        >
            <DialogTitle id="alert-dialog-title">
            Updating Task
            </DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="task"
                label="task"
                type="task"
                fullWidth
                variant="standard"
                value={updatedTask}
                onChange={ (e) => setUpdatedTask(e.target.value)}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={() => setShowUpdateDialog(false)}>Close</Button>
            <Button sx={styles.updateDialogBtn} onClick={handelUpdateTask} autoFocus>Update</Button>
            </DialogActions>
        </Dialog>
        {/* CARD CONTAINER */}
        <Card sx={styles.card}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography variant='body1' sx={styles.typography}>
                            {task.title}
                        </Typography>
                    </Grid>
                    {/* ICON BUTTONS GROUP */}
                    <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                        <IconButton sx={styles.checkIcon}>
                            <CheckIcon onClick={() => handleCheck(task.id)}/>   
                        </IconButton>
                        <IconButton sx={styles.deleteIcon} onClick={() => setShowDeleteDialog(true)}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton sx={styles.editNoteIcon} onClick={() => setShowUpdateDialog(true)}>
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
