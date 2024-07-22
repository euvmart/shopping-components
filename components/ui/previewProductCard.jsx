import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function PreviewProductCard() {
  const router = useRouter();

  return (

    <Card component={'article'} sx={{
      height: '100%',
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'transform .2s ease-in-out'
      }
    }}>
      <CardActionArea onClick={() => router.push(`store/details`)}>
        <CardMedia
          sx={{ objectFit: 'contain' }}
          component="img"
          height="140"
          image="https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/0984541/1.jpg?4942"
          alt="sports set for kids"
        />
        <CardContent >
          <Typography gutterBottom fontWeight={500} noWrap>
            Conjunto deportivo
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph noWrap>
            nothing interesting to say nothing interesting to say nothing interesting to say nothing interesting to say nothing interesting to say
          </Typography>
          <Typography component={'div'} sx={{ display: 'flex', gap: 6, marginTop: 2, color: 'var(--primary-color)' }} gutterBottom>
            <Typography variant='h6'>USD$</Typography>
            <Typography variant='h6'>24.30</Typography>
          </Typography>
          <Typography sx={{ display: 'flex', gap: 2, opacity: 0.8 }} >
            <Typography variant='caption' >Cantidad disponible: </Typography>
            <Typography variant='caption'>30</Typography>
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

  );
}