//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var howManyBalls = req.session.data['how-many-balls']
  
    // Check whether the variable matches a condition
    if (howManyBalls == "3 or more"){
      // Send user to next page
      res.redirect('/juggling-trick')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  
// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/email-address-page', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '0409ddff-6c11-4837-8106-364e62ed37cf',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/confirmation');

});

  })
  
