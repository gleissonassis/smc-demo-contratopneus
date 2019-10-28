import Config from "@/Config";
import BRLTMoney from "@/lib/BRLTMoney";
import SMCRHIMagnesita from "@/lib/SMCRHIMagnesita";
import Web3 from "web3";
var Tx = require('ethereumjs-tx');

class SMC {
  constructor () {
    this.web3 = new Web3(new Web3.providers.HttpProvider(Config.rpcUrl));
    this.brltMoney = new this.web3.eth.Contract(BRLTMoney.abi, Config.brltMoneyContractAddress);
    this.smc = new this.web3.eth.Contract(SMCRHIMagnesita.abi, Config.smcContractAddress);

    this.web3WS = new Web3(Config.wsRPCUrl);
    this.smcWS = new this.web3WS.eth.Contract(SMCRHIMagnesita.abi, Config.smcContractAddress);
  }

  async obterParcelaAtual () {
    return parseInt(await this.smc.methods.parcelaAtual().call()) + 1;
  }

  getEvents () {
    return this.smcWS.events;
  }

  async obterEnderecos () {
    return {
      contratada: await this.smc.methods.contratada().call(),
      contratante: await this.smc.methods.contratante().call(),
      tecnicoContratada: await this.smc.methods.tecnicoContratada().call(),
      tecnicoContratante: await this.smc.methods.tecnicoContratante().call(),
      arbitro: await this.smc.methods.arbitro().call()
    }
  }

  async obterNumeroParcelas () {
    return await this.smc.methods.numeroParcelas().call();
  }

  async obterValorParcela () {
    return (await this.smc.methods.valorParcela().call()) / 10000;
  }

  async obterSaldoContrato () {
    return (await this.obterSaldo(Config.smcContractAddress)) / 1000000000000000000;
  }

  async obterSaldo (endereco) {
    return await this.brltMoney.methods.balanceOf(endereco).call();
  }

  async calcularVariacao(indicador) {
    return await this.smc.methods.calcularVariacao(indicador).call();
  }

  async calcularParcela() {
    return await this.smc.methods.calcularParcela().call();
  }

  async calcularIndicador (calibragem, quilometragem, terreno) {
    return await this.smc.methods.calcularIndicador(calibragem, quilometragem, terreno).call();
  }

  async obterMedicaoAtual () {
    return await this.smc.methods.obterMedicaoAtual().call();
  }

  async enviarTransaction (publicKey, privateKey, data) {
    return new Promise((resolve, reject) => {
      this.web3.eth.getTransactionCount(publicKey, (err, txCount) => {
        if (err) {
          reject(err);
          return;
        }

        const txObject = {
          nonce: this.web3.utils.toHex(txCount),
          value: '0x0',
          to: Config.smcContractAddress,
          gasLimit: this.web3.utils.toHex(Config.gasLimit),
          gasPrice: this.web3.utils.toHex(this.web3.utils.toWei(Config.gasPrice.toString(), 'gwei')),
          data: data,
        }

        const tx = new Tx(txObject)
        tx.sign(Buffer.from(privateKey, "hex"))

        const serializedTx = tx.serialize()
        const raw = "0x" + serializedTx.toString("hex")

        this.web3.eth.sendSignedTransaction(raw)
          .then(resolve)
          .catch(reject);
      });
    });
  }

  async registrarMedicao (publicKey, privateKey, calibragem, quilometragem, terreno) {
    return await this.enviarTransaction(publicKey, privateKey, this.smc.methods.registrarMedicao(calibragem, quilometragem, terreno).encodeABI());
  }

  async aprovarMedicao (publicKey, privateKey) {
    return await this.enviarTransaction(publicKey, privateKey, this.smc.methods.aprovarMedicao().encodeABI());
  }

  async reprovarMedicao (publicKey, privateKey) {
    return await this.enviarTransaction(publicKey, privateKey, this.smc.methods.reprovarMedicao().encodeABI());
  }

  async abrirParcela (publicKey, privateKey) {
    return await this.enviarTransaction(publicKey, privateKey, this.smc.methods.abrirParcela().encodeABI());
  }

  async reiniciarParcela (publicKey, privateKey) {
    return await this.enviarTransaction(publicKey, privateKey, this.smc.methods.reiniciarParcela().encodeABI());
  }

  async finalizarParcelaAtual (publicKey, privateKey) {
    return await this.enviarTransaction(publicKey, privateKey, this.smc.methods.finalizarParcelaAtual().encodeABI());
  }

  async finalizarContrato (publicKey, privateKey) {
    return await this.enviarTransaction(publicKey, privateKey, this.smc.methods.reiniciarParcela().encodeABI());
  }
}

export default SMC;
