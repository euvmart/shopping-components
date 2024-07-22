/* eslint-disable @next/next/no-img-element */
import { Dashboard } from "../../../components/layout/dashboard";
import { Typography, Button, Box, ToggleButtonGroup, ToggleButton, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useRouter } from "next/router";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from "react";
import { ZellePaymentRegister } from "../../../components/ui/zellePaymentRegister";
import { CloseOutlined } from "@mui/icons-material";
import { PmPaymentRegister } from "../../../components/ui/pmPaymentRegister";



export default function Payment() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState(null)

  const handleSetPaymentMethod = (ev, newPaymentMethod) => {
    setPaymentMethod(newPaymentMethod)
  }
  return (
    <Dashboard>
      <Box component={'section'} m={3}>
        <Box
          component='article'
          bgcolor={'var(--primary-color)'}
          paddingX={3}
          paddingY={2}
          borderRadius={2}
          display='flex'
          flexDirection='column'
        >
          <Box
            component='header'
            color={"white"}
            display='flex'
            flexDirection='column'
            alignItems={'center'}
            marginBottom={4}
          >
            <Box alignSelf='end'>
              <CloseOutlined/>
            </Box>
            <StorefrontIcon sx={{ fontSize: '4rem' }} />
            <Typography variant="body1" fontWeight='600' textAlign='center'>Seleccione su metodo de pago</Typography>
            <CustomToggleButtonGroup
              value={paymentMethod}
              exclusive
              onChange={handleSetPaymentMethod}
              aria-label="payment-methods"
            >
              <CustomToogleButton value='zelle' aria-label="zelle-payment"  >
                <Box component={'picture'} width={'50%'}>
                  <img style={{ width: '100%', objectFit: 'cover' }}
                    src="/zelle.png"
                    alt="zelle icon" />
                </Box>
                <Typography>Zelle</Typography>
              </CustomToogleButton>
              <CustomToogleButton value='bs' aria-label="pago-movil-payment">
                <Box component={'picture'} width={'50%'}>
                  <img
                    style={{ width: '100%', objectFit: 'cover', }}
                    src="/pago_movil.png"
                    alt="pago movil icon" />
                </Box>
                <Typography>Pago Movil</Typography>
              </CustomToogleButton>
            </CustomToggleButtonGroup>
          </Box>
          <Box
            component='main'
            display='flex'
          >
            {(paymentMethod === 'zelle') && <ZellePaymentRegister />}
            {(paymentMethod === 'bs') && <PmPaymentRegister />}
          </Box>

        </Box>
      </Box>
    </Dashboard>
  )
}

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  gap: 16,
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  margin: '16px 0'
}))
const CustomToogleButton = styled(ToggleButton)(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  padding: '8px',
  gap: 4,
  width: 'clamp(80px, 40%, 120px)',
  height: 100,
  aspectRatio: '16 / 9',
  textTransform: 'none',
  '&.MuiButtonBase-root.MuiToggleButton-root': {
    backgroundColor: '#f9f3f3',
  },
  '&.MuiToggleButtonGroup-lastButton': {
    borderRadius: 'inherit',
    border: 'initial'
  },
  '&.MuiToggleButtonGroup-firstButton': {
    borderRadius: 'inherit',
    border: 'initial'
  },
  '&.MuiButtonBase-root.MuiToggleButton-root.Mui-selected ': {
    backgroundColor: '#fff',
    boxShadow: ' 0px 4px 6px #1a20458f'
  }
}))