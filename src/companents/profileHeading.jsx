import {Box, Stack, } from '@mui/material';
import {Avatar} from '@mui/material';


export const Header = () => {
    return(
        <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" gap={3} alignItems="center">
            <Avatar alt="Travis Howard" src="" />
                <Box>Alppinae</Box>
            </Stack>
            <Box>...</Box>
        </Stack>
    )
}