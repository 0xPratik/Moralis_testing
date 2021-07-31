import { Box,Heading,Text,Image,Button } from "@chakra-ui/react"
import { useMoralis } from "react-moralis";


export default function Home() {
   const {Moralis,user} = useMoralis();
//    console.log("UserData",user);
//    console.log("Email",user.get("email"));
//    console.log("UserName",user.get("username"));


    const getBalances = async() => {
        const options = { chain: 'matic', address: "0x452181dAe31Cf9f42189df71eC64298993BEe6d3" }
        const balances = await Moralis.Web3.getAllERC20(options);
        let b = balances[0].balance / 10**18;
        console.log(b);
        console.log("BALANCES",balances);
    }

    const getTransaction = async() => {
        const options = { chain: "matic", address: "0x452181dAe31Cf9f42189df71eC64298993BEe6d3", order: "desc" };
        const transactions = await Moralis.Web3.getTransactions(options);
        console.log("Transactions",transactions);
    }

    const numberofTransactions = async() => {
        const options = {chain:"matic",address:"0x452181dAe31Cf9f42189df71eC64298993BEe6d3"}
        const numTx = await Moralis.Web3.getTransactionsCount(options);
        console.log(numTx);
    }
    return (
        <Box>
            <Heading>This is the Home Page</Heading>
            <Button onClick={getBalances}>Get Balance</Button>
            <Button onClick={getTransaction}>Get Transaction</Button>
            <Button onClick={numberofTransactions}>No of Transactions</Button>


        </Box>
    )
}
