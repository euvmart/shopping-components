import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRef, useState } from "react";

export function LabelClipboard({ content, typographyProps, buttonProps }) {
  const dataToCopy = useRef(content)
  const [openTooltip, setOpenTooltip] = useState(false)

  const handleClickClipboard = () => {
    navigator.clipboard.writeText(dataToCopy.current)
    setOpenTooltip(true)
   setTimeout(() => setOpenTooltip(false), 500)

  }
  return (
    <Box display='flex' gap={2} alignItems='center'>
      <Tooltip
        title='Copiado'
        placement="top"
        arrow
        leaveDelay={200}
        PopperProps={{
          disablePortal: true,
        }}
        open={openTooltip}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <Typography variant="body2" {...typographyProps} >{content}</Typography>
      </Tooltip>
      <IconButton
        onClick={handleClickClipboard}
        size="small"
        {...buttonProps}>
        <ContentCopyIcon fontSize="1rem" />
      </IconButton>
    </Box>
  )
}