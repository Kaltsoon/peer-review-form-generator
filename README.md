# Peer Review Form Generator

Generate peer review forms in Google Forms from JSON config.

## How to use

Requires Node.js >= 20.0.0.

1. Install dependencies by running `npm install`. 
2. Authenticate and create the Google Apps Script project by running `npm run setup`.
3. Add a `getPeerReviewFormConfig.js` file with the form config (see example below).
4. Push the script to Google Apps Script by running `npm run sync`.
5. Open the script in Google Apps Script by running `npm run open` and execute the `generatePeerReviewForm` function.

## Configuration

```js
function getPeerReviewFormConfig() {
  return {
    titlePrefix: "Ohjelmistoprojekti 2 vertaisarviointi kevät 2026",
    description: "Tässä vertaisarvioinnissa arvioit omaa sekä tiimisi muiden jäsenten työskentelyä projektissanne.",
    teams: {
      TeamA: ["John Doe", "Peter Parker"],
      TeamB: ["John Smith", "Emma Watson"],
    },
    translations: {
      yourInformationTitle: "Omat tietosi",
      yourInformationHelper: "Syötä tähän omat tietosi.",
      nameTitle: "Nimi",
      nameHelper: "Etunimi ja sukunimi.",
      studentNumberTitle: "Opiskelijanumero",
      githubAccountTitle: "GitHub-käyttäjätunnus",
      githubAccountHelper: "GitHub-käyttäjätunnus, jota käytit projektissa.",
      answerQuestionsOnTeamMember:
        (name) => `Vastaa seuraaviin kysymyksiin tiimiläisestä ${name.toUpperCase()}.`,
      teamWorkTitle: (name) =>
        `Minkä arvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen aktiivisuudestaan tiimityöskentelyssä?`,
      teamWorkHelper:
        "Tähän sisältyy aktiivinen läsnäolo viikottaisilla opetuskerroilla ja niiden ulkopuolisilla tapaamisilla, sekä kommunikointi tapaamisten ulkopuolella. Aktiivinen tiimiläinen jakaa aktiivisesti muiden kanssa edistymisensä, ongelmansa ja osaamisensa, sekä pyrkii auttamaan muita tiimiläisiä. 0 on huonoin arvosana ja 5 on paras.",
      technicalTitle: (name) =>
        `Minkä arvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen panoksestaan teknisessä toteutuksessa?`,
      technicalHelper:
        "Tähän sisältyy tuotetun toimivan koodin määrä, tai aktiivinen osallistuminen koodin tuotosprosessiin (esim. pariohjelmoinnin avulla). 0 on huonoin arvosana ja 5 on paras.",
      managementTitle: (name) =>
        `Minkä arvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen panoksestaan projektinhallinnassa ja dokumentaatiossa?`,
      managementHelper:
        "Tähän sisältyy backlogin hallinta, tapaamisten organisointi, prosessin kehittäminen (esim. retrospektiiveissä) ja projektin dokumentaation tuottaminen. 0 on huonoin arvosana ja 5 on paras.",
      totalTitle: (name) =>
        `Minkä kokonaisarvosanan antaisit tiimiläiselle ${name.toUpperCase()} hänen panoksestaan projektiin?`,
      totalHelper:
        "Ota huomioon edellä mainitut arviointikohteet. 0 on huonoin arvosana ja 5 on paras.",
      totalDescriptionTitle: (name) =>
        `Anna lyhyt perustelu tiimiläisen ${name.toUpperCase()} kokonaisarvosanalle`,
      totalDescriptionHelper:
        "Kuvaile lyhyesti tiimiläisen aktiviisuutta tiimityöskentelyssä sekä panosta teknisessä toteutuksessa, projektinhallinnassa ja dokumentaatiossa.",
    },
  };
}
```
