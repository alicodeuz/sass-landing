function setActiveButton(e) {
  console.log(e, e.getAttribute('data-target'))
  // Remove active class from selected button groups
  document.querySelectorAll('.btn-group button').forEach(item => {
    item.classList.remove('active');
  });

  // Remove active class from selected inner-tabs
  document.querySelectorAll('.inner-tab').forEach(item => {
    item.classList.remove('active');
  });

  e.classList.add('active');
  document.querySelector(e.getAttribute('data-target')).classList.add('active');
}
