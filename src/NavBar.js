import React from "react";

const NavBar = (accounts, setAccounts) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            <div>FB</div>
            <div>Twitter</div>

            <div>about</div>
            <div>mint</div>

            {isConnected ? (
            <p>Connected</p>)
                : (<button onClick={connectAccount}>Connect</button>)
        }
        </div>
    )
};

export default NavBar;

