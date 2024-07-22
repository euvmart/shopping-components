import { Box, Grid, TextField, Typography, FormControl, Select, MenuItem, Button } from "@mui/material";
import ProductImages from "./productImages";
import { useRouter } from "next/router";
import { ShoppingCartRounded } from "@mui/icons-material";

export default function DetailsProductCard() {
  const router = useRouter()
  const images = [
    {
      src: "https://via.placeholder.com/300x200.png?text=Image+1",
      alt: "Placeholder Image 1"
    },
    {
      src: "https://via.placeholder.com/300x200.png?text=Image+2",
      alt: "Placeholder Image 2"
    },
    {
      src: "https://via.placeholder.com/300x200.png?text=Image+3",
      alt: "Placeholder Image 3"
    }
    ,
    {
      src: "https://via.placeholder.com/300x200.png?text=Image+4",
      alt: "Placeholder Image 4"
    }
  ];
  return (
    <Grid component={'article'}
      sx={{
        display: 'flex',
        marginTop: 4,
        padding: 2,
        gap: 4,
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        height: { md: '80%' },

      }}
    >
      {/* Images container */}
      <Box
        sx={{
          flexGrow: 1,
          width: {
            md: '60%',
          },
        }}>
        {/* Images */}
        <ProductImages imagesArray={images} />
      </Box>
      {/* Content container */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: {
            md: '40%',
          },
          overflowY: 'auto'
        }}>
        <Typography fontWeight={600} gutterBottom>Nombre del producto</Typography>

        <Typography fontWeight={600} variant="caption" >Descripcion</Typography>
        <Typography color="text.secondary" paragraph lineHeight={1.2} sx={{wordBreak:'break-word'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </Typography>
        <Box component={'div'} sx={{ display: 'flex', gap: 6, color: 'var(--primary-color)' }} gutterBottom>
          <Typography variant='h5'>USD$</Typography>
          <Typography variant='h5'>24.30</Typography>
        </Box>

        <FormControl fullWidth>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Box component={'div'} sx={{ display: 'flex', gap: 1, marginTop: 2 }} >
              <Typography variant='caption' fontWeight={600}>Talla: </Typography>
              <Typography variant='caption'>Seleccione una talla</Typography>
            </Box>
            <Select
              size="small"
              id="demo-simple-select"
              name="talla"
              defaultValue={'s'}
            >
              <MenuItem value={'s'}>Talla S</MenuItem>
              <MenuItem value={'m'}>Talla M</MenuItem>
              <MenuItem value={'l'}>Talla L</MenuItem>
            </Select>
          </Box>

          <Box component={'div'} sx={{ display: 'flex', gap: 1, marginTop: 2, alignItems: 'center' }} >
            <Typography variant='caption' fontWeight={600}>Cantidad: </Typography>
            <TextField type="number" defaultValue={1} size="small" />
            <Typography variant='caption' sx={{ marginLeft: 2, opacity: 0.8 }}>Cantidad disponible: 50 </Typography>
          </Box>

          <Button
            onClick={() => router.push('stack')}
            startIcon={<ShoppingCartRounded/>}
            variant="contained"
            sx={{
              marginTop: 3,
              backgroundColor: 'var(--primary-color)'
            }}
          >
            <Typography sx={{ textTransform: 'none' }}  >Agregar al carrito</Typography>
          </Button>
        </FormControl>
      </Box>
    </Grid>
  )
}