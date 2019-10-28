<template>
  <v-container>
    <div>
      <v-container>
        <v-layout row wrap>
          <v-flex sm12>
            <v-card color="#385F73" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Conta</div>
                  <v-list-item-title class="headline mb-1">Perfil</v-list-item-title>
                  <v-list-item-subtitle v-if="eContratada">Contratada</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="eContratante">Contratante</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="eTecnicoContratada">Técnico (Contratada)</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="eTecnicoContratante">Técnico (Contratante)</v-list-item-subtitle>
                  <v-list-item-subtitle v-if="eArbitro">Árbitro</v-list-item-subtitle>
                  <v-list-item-subtitle>{{account.publicKey}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <br />
          </v-flex>
          <v-flex sm12>
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Tokens BRLT</div>
                  <v-list-item-title class="headline mb-1">Custódia</v-list-item-title>
                  <v-list-item-subtitle>R$ {{smc.custodiaBRLT | currency}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <br />
          </v-flex>
          <v-flex sm12>
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Número de parcelas</div>
                  <v-list-item-title class="headline mb-1">Parcelas</v-list-item-title>
                  <v-list-item-subtitle>{{smc.parcelaAtual}} de {{smc.parcelas}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <br />
          </v-flex>
          <v-flex sm12>
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">Estimativa</div>
                  <v-list-item-title class="headline mb-1">Valor Parcela</v-list-item-title>
                  <v-list-item-subtitle>R$ {{smc.valorParcela | currency}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-tabs
        :grow="true"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab :href="`#tab-1`" v-if="eArbitro">Árbitro</v-tab>
        <v-tab :href="`#tab-2`" v-if="eTecnicoContratada || eTecnicoContratante">Técnico</v-tab>
        <v-tab :href="`#tab-3`" v-if="eContratada">Contratada</v-tab>
        <v-tab :href="`#tab-4`" v-if="eContratante">Contratante</v-tab>

        <v-tab-item :value="'tab-1'" v-if="eArbitro">
          <v-card flat tile>
            <v-card-text>
              <v-btn x-large color="success" block @click="abrirParcela()" :loading="loading.abrirParcela">Abrir Parcela</v-btn>
              <br />
              <v-btn x-large color="warning" block @click="finalizarParcelaAtual()" :loading="loading.finalizarParcelaAtual">Finalizar Parcela</v-btn>
              <br />
              <v-btn x-large color="" block @click="reiniciarParcela()" :loading="loading.reiniciarParcela">Reiniciar Parcela</v-btn>
              <br />
              <v-btn x-large color="error" block @click="finalizarContrato()" :loading="loading.cancelarContrato">Cancelar Contrato</v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'tab-2'" v-if="eTecnicoContratada || eTecnicoContratante">
          <v-card flat tile>
            <v-card-text>
              <v-slider
                max=2000
                min=0
                label="Indicador Calibragem"
                @change="calcularIndicadorGeral()"
                :color="medicao.calibragem < 1000 ? 'error' : (medicao.calibragem < 1500 ? 'warning' : 'success')"
                v-model="medicao.calibragem"
              ></v-slider>
              <v-slider
                max=2000
                min=0
                :color="medicao.quilometragem < 1000 ? 'error' : (medicao.quilometragem < 1500 ? 'warning' : 'success')"
                label="Indicador Quilometragem"
                @change="calcularIndicadorGeral()"
                v-model="medicao.quilometragem"
              ></v-slider>
              <v-slider
                max=2000
                min=0
                v-model="medicao.terreno"
                @change="calcularIndicadorGeral()"
                :color="medicao.terreno < 1000 ? 'error' : (medicao.terreno < 1500 ? 'warning' : 'success')"
                label="Indicador Terreno"
              ></v-slider>
              <v-slider
                max=2000
                min=0
                v-model="medicao.indicador"
                readonly
                loading="medicao.loading"
                :color="medicao.indicador < 1000 ? 'error' : (medicao.indicador < 1500 ? 'warning' : 'success')"
                @change="calcularIndicadorGeral()"
                label="Indicador Geral"
              ></v-slider>

              <v-btn
                x-large
                color="info"
                block
                @click="registrarMedicao()" :loading="loading.registrarMedicao">Registrar Medição</v-btn>
              <br />
              <v-btn
                x-large
                :disabled="this.medicaoAtual === null"
                color="success"
                block
                @click="aprovarMedicao()"
                :loading="loading.aprovarMedicao">Aprovar Medição</v-btn>
              <br />
              <v-btn
                x-large
                color="error"
                :disabled="this.medicaoAtual === null"
                @click="reprovarMedicao()"
                block
                :loading="loading.reprovarMedicao">Reprovar Medição</v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'tab-3'" v-if="eContratada">
          <v-card flat tile>
            <v-card-text>
              <v-btn x-large color="warning" block>Finalizar Parcela</v-btn>
              <br />
              <v-btn x-large color="" block>Reiniciar Parcela</v-btn>
              <br />
              <v-btn x-large color="error" block>Cancelar Contrato</v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'tab-4'" v-if="eContratante">
          <v-card flat tile>
            <v-card-text>asd</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-container>
</template>

<script>
import SMC from '../lib/SMC';

export default {
  data () {
      return {
        smc: {
          custodiaBRLT: '',
          valorParcela: 0,
          parcelas: 0,
          parcelaAtual: 0
        },
        account: {
          privateKey: this.$route.query.s,
          publicKey: this.$route.query.p
        },
        medicao: {
          calibragem: 0,
          quilometragem: 0,
          terreno: 0,
          indicador: 0,
          loading: false
        },
        eContratada: false,
        eContratante: false,
        eTecnicoContratada: false,
        eTecnicoContratante: false,
        eArbitro: false,
        medicaoAtual: null,
        enderecos: {},
        value: 5,
        loading: {
          abrirParcela: false,
          reiniciarParcela: false,
          finalizarParcelaAtual: false,
          cancelarContrato: false,
          registrarMedicao: false,
          aprovarMedicao: false,
          reprovarMedicao: false
        }
      }
  },

  async mounted () {
    await this.carregarInformacoes();

    const smc = new SMC();
    smc.getEvents().allEvents().on('data', e => {
      console.log(e);
      switch (e.event) {
        case 'ParcelaFinalizada':
        case 'MedicaoRealizada':
        case 'ParcelaReiniciada':
          this.carregarMedicao();
          break;
        case 'ParcelaAberta':
        case 'CustodiaAlterada':
          this.carregarInformacoes();
          break;
        default:

      }
    })
  },

  methods: {
    async carregarInformacoes () {
      const smc = new SMC();

      this.smc.custodiaBRLT = await smc.obterSaldoContrato();
      this.smc.valorParcela = await smc.obterValorParcela();
      this.smc.parcelas = await smc.obterNumeroParcelas();
      this.smc.parcelaAtual = await smc.obterParcelaAtual();

      await this.carregarMedicao();

      try {
        this.enderecos = await smc.obterEnderecos();
        this.eContratada = this.enderecos.contratada.toString().toUpperCase() === this.account.publicKey.toUpperCase();
        this.eContratante = this.enderecos.contratante.toString().toUpperCase() === this.account.publicKey.toUpperCase();
        this.eTecnicoContratada = this.enderecos.tecnicoContratada.toString().toUpperCase() === this.account.publicKey.toUpperCase();
        this.eTecnicoContratante = this.enderecos.tecnicoContratante.toString().toUpperCase() === this.account.publicKey.toUpperCase();
        this.eArbitro = this.enderecos.arbitro.toString().toUpperCase() === this.account.publicKey.toUpperCase();
      } catch (e) {
      }
    },

    async carregarMedicao() {
      const smc = new SMC();

      try {
        this.medicaoAtual = await smc.obterMedicaoAtual();

        this.medicao.calibragem = this.medicaoAtual.calibragem;
        this.medicao.terreno = this.medicaoAtual.terreno;
        this.medicao.quilometragem = this.medicaoAtual.quilometragem;

        await this.calcularIndicadorGeral();
      } catch (e) {
        this.mdicaoAtual = null;

        this.medicao.calibragem = 0;
        this.medicao.terreno = 0;
        this.medicao.quilometragem = 0;
      }
    },

    async abrirParcela () {
      try {
        const smc = new SMC();
        this.loading.abrirParcela = true;
        const tx = await smc.abrirParcela(this.account.publicKey, this.account.privateKey);
        this.loading.abrirParcela = false;
        alert(`Parcela aberta com sucesso! \n\n${tx.transactionHash}`);
      } catch (e) {
        alert(e);
        this.loading.abrirParcela = false;
      }
    },

    async finalizarParcelaAtual () {
      try {
        const smc = new SMC();
        this.loading.finalizarParcelaAtual = true;
        const tx = await smc.finalizarParcelaAtual(this.account.publicKey, this.account.privateKey);
        alert(`Parcela finalizada com sucesso! \n\n${tx.transactionHash}`);
        this.loading.finalizarParcelaAtual = false;
      } catch (e) {
        alert(e);
        this.loading.finalizarParcelaAtual = false;
      }
    },

    async reiniciarParcela () {
      try {
        const smc = new SMC();
        this.loading.reiniciarParcela = true;
        const tx = await smc.reiniciarParcela(this.account.publicKey, this.account.privateKey);
        alert(`Parcela reiniciada com sucesso! \n\n${tx.transactionHash}`);
        this.loading.reiniciarParcela = false;
      } catch (e) {
        alert(e);
        this.loading.reiniciarParcela = false;
      }
    },

    async finalizarContrato () {
      try {
        const smc = new SMC();
        this.loading.finalizarContrato = true;
        const tx = await smc.finalizarContrato(this.account.publicKey, this.account.privateKey);
        alert(`Contrato cancelado com sucesso! \n\n${tx.transactionHash}`);
        this.loading.finalizarContrato = false;
      } catch (e) {
        alert(e);
        this.loading.finalizarContrato = false;
      }
    },

    async calcularIndicadorGeral () {
      const smc = new SMC();
      this.medicao.loading = true;
      this.medicao.indicador = await smc.calcularIndicador(this.medicao.calibragem, this.medicao.quilometragem, this.medicao.terreno);
      this.medicao.loading = false;
    },

    async registrarMedicao () {
      try {
        const smc = new SMC();
        this.loading.registrarMedicao = true;
        const tx = await smc.registrarMedicao(this.account.publicKey,
                                              this.account.privateKey,
                                              this.medicao.calibragem,
                                              this.medicao.quilometragem,
                                              this.medicao.terreno

          );
        this.loading.registrarMedicao = false;
        alert(`Medição realizada com sucesso! \n\n${tx.transactionHash}`);
      } catch (e) {
        this.loading.registrarMedicao = false;
        alert(e);
      }
    },

    async aprovarMedicao () {
      try {
        const smc = new SMC();
        this.loading.aprovarMedicao = true;
        const tx = await smc.aprovarMedicao(this.account.publicKey, this.account.privateKey);
        this.loading.aprovarMedicao = false;
        alert(`Medição aprovada com sucesso! \n\n${tx.transactionHash}`);
      } catch (e) {
        this.loading.aprovarMedicao = false;
        alert(e);
      }
    },

    async reprovarMedicao () {
      try {
        const smc = new SMC();
        this.loading.reprovarMedicao = true;
        const tx = await smc.reprovarMedicao(this.account.publicKey, this.account.privateKey);
        this.loading.reprovarMedicao = false;
        alert(`Medição aprovada com sucesso! \n\n${tx.transactionHash}`);
      } catch (e) {
        this.loading.reprovarMedicao = false;
        alert(e);
      }
    }
  }
}
</script>
