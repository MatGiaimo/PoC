const baseUrl = "https://neoscan.io/api/main_net/v1/";

var NeoScanIO = {
    getAddress(hash) {
        console.log('tbd')
    },
    getAsset(hash) {
        console.log('tbd');
    },
    getBalance(hash) {
        console.log('tbd');
    },
    // /api/main_net/v1/get_transaction/{hash_string}
    getTransaction(hash) {
        return fetch(baseUrl + "get_transaction/" + hash)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch(err => console.warn(err));
    },
    getHeight() {
        console.log('tbd');
    },
    getHighestBlock() {
        console.log('tbd');
    },
    getLastBlocks() {
        console.log('tbd');
    },
    // api/main_net/v1/get_last_transactions
    getLastTransactions(type) {
        return fetch(baseUrl + "get_last_transactions")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch(err => console.warn(err));
    }
}

export default NeoScanIO;