import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {Card as MuiCard} from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{
          p: 1.5,
          '&:last-child': {
            p: 1.5
          }
        }}>
          <Typography>Card Test 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15231691/453801468.0.0.1421786380.jpg?quality=90&strip=all&crop=0.095000000000006%2C0%2C99.81%2C100&w=750"
        title="green iguana"
      />
      <CardContent sx={{
        p: 1.5,
        '&:last-child': {
          p: 1.5
        }
      }}>
        <Typography>Vanduongcs MERN stack</Typography>
      </CardContent>
      <CardActions sx={{
        p: '0 4px 8px 4px'
      }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<GroupIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
