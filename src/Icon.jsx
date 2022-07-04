import * as React from 'react';

import { IconButton } from '@mui/material';

const Icon = ({ icon: Icon, open, redirect }) => {
    return (
        <IconButton color={'secondary'} onClick={() => {
            if (open) {
                window.open(open);
            } else if (redirect) {
                window.location.href = redirect;
            }
        }}>
            <Icon sx={{ fontSize: 40 }} />
        </IconButton>);
};

export default Icon;
