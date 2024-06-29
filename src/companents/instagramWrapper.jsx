import { ProfileCard } from "./profileCard"
import { Stack } from '@mui/material';

export const InstagramWrapper = () => {
    return(
        <Stack height="100%">
            {[...Array(10).keys()].map(element => {
                return (
                    <ProfileCard key={element} id={element}/>
                )
            })}
        </Stack>
)
}
