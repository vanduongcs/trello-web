import ModeSelector from '~/components/ModeSelect'
import Box from '@mui/material/Box'

function index() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelector />
    </Box>
  )
}

export default index
