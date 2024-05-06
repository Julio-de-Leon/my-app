const setButton = document.getElementById('btn')
const toInput = document.getElementById('toInput')
const subjectInput = document.getElementById('subjectInput')
const bodyInput = document.getElementById('bodyInput')
const ccEmailInput = document.getElementById('ccEmailInput')
const bccEmailInput = document.getElementById('bccEmailInput')
const attachmentInput = document.getElementById('attachmentInput')

setButton.addEventListener('click', () => {
  const toEmail = toInput.value
  const body = bodyInput.value
  const subject = subjectInput.value
  const ccEmail = ccEmailInput.value
  const bccEmail = bccEmailInput.value
  const attachment = attachmentInput.value

  window.api.createOutlook({toEmail, body, subject, ccEmail, bccEmail, attachment})
})