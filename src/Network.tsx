import { FC } from "react";
import { useConnectWallet } from "@web3-onboard/react";
// import configFile from "./config.json";
import Button from "@mui/material/Button";

// const config: any = configFile;

export const Network: FC = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  // const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
  return (
    <div>
      {wallet ?
        <Button variant="contained" onClick={() => disconnect(wallet)}>
          Disconnect Wallet
        </Button>
        :
        <Button variant="contained" onClick={() => connect()}>
          {connecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      }
    </div>
  );
};