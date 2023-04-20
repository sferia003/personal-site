import * as React from 'react';

import {Grid, Typography} from '@mui/material';

const Url = ({url}) => {
    return (
        <Grid container justifyContent='center'>
            <Typography>
                {url}
            </Typography>
        </Grid>
        )
};

export default Url;
