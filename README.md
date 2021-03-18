# Dados-da-COVID-19-em-Sao-Carlos-SP

Este repositório contém os dados fornecidos pelo Subcomitê de Comunicação de Combate ao Coronavírus de São Carlos sobre a situação da pandemia na cidade. Os dados estão dispostos em gráficos que permitem visualizar melhor a progressão dos casos de Covid-19 entre outros dados durante 1 ano (365 dias) de pandemia.

## Utilização

Baixe este repostório e extraia o zip

## index.html
```python
index.html
```
Abra este arquivo e visualize os dados da Covid-19 no município de São Carlos.
Ou acesse o link [Covid-19 em São Carlos](https://covid19-sp-sao-carlos.herokuapp.com)

## Pasta : data

Nesta pasta estão disponíveis os dados extraídos para você fazer sua análise. Os 2 arquivos com os dados são 'dados_covid_sao_carlos_sp.json' e 'dados_covid_sao_carlos_sp.xlsx'. O primeiro é um arquivo json que contém um array com objetos que contém os dados de cada dia desde 16/03/2020 até 16/03/2021. O segundo é um arquivo excel que possuí duas pastas, a primeira possuí os dados nas colunas e a segunda contém alguns gráficos sobre os dados em questão.

### dados_covid_sao_carlos_sp.json
```json
 {
    "n_boletim": 278,
    "dados_medidos": true,
    "dia": "2021-01-28",
    "n_dia": 319,
    "descartados": 23885,
    "confirmados": 8397,
    "internados": 78,
    "sindromeGripalAc": 38792,
    "sindromeGripalIns": 4746,
    "obitosEmInvestigacao": 0,
    "obitosConfirmados": 92,
    "TC_30D_confirmados": 110,
    "TC_30D_SG_Ac": 400,
    "TC_30D_e_MM_14D_confirmados": 106,
    "TC_30D_e_MM_14D_SG_Ac": 395,
    "MM_14D_obitosConfirmados": 94,
    "MM_14D_confirmados": 8290,
    "MM_14D_SG_Ac": 38397,
    "MM_14D_internados": 69,
    "R_MMconfirmados_MMobitos": 88.2,
    "R_MMSGAc_MMconfirmados": 4.6
    }
```
### Os dados se referem a:
```txt
{
    "n_boletim": Número do boletim emitido pelo Subcomitê de Comunicação de Combate ao Coronavírus de São Carlos.
    "dados_medidos": Informa se os dados do objeto foram emitidos pelo Subcomitê. Nem todos os dias tiveram boletins, neste caso preenchi estes poucos dias por uma progressão linear.  
    "dia": Os dados informam sobre este dia.
    "n_dia": Número de dias que se passaram desde o dia inicial (16/03/2020).
    "descartados": Número de casos descartados por teste de Covid-19.
    "confirmados": Número de casos confirmados de Covid-19.
    "internados": Número de internações (não necessariamente por Covid-19).
    "sindromeGripalAc": Número de síndromes gripais notificadas e acumuladas.
    "sindromeGripalIns": Número de síndromes gripais ainda em isolamento (Instantânea).
    "obitosEmInvestigacao": Número de óbitos em investigação.
    "obitosConfirmados": Número de óbitos por Covid-19.
    "TC_30D_confirmados": Taxa de crescimento em relação ao 30°dia anterior de casos confirmados de Covid-19.
    "TC_30D_SG_Ac": Taxa de crescimento em relação ao 30°dia anterior de síndromes gripais notificadas e acumuladas.
    "TC_30D_e_MM_14D_confirmados": Média móvel (14 dias) da taxa de crescimento em relação ao 30°dia anterior de casos confirmados de Covid-19.
    "TC_30D_e_MM_14D_SG_Ac": Média móvel (14 dias) da taxa de crescimento em relação ao 30°dia anterior de síndromes gripais notificadas e acumuladas.
    "MM_14D_obitosConfirmados": Média móvel (14 dias) de óbitos por Covid-19.
    "MM_14D_confirmados": Média móvel (14 dias) de óbitos confirmados de Covid-19.
    "MM_14D_SG_Ac": Média móvel (14 dias) de síndromes gripais notificadas e acumuladas.
    "MM_14D_internados": Média móvel (14 dias) das internações.
    "R_MMconfirmados_MMobitos": Razão entre a média móvel dos casos confirmados de Covid-19 pela média móvel dos óbitos por Covid-19.
    "R_MMSGAc_MMconfirmados": Razão entre a média móvel das síndromes gripais notificadas pela média móvel dos casos confirmados de Covid-19.
}
```

### dados_covid_sao_carlos_sp.xlsx

<img width="600" src="https://github.com/JorgeBaes/covid19-sc/blob/master/images/excel_demo.png">

## Pasta : images

Esta pasta contém gráficos feito pela [Glória Palma Levcovitz](https://www.instagram.com/gloriallev/) com os dados fornecidos pelo Subcomitê de Comunicação de Combate ao Coronavírus de São Carlos.

<img width="600" src="https://github.com/JorgeBaes/covid19-sc/blob/master/images/3_novos_por_dia_dia_197.jpeg"></img>
<br>
<img width="600" src="https://github.com/JorgeBaes/covid19-sc/blob/master/images/2_ocupacao_leitos_dia_100.jpg"></img>
