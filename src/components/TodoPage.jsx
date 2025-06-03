import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import TaskPage from './TaskPage';

function TodoPage() {

    const styles = {
        box : {
            bgcolor: 'white', 
            height: '50vh', 
            width: '20rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '1rem'
        }
    }

  return (
    <div>
        <Container maxWidth='sm'>
            <Box sx={styles.box}>
                <Typography variant='h5'>Tasks</Typography>
                <Box>
                    <TaskPage/>
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default TodoPage;
