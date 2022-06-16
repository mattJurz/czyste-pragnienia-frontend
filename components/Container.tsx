import React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system';

import { Property } from 'csstype';
interface Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  paddingX?: string | number;
  paddingY?: ResponsiveStyleValue<
    | Property.PaddingTop<string | number>
    | Property.PaddingTop<string | number>[]
  >;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const Container = ({
  children,
  paddingX = 2,
  paddingY = { xs: 4, sm: 6, md: 8 },
  ...rest
}: Props): JSX.Element => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={1}
    margin={'0 auto'}
    paddingX={paddingX}
    paddingY={paddingY}
    {...rest}
  >
    {children}
  </Box>
);

export default Container;
