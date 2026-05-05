function generatePeerReviewForm() {
  const CONFIG = getPeerReviewFormConfig();

  function GPF_addLikert(form, title, helper) {
    const item = form.addMultipleChoiceItem();

    item.setTitle(title);
    item.setHelpText(helper);
    item.setRequired(true);

    item.setChoices([
      item.createChoice("0"),
      item.createChoice("1"),
      item.createChoice("2"),
      item.createChoice("3"),
      item.createChoice("4"),
      item.createChoice("5"),
    ]);
  }

  function GPF_generateForm(titlePrefix, description, teamName, teamMembers) {
    const form = FormApp.create(`${titlePrefix}: ${teamName}`, true);

    form
      .setDescription(description)
      .setShowLinkToRespondAgain(false)
      .setProgressBar(true);

    form
      .addPageBreakItem()
      .setTitle(CONFIG.translations.yourInformationTitle)
      .setHelpText(CONFIG.translations.yourInformationHelper);

    const name = form.addTextItem();

    name.setTitle(CONFIG.translations.nameTitle);
    name.setHelpText(CONFIG.translations.nameHelper);
    name.setRequired(true);

    const studentNumber = form.addTextItem();

    studentNumber.setTitle(CONFIG.translations.studentNumberTitle);
    studentNumber.setRequired(true);

    const github = form.addTextItem();

    github.setTitle(CONFIG.translations.githubAccountTitle);
    github.setHelpText(CONFIG.translations.githubAccountHelper);
    github.setRequired(true);

    teamMembers.forEach((member) => {
      GPF_addStudentItem(form, member);
    });

    return form;
  }

  function GPF_addStudentItem(form, studentName) {
    form
      .addPageBreakItem()
      .setTitle(studentName)
      .setHelpText(CONFIG.translations.answerQuestionsOnTeamMember(studentName));

    GPF_addLikert(
      form,
      CONFIG.translations.teamWorkTitle(studentName),
      CONFIG.translations.teamWorkHelper,
    );
    GPF_addLikert(
      form,
      CONFIG.translations.technicalTitle(studentName),
      CONFIG.translations.technicalHelper,
    );
    GPF_addLikert(
      form,
      CONFIG.translations.managementTitle(studentName),
      CONFIG.translations.managementHelper,
    );
    GPF_addLikert(
      form,
      CONFIG.translations.totalTitle(studentName),
      CONFIG.translations.totalHelper,
    );

    const totalDescription = form.addParagraphTextItem();

    totalDescription.setTitle(
      CONFIG.translations.totalDescriptionTitle(studentName),
    );
    totalDescription.setHelpText(CONFIG.translations.totalDescriptionHelper);
    totalDescription.setRequired(true);
  }

  function GPF_main() {
    Object.entries(CONFIG.teams).forEach(([teamName, members]) => {
      const form = GPF_generateForm(CONFIG.titlePrefix, CONFIG.description, teamName, members);
      Logger.log(`Created form for ${teamName}: ${form.getEditUrl()}`);
    });
  }

  GPF_main();
}
