import NeoScanIO from './NeoScanIO'; 

const ApiMaker = {
    Explorer (host) {
        return Object.create(this.host[host]);
    },

    host: {
        neoscanio: NeoScanIO
    }
}

export default ApiMaker;