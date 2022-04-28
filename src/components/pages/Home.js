import { Typography,Box,makeStyles,Grid,TableContainer,Table,TableBody,TableCell,
    TableHead,TableRow,Paper,IconButton,TextField,Button,Tooltip } from '@material-ui/core'

import { deepPurple,green,orange } from  '@material-ui/core/colors';
import {Link} from "react-router-dom"
import {Visibility} from "@material-ui/icons"
import {EditIcon} from "@material-ui/icons"
import {DeleteIcon} from "@material-ui/icons"

// import {EditIcon,VisibilityIcon,DeleteIcon} from '@material-ui/core/icons';

const  useStyles =makeStyles({
    headingCOlor: {
        backgroundColor:deepPurple[400],
        color:"White",
        textAlign:"center"
    },
    addstuColor:{
        backgroundColor:green[400],
        color:'white',
        textAlign: "center",

    },
    // student list Section
    TableHeadCell  :{
    color:"white",
    fontWeight:"bold",
    fontSize: 16
    },
    addstuColor:{
        backgroundColor:"green[400",
        color:"white"
    },
    stuListColor:{
        backgroundColor:orange[400],
        color:"white"
    }
})

    const Home = () => {
         const classes = useStyles();
 return (<>
         {/* ++++++++  Top Heading  ++++++ */}
         <Box className={classes.headingCOlor} p={2} mb={2}>
             <Typography variant="h2"> React CRUD with API Call </Typography>
         </Box>

         {/* ++++++++  Add Student Section  ++++++ */}

    <Grid container > 
          {/* ++++++++  Add Student Heading Section  ++++++ */}
         <Grid item md={6} xs={12}>   
         <Box  p={2} className={classes.addstuColor} mb={2}>
         <Typography variant='h4'> Add Student </Typography>
         </Box>
    {/* ++++++++  Add Student Form  ++++++ */}
         <form noValidate>
         <Grid container spacing={2}> 
         
                                           {/* ++++++++  Name Section  ++++++ */}
            <Grid item xs={12}>
      <TextField autoComplete="stuname" name="stuname" variant='outlined' required fullWidth id='stuname' label="Name"/>
           </Grid>    

                                          {/* ++++++++  Email Section  ++++++ */}
           <Grid item xs={12} >
      <TextField autoComplete="email" name="email" variant='outlined' required fullWidth id='email' label="Email"/>       
           </Grid>
            
           {/* +++++++++++++++      Add Button +++++++++++++++++  */}

         <Box m={3}>
          <Button type='submit' variant='contained' color='primary' fullWidth>   Add  </Button>
         </Box>


         </Grid> 
         </form>
          </Grid>
          {/* Student LIst Section   Table */}
           

           <Grid item md={ 6} xs={12}>
           <Box textAlign="center" p={2} className={classes.stuListColor}>
               <Typography variant='h4'> Student List </Typography>
           </Box>

           <TableContainer component={Paper}>
               <Table>
                                {/*Table Heading*/}
                   <TableHead>  
                       <TableRow style={{backgroundcolor:"#616161"}}>
                       <TableCell align='center' className={classes.TableHeadCell}> No  </TableCell>
                          <TableCell align='center' className={classes.TableHeadCell}> Name   </TableCell>
                          <TableCell align='center' className={classes.TableHeadCell}>Email      </TableCell>
                       </TableRow>
                   </TableHead>

                   {/*Table Body*/}

                   <TableBody>
                       <TableRow>
                       <TableCell align='center'>1</TableCell>
                       <TableCell align='center'>Asad</TableCell>
                       <TableCell align='center'> asad@gmail.com </TableCell>

                   {/*Icons Section*/}
    
                       <TableCell align='center'>
                         <Tooltip title="View">                  {/*View Section*/}
                         <IconButton> <Link  to='/view/1'>
                            <Visibility color='primary' />
                         </Link>          
                         </IconButton>
                          </Tooltip>

                          <Tooltip title="Edit">  {/*Edit Section*/}
                         <IconButton> <Link  to='/edit/1'>
                            <EditIcon color='primary' />
                         </Link>          
                         </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete"> {/*Delete Section*/}
                         <IconButton> 
                            <DeleteIcon color='primary' />
                         </IconButton>
                          </Tooltip>
                       </TableCell>
                       </TableRow>
                   </TableBody>  
               </Table>
           </TableContainer>
           </Grid>

    </Grid>    {/* ++++++++  Add Student Form End  ++++++ */}

    </>)
 
}

export default Home