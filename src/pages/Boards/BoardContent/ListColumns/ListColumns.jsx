import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'

function ListColumns() {
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': {
        m: 2
      }
    }}>
      <Column />
      <Column />
      {/* Add new column */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '5px',
        height: 'fit-content',
        bgcolor: '#2f94ff'
      }}>
        <Button
          sx={{
            color: '#f5f6fa',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2,
            py: 1
          }}
          startIcon={<AddBoxIcon />}
        >Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListColumns
