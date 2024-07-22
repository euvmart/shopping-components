import { Dashboard } from "../../../components/layout/dashboard";
import { Typography, Button, Box, TextField, IconButton } from "@mui/material";
import { ChevronLeft, FilterAlt, FormatListBulleted } from "@mui/icons-material";
import { useRouter } from "next/router";
import DetailsProductCard from "../../../components/ui/detailsProductCard";

export default function Details() {
  const router = useRouter()
  return (
    <Dashboard>
      <Box component={'section'} m={3}>
        {/*store header (back button and search bar) --> component / layout */}
        <Box rowGap={2} component={'header'} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Button
            onClick={() => router.back()}
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

        {/* Details Product */}

        <Box display='flex' flexDirection='column'
          sx={{
     
            height: {
              md: '80vh'
            },
          }}>
          {/* Details product */}
          <DetailsProductCard />

          {/* Suggest products (not today)*/}
        </Box>

      </Box>
    </Dashboard>
  )
}