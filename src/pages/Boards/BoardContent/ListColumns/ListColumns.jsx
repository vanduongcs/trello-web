import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
    {/*
      SortableContext yêu cầu items là dạng mảng (các phần tử nguyên thủy)
      Không cho phép dạng mảng với các object bên trong
      Nếu là các object thì không có animation
      */}
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
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
        {columns?.map((column) => {
          return <Column key={column._id} column={ column }/>
        })}

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
    </SortableContext>
  )
}

export default ListColumns
