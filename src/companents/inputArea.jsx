import { Stack, Typography } from "@mui/material"
import { useState } from "react"


export const InputArea = () => {
    const [user , setUser] = useState("profile_Name")
    const [postContent, setPostContent] = useState('ygdsysıudgudsgıudshıugsdg')
 return(
    <Stack direction="row"  gap={1}>
        <Typography variant="h5" component={"h2"}>{user}</Typography>
        <Typography variant="body1" component={"span"}>{postComment}</Typography>

    </Stack>
 )
}