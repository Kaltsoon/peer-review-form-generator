# Peer Review Form Generator

Generate peer review forms in Google Forms from JSON config.

## How to use

1. Authenticate and setup by running `npm run setup` (just once).
2. Push the script to Google Apps Script with `npm run sync`.
3. Add a `generatePeerReviewFormConfig.js` file with the form config (see example below).
4. Run the `generatePeerReviewForm` in Google Apps Script.

## Configuration

```js
function getPeerReviewFormConfig() {
  return {
    titlePrefix: "Ohjelmistoprojekti 2 vertaisarviointi kevät 2026",
    teams: {
      TeamA: ["John Doe", "Peter Parker"],
      TeamB: ["John Smith", "Emma Watson"],
    },
    translations: {
      yourInformationTitle: "Omat tietosi",
      yourInformationHelper: "Syötä tähän omat tietosi.",
      nameTitle: "Nimi",
      nameHelper: "Etunimi ja sukunimi",
      studentNumberTitle: "Opiskelijanumero",
      githubAccountTitle: "GitHub-käyttäjätunnus",
      githubAccountHelper: "GitHub-käyttäjätunnus, jota käytit projektissa.",
      answerQuestionsOnTeamMember:
        "Vastaa seuraaviin kysymyksiin tästä tiimiläisestä.",
      teamWorkTitle: (name) =>
        `Minkä arvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen aktiivisuudesta tiimityöskentelyssä?`,
      teamWorkHelper:
        "Tähän sisältyy aktiivinen läsnäolo viikottaisilla opetuskerroilla ja niiden ulkopuolisilla tapaamisilla (virtuaaliset tapaamiset mukaanlukien), sekä kommunikointi muiden tiimiläisten kanssa tapaamisten ulkopuolella. Aktiivinen tiimiläinen jakaa aktiivisesti muiden tiimiläisten kanssa edistymisensä, ongelmansa ja tietämyksensä, sekä yrittää auttaa muita tiimiläisiä heidän ongelmissaan. 0 on huonoin arvosana ja 5 on paras.",
      technicalTitle: (name) =>
        `Minkä arvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen teknisestä työpanoksestaan?`,
      technicalHelper:
        "Tähän sisältyy tuotetun toimivan koodin määrä, tai aktiivinen osallistuminen koodin tuotosprosessiin (esim. pariohjelmoinnin avulla). 0 on huonoin arvosana ja 5 on paras.",
      managementTitle: (name) =>
        `Minkä arvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen projektinhallintaan ja dokumentaation liittyvästä työpanoksesta?`,
      managementHelper:
        "Tähän sisältyy backlogien hallinta, tapaamisten organisointi, prosessin kehittäminen (esim. Retrospektiiveissä) ja projektiin liittyvän dokumentaation tuottaminen. 0 on huonoin arvosana ja 5 on paras.",
      totalTitle: (name) =>
        `Minkä kokonaisarvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen työpanoksestaan projektin eteen?`,
      totalHelper:
        "Ottaen huomioon kaikki yllä annetut arvosanat, minkä kokonaisarvosana olisi mielestäsi sopiva tälle tiimiläiselle? 0 on huonoin arvosana ja 5 on paras.",
      totalDescriptionTitle: (name) =>
        `Anna lyhyt perustelu tiimiläisen ${name.toUpperCase()} kokonaisarvosanalle`,
      totalDescriptionHelper:
        "Kuvaile lyhyesti tiimiläisen aktiviisuutta tiimityöskentelyssä, hänen teknistä työpanostaan ja hänen projektinhallintaan ja dokumentaatioon liittyvää työpanostaan.",
    },
  };
}
```
