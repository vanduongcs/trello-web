import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material'
import Box from '@mui/material/Box'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
function ModeSelector() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl size="small">
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{ 
          color: '#f5f6fa',
          '&.Mui-focused': {
            color: '#f5f6fa'
          }
        }}
      >Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{ 
          minWidth: '120px',
          color: '#f5f6fa',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#f5f6fa'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f5f6fa'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f5f6fa'
          },
          '.MuiSvgIcon-root': {
            color: '#f5f6fa'
          }
        }}
      ><MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon></LightModeIcon>Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon></DarkModeOutlinedIcon>Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon></SettingsBrightnessIcon>System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelector
