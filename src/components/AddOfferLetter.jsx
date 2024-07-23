import * as React from 'react';
import {
  Box, Button, TextField, Typography,
  Grid, Checkbox, FormControlLabel, IconButton, Menu, MenuItem
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AddLeadContactInfo() {
  const [audience, setAudience] = React.useState('employees');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const today = new Date().toISOString().split('T')[0];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: 2, maxWidth: 1200, mx: 'auto', backgroundColor: '#f3f4f8', ml: { md: '250px', xs: 'auto' } }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Add Offer Letter
      </Typography>
      <Box sx={{ backgroundColor: 'white', borderRadius: 1 }}>
        <Box sx={{ mb: 3, ml: 2 }}>
          <Typography variant="h6" gutterBottom color="black">
            Job Offer Details
          </Typography>
          <Box sx={{ borderBottom: '1px solid #f3f4f8', ml: 0, mb: 2 }}></Box>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="gray">Job<span style={{ color: '#d50a0a', fontSize: 'small' }}> *</span></Typography>
              <TextField select fullWidth defaultValue="--" id="job"
                sx={{
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
              >
                <MenuItem value="--">--</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="gray">Job Applicant<span style={{ color: '#d50a0a', fontSize: 'small' }}> *</span></Typography>
              <TextField select fullWidth defaultValue="--" id="job-applicant"
                sx={{
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
              >
                <MenuItem value="--">--</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body2" color="gray" mt="4px">
                Offer Expire On <span style={{ color: '#d50a0a', fontSize: 'small' }}>*</span>
              </Typography>
              <TextField type="date" fullWidth defaultValue={today} required id="expire-date" 
                sx={{
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body2" color="gray" mt="4px">
                Expected Joining Date <span style={{ color: '#d50a0a', fontSize: 'small' }}>*</span>
              </Typography>
              <TextField type="date" fullWidth defaultValue={today} required id="joining-date" 
                sx={{
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2} >
            <Grid item xs={12} sm={3} mt="4px">
              <Typography variant="body2" color="gray">Salary <span style={{ color: '#d50a0a', fontSize: 'small' }}>*</span></Typography>
              <TextField fullWidth placeholder="" required id="salary" 
                sx={{
                  width: '100%',
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" color="gray">Rate<span style={{ color: '#d50a0a', fontSize: 'small' }}> *</span></Typography>
              <TextField select fullWidth defaultValue="--" id="rate"
                sx={{
                  width: '100%',
                  '& fieldset': { 
                    borderColor: '#efeff1',
                    maxHeight: '90%'
                  } 
                }}
              >
                <MenuItem value="--">--</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2} >
            <Grid item xs={12} sm={3}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Signature Required"
                sx={{ fontSize: '16px', mt: 0, mb: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Add Salary Structure"
                sx={{ fontSize: '16px', mt: 0, mb: 0 }}
              />
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body1" color="gray" sx={{ ml: 2 }}>
          Add File
        </Typography>
        <Box
          sx={{
            border: '1px solid #efeff1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
            borderRadius: 1,
            mt: 2,
            mb: 2,
            ml: 2,
            mr: 2
          }}
        >
          <Typography variant="body1" color="gray" sx={{ textAlign: 'center' }}>
            Choose a file
          </Typography>
        </Box>
        <Box sx={{ borderBottom: '1px solid #f3f4f8', ml: 0, mb: 2 }}></Box>
        <Box sx={{ mt: 2, display: 'flex', gap: 1, ml: 2, mb: 2 }}>
          <Button
            sx={{ backgroundColor: '#ff8300', color: 'white', '&:hover': { backgroundColor: '#ff8300' }, borderRadius: '4px 0 0 4px' }}
            aria-label="Save"
          >
            Save
          </Button>
          <IconButton
            sx={{ backgroundColor: '#ff8300', color: 'white', '&:hover': { backgroundColor: '#ff8300' }, ml: -1, borderRadius: '0 4px 4px 0' }}
            onClick={handleClick}
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
          </Menu>
          <Button
            variant="text"
            sx={{ color: 'gray' }}
            aria-label="Cancel"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
