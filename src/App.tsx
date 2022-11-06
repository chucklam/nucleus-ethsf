import * as React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Network } from "./Network";

import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";

const injected: any = injectedModule();
init({
    wallets: [injected],
    chains: [
        {
            id: "0x7a69",
            token: "ETH",
            label: "localhost",
            rpcUrl: "http://localhost:8545",
        },
        {
            id: "0x5",
            token: "GoerliETH",
            label: "Goerli Test Network",
            rpcUrl: "https://eth-goerli.g.alchemy.com/v2/demo",
        },
    ],
    appMetadata: {
        name: "Cartesi Rollups Echo DApp",
        icon: "<svg><svg/>",
        description: "Demo app for Cartesi Rollups",
        recommendedInjectedWallets: [
            { name: "MetaMask", url: "https://metamask.io" },
        ],
    },
});

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccountBalanceIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Nucleus
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Nucleus Protocol
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Lend crypto safely
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Network />
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}
      </main>
    </ThemeProvider>
  );
}