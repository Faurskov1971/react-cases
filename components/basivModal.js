import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaInfoCircle } from 'react-icons/fa';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const buttonStyle = {
  color: "#b4bf5e",
  width:"40px",
  height:"40px",
  fontSize:"24px",
}

export default function BasicModal({teaser,head,why,how,features}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <hr />
    <span style={{color: "#b4bf5e",fontSize:"20px"}}>{teaser}</span>
      <Button  
        onClick={handleOpen}
        style={buttonStyle}
        ><FaInfoCircle/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2">
            {head}
          </Typography>
          <Typography 
            id="modal-modal-description" 
            sx={{ mt: 2 }}>
            <strong>WHY</strong>
            <br/>
            {why}
            <br/>
            <br/>
            <strong>HOW</strong>
            <br/>
            {how}
            <br/>
            <br/>
            <strong>Features</strong>
            <ul>
              {
                features.map(feature=>{
                  return(<li>{feature}</li>)
                }
                )}
            </ul>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
