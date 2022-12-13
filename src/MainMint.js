import {useState} from 'react';
import {ethers, BigNumber} from 'ethers'
import RoboPunks from './/RoboPunksNFT.json'
const jsonData = require('./abi.json');

const roboPunksNFTAddress = '0x6548346B417AC7994D7504165cb2CDaDCd65b629';

const MainMint = ({accounts,SetAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [supply, setSupply] = useState(0)
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                RoboPunks.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response: ', response)
            } catch (err) {
                console.log("error", err)
            }
        }
    }
    async function showMint() {
        const contract = new ethers.Contract('0x6548346b417ac7994d7504165cb2cdadcd65b629', jsonData, window.ethereum)
        const data = await contract.functions.totalSupply()
        console.log("10")
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
                    <button onClick={handleMint}>Mint</button>
                </div>
                ) : (
                <p>You must connect first!</p>
            )}
            <div>
                <button onClick={showMint}>Number</button>
            </div>
        </div>
    )
}

export default MainMint;