import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Tooltip from '@mui/material/Tooltip'
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment';

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#475167' : '#9cccff' ),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}>
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
        {/* Box column */}
        <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0' ),
          ml: 2,
          borderRadius: '5px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>
        {/* Column header */}
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>Column Title</Typography>
          <Box>
            <Tooltip title="More options">
              < ArrowDropDownIcon
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'text.primary', cursor: 'pointer'}}/>
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddToPhotosIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add New Card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon><BookmarkAddIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Archieve this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><BookmarkRemoveIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* Column content */}
        <Box sx={{
          p: '0 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} -
          ${theme.spacing(5)} -
          ${COLUMN_FOOTER_HEIGHT} -
          ${COLUMN_HEADER_HEIGHT})`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf',
          }
        }}>
          <Card sx={{ 
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
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
        </Box>
        {/* Column footer */}
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button startIcon={<AddToPhotosIcon />}>Add New Card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon
              sx={{ cursor:'pointer' }}/>
          </Tooltip>
        </Box>
        </Box>

        {/* Box column 2*/}
        <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0' ),
          ml: 2,
          borderRadius: '5px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>
        {/* Column header */}
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>Column Title</Typography>
          <Box>
            <Tooltip title="More options">
              < ArrowDropDownIcon
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'text.primary', cursor: 'pointer'}}/>
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddToPhotosIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add New Card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon><BookmarkAddIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Archieve this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><BookmarkRemoveIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* Column content */}
        <Box sx={{
          p: '0 5px',
          m: '0 5px',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} -
          ${theme.spacing(5)} -
          ${COLUMN_FOOTER_HEIGHT} -
          ${COLUMN_HEADER_HEIGHT})`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf',
          }
        }}>
          <Card sx={{ 
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
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
          <Card sx={{
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
              <Typography>Other card</Typography>
            </CardContent>
          </Card>
        </Box>
        {/* Column footer */}
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button startIcon={<AddToPhotosIcon />}>Add New Card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon
              sx={{ cursor:'pointer' }}/>
          </Tooltip>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent