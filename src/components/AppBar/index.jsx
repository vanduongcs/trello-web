import ModeSelector from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import CycloneIcon from '@mui/icons-material/Cyclone'
import SvgIcon from '@mui/icons-material/Cyclone'

import { ReactComponent as trello } from '~/assets/trello.svg'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Startes from './Menus/Startes'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles'


function index() {
  return (
    <Box px={1} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CycloneIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SvgIcon component={trello} fontSize='small' inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
          <Workspaces />
          <Recent />
          <Startes />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' />
        <ModeSelector />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer', color: 'primary.main' }}>
            <NotificationsNoneIcon/>
          </Badge>
        </ Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }}/>
        </ Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default index
