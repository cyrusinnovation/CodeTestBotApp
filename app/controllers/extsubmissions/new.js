import SubmissionNewController from 'code-test-bot-app/controllers/submissions/new';

export default SubmissionNewController.extend({
  isExternal: true,
  breadCrumb: 'New Applicant',
  postSubmitURL: '/thanks',
  submitter: 'Your',
  levelPrompt: "Select level of application",
  languageLabel: "Programming Language",
  languagePrompt: "Select the language your submission uses",
  sourceLabel: "How Did You Find Us?",
  notesLabel: "Notes",
  notesPlaceholder: "Use this space for any general comments related to your submission that aren't already included in the README.",
  zipfileLabel: "Submission Zipfile",
  resumefileLabel: "Upload Resume"
});
