import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { LabelClipboard } from "./labelClipboard";
import { styled } from "@mui/material/styles";
import { DataPaymentWrapper, MainDataPaymentWrapper } from "./dataPaymentWrappers";
export function ZellePaymentRegister({ }) {
  const color = '#fecc1d'
  return (
    <MainDataPaymentWrapper elevation={2}>
      <DataPaymentWrapper>
        <Typography marginBottom={1} variant='subtitle2' textAlign='center' fontWeight={600}>Datos para la transferencia en ZELLE</Typography>
        <Box display='flex'
          flexDirection='column'
          alignItems='center'>
          <Box display={'flex'} width='100%' justifyContent={'space-between'} flexWrap='wrap' alignItems={'center'}>
            <Typography variant='subtitle2' >Nombre:</Typography>
            <LabelClipboard content={'DLorem ipsu'} buttonProps={{ sx: { color: color } }} />
          </Box>
          <Box display={'flex'} width='100%' justifyContent={'space-between'} flexWrap='wrap' alignItems={'center'}>
            <Typography variant='subtitle2' >Correo:</Typography>
            <LabelClipboard content={'Main@mail.com'} buttonProps={{ sx: { color: color } }} />
          </Box>
        </Box>
      </DataPaymentWrapper>
      <Grid  width='100%' sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', marginTop: 1, }} >
        <TextField label='Ingrese su nombre' required fullWidth variant="outlined" size="small" />
        <TextField label='Ingrese su apellido' required fullWidth variant="outlined" size="small" />
        <TextField label='Ingrese su correo' required fullWidth variant="outlined" size="small" />
        <TextField label='Ingrese su telefono' required fullWidth variant="outlined" size="small" />
        <TextField label='Ingrese numero de referencia' required fullWidth variant="outlined" size="small" />
        <ButtonStyled sx={{ marginTop: 1,backgroundColor:color }} variant="contained">Registrar pago</ButtonStyled>
      </Grid>
    </MainDataPaymentWrapper>

  )
}


const ButtonStyled = styled(Button)(() => ({
  '&.MuiButtonBase-root.MuiButton-root': {
    textTransform: 'none',
    color: 'white',
    width: '70%',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#edc023',
    }
  }
}))

