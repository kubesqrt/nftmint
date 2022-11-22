import React from "react";
import { Box, Button, Flex, Image, Spacer, Link} from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="centre" padding="30px 30px">
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize="42px" margin="0 15px"/>
                </Link>
            </Flex>
            <div>about</div>
            <div>mint</div>

            {isConnected ? (<p>Connected</p>) : (<button onClick={connectAccount}>Connect</button>)}

        </Flex>
    )
};

export default NavBar;

