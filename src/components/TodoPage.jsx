import React from 'react';
import { Box, Container, Typography, ButtonGroup, Button } from '@mui/material';
import TaskPage from './TaskPage';

function TodoPage() {

    const styles = {
        box : {
            bgcolor: 'white', 
            height: '50vh', 
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '1rem'
        },
        buttonGroup : {
            width : '75%',
            gap: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        button : {
            fontSize : '0.6rem',
        }
    }

  return (
    <div>
        <Container maxWidth='sm'>
            <Box sx={styles.box}>
                <Typography variant='h5'>Tasks</Typography>
                <Box sx={styles.buttonGroup}>
                    <Button sx={styles.button} variant='contained'>All</Button>
                    <Button sx={styles.button} variant='contained'>In progress</Button>
                    <Button sx={styles.button} variant='contained'>Completed</Button>
                </Box>
                <Box>
                    <TaskPage/>
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default TodoPage;
