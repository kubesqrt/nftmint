import {useState} from 'react';
import {ethers, BigNumber} from 'ethers'
import roboPunksNFT from './RoboPunksNFT.json'

const roboPunksNFTAddress = '0x6548346B417AC7994D7504165cb2CDaDCd65b629';

const MainMint = ({accounts,SetAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response)
            } catch (err){
                console.log("error", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1)
    }

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <div>
            <h1>RoboPunks</h1>
            <p>It's 2078. LFG</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount}/>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onclick={handleMint}>Mint</button>
                </div>
                ) : (
                <p>You must connect first!</p>
            )}
        </div>
    )
}

export default MainMint;