import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { useEffect, useState } from 'react'

{/* Keo Tha */}
import { DndContext,
  //PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {

  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  //const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  // or
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  // 250 -> thời gian nhấn giữ, tolerance: dung sai cảm ứng (5px). Dung sai cảm ứng là khoảng cách chuyển động chấp nhận trước khi thao tác giữ + kéo bị hủy bỏ
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  const mySensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      const oldIndex = orderedColumnsState.findIndex(c => c._id === active.id)
      const newIndex = orderedColumnsState.findIndex(c => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

      setOrderedColumnsState(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensor={mySensors}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#475167' : '#9cccff' ),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns = { orderedColumnsState }/>
      </Box>
    </DndContext>
  )
}

export default BoardContent