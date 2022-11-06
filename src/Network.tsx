import { FC } from "react";
import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import configFile from "./config.json";
import Button from "@mui/material/Button";

const config: any = configFile;

export const Network: FC = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
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
      {wallet && (
          <div>
              <label>Switch Chain</label>
              {settingChain ? (
                  <span>Switching chain...</span>
              ) : (
                  <select
                      onChange={({ target: { value } }) => {
                          if (config[value] !== undefined) {
                              setChain({ chainId: value })
                          } else {
                              alert("No deploy on this chain")
                          }
                          }
                      }
                      value={connectedChain?.id}
                  >
                      {chains.map(({ id, label }) => {
                          return (
                              <option key={id} value={id}>
                                  {label}
                              </option>
                          );
                      })}
                  </select>
              )}
          </div>
      )}
    </div>
  );
};