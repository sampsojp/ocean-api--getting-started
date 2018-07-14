import createOcean from 'the-ocean'
import Web3 from 'web3'
(async () => {
    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    let ocean = await createOcean({
        api: {
            key: '4b858b7801ffb0c5ee990d5d92519cc8',
            secret: 'ec53d9985f3d531eb5d43497939a1872d888da67809a4de104f2a0a1482542dc',
            baseURL: 'https://kovan.theoceanx.com/api/v0'
        },
        web3Provider: provider
    })
    const pairs = await ocean.marketData.tokenPairs()
    const myPair = pairs[0]
    console.log('Trading on pair : ', myPair.baseToken.symbol + '/' + myPair.quoteToken.symbol)
    const data = {
        baseTokenAddress: myPair.baseToken.address,
        quoteTokenAddress: myPair.quoteToken.address,
        side: 'buy',
        orderAmount: '180000000000000000',
        feeOption: 'feeInNative'
    }
    console.log('Market order result :', await ocean.trade.newMarketOrder(data))
})()