import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import StoreIcon from '@mui/icons-material/Store';
import Link from 'next/link'

export function Dashboard({ children }) {
  return (
    <Grid container sx={{ marginTop: '0' }}>
      {/* Navigator example */}
      <Grid item xs={12} sm={2} sx={{
        position: {
          xs: 'absolute',
          sm: 'static'
        },
        height: {
          xs: '10vh',
          sm: '100vh'
        },
        width: {
          xs: '100%',
          sm: 'auto'
        },
        backgroundColor: 'var(--primary-color)',
      }} component='nav'>
        <Link href="/store">store</Link>
      </Grid>
      <Grid
        item
        xs={12}
        sm={10}
        component={'main'}
        sx={{
          marginTop: {
            xs: '12vh',
            sm: '0'
          },
          backgroundColo: '#f5f6fa'
        }}
      >
        <Box
          sx={{ color: 'var(--primary-color)' }}
          display="flex"
          alignItems="center"
          gap={1}
          m={1}
          mx={3}>
          <StoreIcon />
          <Typography variant="h6">
            {/* Cambiar por paremetros */}
            Tienda
          </Typography>
        </Box>
        {children}
      </Grid>
    </Grid>
  )
}