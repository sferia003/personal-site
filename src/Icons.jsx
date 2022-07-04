import * as React from 'react';

import { Box } from '@mui/system';

import { LinkedIn, AssignmentInd, Email, GitHub } from '@mui/icons-material';
import Icon from './Icon';

const Icons = () => {
    return (
        <Box display={'flex'} justifyContent={'space-around'}>
            <Icon icon={LinkedIn} open={'https://www.linkedin.com/in/stephen-feria-10b99b19a'} />
            <Icon icon={AssignmentInd} open={'https://drive.google.com/file/d/1_iqwzJrMBJ1umxLH5qfQHSDgaQRAOXhk/view?usp=sharing'} />
            <Icon icon={Email} redirect={'mailto:sferia003@gmail.com'} />
            <Icon icon={GitHub} open={'https://github.com/sferia003'} />
        </Box >)
};

export default Icons;