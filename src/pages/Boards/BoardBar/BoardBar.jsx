import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashBoardIcon from '@mui/icons-material/DashBoard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLES = {
  color: '#f5f6fa',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '3px',
  paddingX: '5px',
  '.MuiSvgIcon-root': {
    color: '#f5f6fa'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      // borderBottom: '1px solid rgb(30, 0, 100)',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#353b48' : '#2f94ff' )
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip
          sx={ MENU_STYLES }
          icon={<DashBoardIcon />}
          label={ board?.title }
          onClick={() => {}}/>
        <Chip
          sx={ MENU_STYLES }
          icon={<VpnLockIcon />}
          label={ capitalizeFirstLetter(board?.type) }
          onClick={() => {}}/>
        <Chip
          sx={ MENU_STYLES }
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => {}}/>
        <Chip
          sx={ MENU_STYLES }
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}/>
        <Chip
          sx={ MENU_STYLES }
          icon={<FilterListIcon />}
          label="Filter"
          onClick={() => {}}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button 
          variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{
            color: '#f5f6fa',
            borderColor: '#f5f6fa',
            '&:hover': {
              borderColor: '#f5f6fa'
            }
          }}
        >Invite</Button>
        <AvatarGroup max={4}
          sx={{
            gap: '2px',
            '& .MuiAvatar-root': {
              width: 35,
              height: 35,
              fontSize: 16,
              color: '#f5f6fa',
              backgroundColor: '#2f94ff',
              cursor: 'pointer',
              '&:first-of-type': {
                backgroundColor: '#a4b0be'
              }
            }
          }}>
          <Tooltip title="Vanduongcs">
            <Avatar alt="Vanduongcs"
              src="https://cdn-kmfel.nitrocdn.com/uMVObCziJWycROCfTnqalPiKHatgnzNl/assets/images/optimized/rev-999170d/polar-latitudes.com/wp-content/uploads/2020/01/polar-latitudes-adelie-penguin-highway.jpg" />
          </Tooltip>
          <Tooltip title="Vanduongcs">
            <Avatar alt="Vanduongcs"
              src="https://cdnphoto.dantri.com.vn/XNTJKMeDpvh2IlFKX7OBOrektOc=/thumb_w/1020/2022/07/22/chim-canh-cut-1658467174516.jpg" />
          </Tooltip>
          <Tooltip title="Vanduongcs">
            <Avatar alt="Vanduongcs"
              src="https://cdnphoto.dantri.com.vn/7Mu2c0GVWJmDQtFeSLLMbiyKyCU=/thumb_w/1020/2022/07/22/chim-canh-cut-2-1658467174637.jpg" />
          </Tooltip>
          <Tooltip title="Vanduongcs">
            <Avatar alt="Vanduongcs"
              src="https://cdnphoto.dantri.com.vn/CmpBLFk-iOSRoOy0ggA_jeZQ5qc=/thumb_w/1155/2022/05/20/chim-canh-cut-1653001892350.jpg" />
          </Tooltip>
          <Tooltip title="Vanduongcs">
            <Avatar alt="Vanduongcs"
              src="https://cdnphoto.dantri.com.vn/CmpBLFk-iOSRoOy0ggA_jeZQ5qc=/thumb_w/1155/2022/05/20/chim-canh-cut-1653001892350.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
