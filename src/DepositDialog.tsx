import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import { ethers } from "ethers";
import { useWallets } from "@web3-onboard/react";

import { useRollups } from "./useRollups";
import { IERC20__factory } from "./generated/rollups";

type DepositDialogProps = {
  open: boolean;
  onClose: any;
};

const DepositDialog = ({ open, onClose }: DepositDialogProps) => {
  const [erc20Amount, setErc20Amount] = useState<number>(0);
  const erc20Token = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";

  const rollups = useRollups();
  const [connectedWallet] = useWallets();
  const provider = new ethers.providers.Web3Provider(
      connectedWallet.provider
  );

  const depositErc20ToPortal = async (token: string,amount: number) => {
    console.log(rollups);
    if (rollups) {
        const data = ethers.utils.toUtf8Bytes(`Deposited (${amount}) of ERC20 (${token}).`);
        //const data = `Deposited ${args.amount} tokens (${args.token}) for DAppERC20Portal(${portalAddress}) (signer: ${address})`;
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress()

        const portalAddress = rollups.erc20PortalContract.address;
        const tokenContract = signer ? IERC20__factory.connect(token, signer) : IERC20__factory.connect(token, provider) ;
        const signerBalance = await tokenContract.balanceOf(signerAddress);

        // query current allowance
        const currentAllowance = await tokenContract.allowance(signerAddress, portalAddress);
        if (signerBalance > currentAllowance) {
            // Allow bank to withdraw `amount` tokens from signer
            const tx = await tokenContract.approve(portalAddress, ethers.utils.parseEther(`${amount}`));
            const receipt = await tx.wait(1);
            const event = (await tokenContract.queryFilter(tokenContract.filters.Approval(), receipt.blockHash)).pop();
            if (!event) {
                throw Error(`could not approve ${amount} tokens for DAppERC20Portal(${portalAddress})  (signer: ${signerAddress}, tx: ${tx.hash})`);
            }
        }

        rollups.erc20PortalContract.erc20Deposit(token,ethers.utils.parseEther(`${amount}`),data);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Deposit CTSI</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deposit CTSI token:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="amount"
          label="Amount"
          type="number"
          fullWidth
          variant="standard"
          value={erc20Amount}
          onChange={(e) => setErc20Amount(Number(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => {
          console.log(erc20Amount);
          depositErc20ToPortal(erc20Token, erc20Amount);
          onClose();
        }} disabled={!rollups}>
          Deposit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DepositDialog;