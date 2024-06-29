import {Box, Stack, } from '@mui/material';
import {Avatar} from '@mui/material';

export const ProfileCard = ({id}) => {
    console.log(id)
    return(
        <Stack>
        <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" gap={3} alignItems="center">
            <Avatar alt="Travis Howard" src="" />
                <Box>Alppinae</Box>
            </Stack>
            <Box>...</Box>
        </Stack>
        <Stack height="300px" width="500px" margin={"auto"}>
        <img src={`https://picsum.photos/300/500?random=${id}`}/> 
        </Stack>
    </Stack>
)
}