import {Box, Stack, } from '@mui/material';
import {Avatar} from '@mui/material';
import { LikeAndComments } from './LikeAndComments';
import { Header } from './profileHeading';



export const ProfileCard = ({id}) => {
    return(
        <Stack>
       <Header/>
       
        <Stack height="300px" width="500px" sx={{marginInline: "auto" }} >
        <img src={`https://picsum.photos/500/300?random=${id}`}/> 
        
        </Stack>
        <LikeAndComments/>
    </Stack>
)
}