import { Box, Button, FormControl, Grid, TextField, Typography, Select, MenuItem, InputLabel } from "@mui/material";
import { LabelClipboard } from "./labelClipboard";
import { styled } from "@mui/material/styles";
import { DataPaymentWrapper, MainDataPaymentWrapper } from "./dataPaymentWrappers";
import { bankList } from "../../lib/bankList";
export function PmPaymentRegister({ }) {
  return (
    <MainDataPaymentWrapper elevation={2}>
      <DataPaymentWrapper>
        <Typography marginBottom={1} variant='subtitle2' textAlign='center' fontWeight={600}>Datos para pago movil</Typography>
        <Box display='flex'
          flexDirection='column'
          alignItems='center'>
          <Box display={'flex'} width='100%' justifyContent={'space-between'} flexWrap='wrap' alignItems={'center'}>
            <Typography variant='subtitle2' >Telefono:</Typography>
            <LabelClipboard content={'0424-1251527'} buttonProps={{ sx: { color: 'var(--primary-color) ' } }} />
          </Box>
          <Box display={'flex'} width='100%' justifyContent={'space-between'} flexWrap='wrap' alignItems={'center'}>
            <Typography variant='subtitle2' >Rif:</Typography>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <Typography variant='body2' >J - </Typography>
              <LabelClipboard content={'500370725'} buttonProps={{ sx: { color: 'var(--primary-color) ' } }} />
            </Box>
          </Box>
          <Box display={'flex'} width='100%' justifyContent={'space-between'} flexWrap='wrap' alignItems={'center'}>
            <Typography variant='subtitle2' >Banco:</Typography>
            <Typography variant='subtitle2'  >0174 - Banplus</Typography>
          </Box>
        </Box>
      </DataPaymentWrapper>
      <Grid width='100%' sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', marginTop: 1 }} >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label" sx={{ top: '-6px' }}>Banco emisor</InputLabel>
          <SelectStyled
            required
          >
            {bankList.map((bank) => (
              <MenuItem key={bank.codigo} value={bank.codigo}>
                {`${bank.codigo } - ${bank.nombre}`}
              </MenuItem>
            ))}
          </SelectStyled>
        </FormControl>
        <Box display={'flex'} width='100%' gap={1} alignItems={'center'}>
          <FormControl sx={{ minWidth: 120 }} >
            <SelectStyled
              required
              defaultValue={424}
              // value={}
              // onChange={}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={424}>0424</MenuItem>
              <MenuItem value={414}>0414</MenuItem>
              <MenuItem value={412}>0412</MenuItem>
              <MenuItem value={426}>0426</MenuItem>
              <MenuItem value={416}>0416</MenuItem>
            </SelectStyled>
          </FormControl>
          <TextField label='Ingrese el numero de telefono emisor' required fullWidth variant="outlined" size="small" />
        </Box>
        <TextField label='Ingrese los ultimos 6 numeros de la  referencia' required fullWidth variant="outlined" size="small" />
        <ButtonStyled sx={{ marginTop: 1, backgroundColor: 'var(--primary-color)' }} variant="contained">Registrar pago</ButtonStyled>
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

  }
}))
const SelectStyled = styled(Select)(() => ({
  '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
    padding: '8.5px 14px'

  }
}))