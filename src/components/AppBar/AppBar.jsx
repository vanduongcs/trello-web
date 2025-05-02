import {useState} from 'react'
import ModeSelector from '~/components/ModeSelect/ModeSelector'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close';

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
import AddCircleIcon from '@mui/icons-material/AddCircle'
import InputAdornment from '@mui/material/InputAdornment'


function AppBar() {
  const [searchValue, SetSearchValue] = useState('')
  return (
    <Box px={1} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#191e24' : '#0067aa' )
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CycloneIcon sx={{ color: '#f5f6fa' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SvgIcon component={trello} fontSize='small' inheritViewBox sx={{ color: '#f5f6fa' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f5f6fa' }}>Trello</Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Workspaces />
            <Recent />
            <Startes />
            <Templates />
            <Button variant="outlined"
              startIcon={<AddCircleIcon />}
              sx={{
                color: '#f5f6fa',
                border: 'none',
                '&:hover': {
                  border: 'none'
                }
              }}
            >Create</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          size='small'
          value={searchValue}
          onChange={(e) => SetSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#f5f6fa' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small'
                onClick={() => SetSearchValue('')}
                sx={{
                  color: '#f5f6fa',
                  cursor: 'pointer',
                  display: searchValue ? 'inline-block' : 'none' }}
              />
            )
          }}
          sx={{
            minWidth: '100px',
            maxWidth: '170px',
            '& label': { color: '#f5f6fa' },
            '& input': { color: '#f5f6fa'},
            '& label.Mui-focused': { color: '#f5f6fa' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#f5f6fa'
              },
              '&:hover fieldset': {
                borderColor: '#f5f6fa'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#f5f6fa'

              }
            } }} />
        <ModeSelector />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer', color: '#f5f6fa' }}>
            <NotificationsNoneIcon/>
          </Badge>
        </ Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: '#f5f6fa' }}/>
        </ Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
