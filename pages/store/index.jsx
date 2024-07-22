import { Dashboard } from "../../components/layout/dashboard";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { FilterAlt, FilterAltOff, FormatListBulleted, ChevronLeft } from "@mui/icons-material";
import { PreviewProductCard } from "../../components/ui/previewProductCard";
import { useRouter } from "next/router";
export default function Home() {
  const router= useRouter()
  return (
    <Dashboard>
      <Box component={'section'} m={3} >
        <Box rowGap={2} component={'header'} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Button
          onClick={()=>router.back()}
            size="small"
            variant="contained"
            startIcon={<ChevronLeft />}
            sx={{
              width: {
                xs: '100%',
                sm: 'auto'
              },
              backgroundColor: 'var(--primary-color)'
            }}

          >
            <Typography sx={{ textTransform: 'capitalize' }}  >Volver</Typography>
          </Button>
          <Box sx={{
            display: 'flex',
            flexGrow: {
              xs: 1,
              sm: 0
            }
          }}>
            <TextField id=""
              variant="outlined"
              label="Buscar"
              type="search"
              size="small"
              sx={{ flexGrow: 1 }}
            />
            <IconButton aria-label="filter" size="medium">
              <FilterAlt fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="view list" size="medium">
              <FormatListBulleted fontSize="inherit" />
            </IconButton>

          </Box>
        </Box>
        <Box
          mt={4}
          display="grid"
          component={'main'}
          gridTemplateColumns={'repeat(auto-fill, minmax(180px, 1fr)) '}
          gridTemplateRows={'repeat(auto-fill,300px)'}
          gap={3}>
          <PreviewProductCard />
          <PreviewProductCard />
          <PreviewProductCard />
          <PreviewProductCard />
        </Box>
      </Box>
    </Dashboard>
  )
}
