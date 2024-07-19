import * as React from 'react';
import {
  Box, Button, TextField, MenuItem, Typography,
  Grid, IconButton, Radio, RadioGroup, FormControlLabel
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LinkIcon from '@mui/icons-material/Link';

export default function AddLeadContactInfo() {
  const [audience, setAudience] = React.useState('employees'); 

  const today = new Date().toISOString().split('T')[0]; 

  return (
    <Box sx={{ p: 2, maxWidth: 2900, mx: 'auto', backgroundColor: '#f3f4f8', ml: '250px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Add New Article
      </Typography>
      <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 1 }}>
        <Box sx={{ mb: 3 }}>
   <Typography variant="h6" gutterBottom color="black">
            Article Details
          </Typography>
          <RadioGroup
            aria-label="audience"
            name="audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            row
            sx={{ mb: 2 }}
          >
            <FormControlLabel value="employees" control={<Radio />} label="For Employees" />
            <FormControlLabel value="clients" control={<Radio />} label="For Clients" />
          </RadioGroup>
       
          <Box sx={{ borderBottom: '1px solid #f3f4f8', ml: 0, mb: 2 }}></Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">Article Heading <span style={{ color: '#984a55', fontSize: 'small' }}>*</span></Typography>
              <TextField fullWidth placeholder="Article Heading" required id="task" 
              sx={{
                '& fieldset': { 
                  borderColor: '#efeff1',
                  maxHeight: '90%'
                } 
              }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">Article Category</Typography>
              <Grid container>
                <Grid item xs={9}>
                  <TextField select fullWidth defaultValue="--" id="task-category" 
                  sx={{
                    '& fieldset': { 
                      borderRadius: '5px 0 0 5px',
                      borderColor: '#efeff1',
                      maxHeight: '90%'
                    } 
                  }}
                  >
                    <MenuItem value="--">--</MenuItem>
                    <MenuItem value="Article 1">Article 1</MenuItem>
                    <MenuItem value="Article 2">Article 2 2</MenuItem>
                    <MenuItem value="Article 3">Article 3</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="outlined"
                    sx={{ height: '81%', borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5, color: 'gray', textTransform: 'none', borderColor:'#efeff1' }}
                    aria-label="Add Article Category"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
         
          <Typography variant="body2" color="gray" mt={2}>
            Description
          </Typography>
          <Box display="flex" flexDirection="column" mt={1}>
            <Box display="flex" gap={1} sx={{ border: '1px solid #efeff1', borderRadius: '5px 5px 0  0', p: 1 }}>
              <Typography sx={{mt: 1}}>
                Normal
              </Typography>
              <IconButton>
                <FormatBoldIcon />
              </IconButton>
              <IconButton>
                <FormatItalicIcon />
              </IconButton>
              <IconButton>
                <FormatUnderlinedIcon />
              </IconButton>
              <IconButton>
                <StrikethroughSIcon />
              </IconButton>
              <IconButton>
                <FormatListBulletedIcon />
              </IconButton>
              <IconButton>
                <FormatListNumberedIcon />
              </IconButton>
              <IconButton>
                <InsertPhotoIcon />
              </IconButton>
              <IconButton>
                <LinkIcon />
              </IconButton>
            </Box>
            <TextField
              fullWidth
              multiline
              rows={4}
              InputProps={{ 
                sx: { 
                  height: 100,
                  '& fieldset': { 
                    borderRadius: '0 0 5px 5px',
                    borderColor: '#efeff1'
                  } 
                 } 
              }}
            />
          </Box>
        </Box>
        
        <Typography variant="body1" color="gray" ml={2}>
          Add File
        </Typography>
        <Box
          sx={{
            ml: 2,
            p: 2,
            border: '1px solid #efeff1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
            borderRadius: 1,
            m: 2  
          }}
        >
          <Typography variant="body1" color="gray" sx={{ textAlign: 'center'}}>
            Choose a file
          </Typography>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', gap: 1}}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#ff8300', color: 'white', '&:hover': { backgroundColor: '#ff8300' } }}
            startIcon={<SaveIcon />}
            aria-label="Save"
          >
            Save
          </Button>
          
          <Button
            variant="text"
            sx={{ color: 'black' }}
            aria-label="Cancel"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
