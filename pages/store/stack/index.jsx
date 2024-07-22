/* eslint-disable @next/next/no-img-element */
import { Dashboard } from "../../../components/layout/dashboard";
import { Typography, Button, Box, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useRouter } from "next/router";
import Link from "next/link";


export default function Stack() {
  const router = useRouter()

  return (
    <Dashboard>
      <Box component={'section'} m={3}>
        <Typography m={'12px auto'} textAlign={'center'} variant="h6" color={'var(--primary-color)'} fontWeight={600}>Detalles de compra</Typography>
        {/* resume order */}
        <TableContainer elevation={0}>
          {/* header */}
          <TableSection borderBottom={'2px solid #e4dada'}     >
            <HeadCell sx={{ justifySelf: 'start' }}  > Producto </HeadCell>
            <HeadCell > Cantidad </HeadCell>
            <HeadCell > Precio </HeadCell>
            <HeadCell > Subtotal </HeadCell>
          </TableSection>
          {/* Content */}
          <TableSection
            maxHeight={'60vh'}
            overflow={'auto'}
            sx={{ padding: 0 }}
            rowGap={2}
            gridAutoRows={'100px'} >
            {
              cart.products.map((product, index) => <ItemResumeOrder key={index} {...product} />)
            }
          </TableSection>

          {/* footer */}
          <TableSection bgcolor={'#dde9ef'} >
            <HeadCell gridColumn={'1/4'} sx={{ justifySelf: 'start' }} > Total </HeadCell>
            <HeadCell gridColumn={'4/5'} >{cart.Total.toFixed(2)}</HeadCell>
          </TableSection>
          <Button
          onClick={()=>router.push('payment')}
            variant="contained"
            sx={{
              justifySelf: 'center',
              gridColumn: '1/-1',
              backgroundColor: 'var(--primary-color)',
              textTransform: 'capitalize',
              margin: 3,
              width: '50%',
              maxWidth: '250px'
            }}
          >Pagar</Button>

        </TableContainer>
      </Box>
    </Dashboard>
  )
}

function ItemResumeOrder({ nombre, cantidad, precio, subtotal, src, alt }) {
  return (
    <TableSection
      border={'1px solid #e4dada'}
      borderRadius={4}
      gridTemplateRows={'subgrid'} >
      <Box display={'flex'} gap={2} maxWidth={300}>
        <Box component={'picture'} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <img
            style={{ height: '100%', aspectRatio: 1, objectFit: 'cover', borderRadius: '12px' }}
            src={src}
            alt={alt}
          />
        </Box>
        <Box height={'100%'} overflow={'auto'} display={'flex'} alignItems={'center'}>
          <Link
            href={'/store/details'}
            variant="body2"
            fontWeight={200}
            alignSelf={'center'}
            style={{ wordBreak: 'break-all', display: 'block', }}>
            {nombre}
          </Link>
        </Box>
      </Box>
      <Typography variant="body2" justifySelf={'end'} alignSelf={'center'} fontWeight={200}> {cantidad} </Typography>
      <Typography variant="body2" justifySelf={'end'} fontWeight={200} alignSelf={'center'}> {precio} </Typography>
      <Typography variant="body2" justifySelf={'end'} fontWeight={200} alignSelf={'center'}> {subtotal.toFixed(2)} </Typography>
    </TableSection>
  )
}


// placeholder data
const cart = {
  get Total() {
    const subtotales = this.products.map(product => product.subtotal)
    return subtotales.reduce((acc, cv) => acc + cv, 0)
  },
  products:
    [{
      nombre: "Camifsfgsgsfgsfgsfgsfgsfgsgsseta",
      cantidad: 3,
      precio: 20,
      src: "https://via.placeholder.com/300x200.png?text=Image+1",
      alt: "Placeholder Image 1",
      get subtotal() {
        return this.cantidad * this.precio;
      }
    },
    {
      nombre: "Panes",
      cantidad: 2,
      precio: 35,
      src: "https://via.placeholder.com/300x200.png?text=Image+1",
      alt: "Placeholder Image 1",
      get subtotal() {
        return this.cantidad * this.precio;
      }
    },
    {
      nombre: "Chaqueta",
      cantidad: 1,
      precio: 50,
      src: "https://via.placeholder.com/300x200.png?text=Image+1",
      alt: "Placeholder Image 1",
      get subtotal() {
        return this.cantidad * this.precio;
      }
    },
    {
      nombre: "Chaqufgsfgsgssgseta",
      cantidad: 1,
      precio: 50,
      src: "https://via.placeholder.com/300x200.png?text=Image+1",
      alt: "Placeholder Image 1",
      get subtotal() {
        return this.cantidad * this.precio;
      }
    },
    {
      nombre: "Chaqueta",
      cantidad: 1,
      precio: 50,
      src: "https://via.placeholder.com/300x200.png?text=Image+1",
      alt: "Placeholder Image 1",
      get subtotal() {
        return this.cantidad * this.precio;
      }
    },
    ]
};
// Custom components styled
const TableContainer = styled(Paper)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1fr',
  padding: 1,
  margin: '0 auto',
  maxWidth: '600px'
}));

const TableSection = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'subgrid',
  gridColumn: '1/-1',
  padding: '8px 4px',
}))
const HeadCell = styled(Typography)(() => ({
  fontWeight: '600',
  fontSize: '0.9rem',
  justifySelf: 'end'

}))
