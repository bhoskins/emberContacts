import DS from 'ember-data';

var Contact = DS.Model.extend({
  // id: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  wantsNewsletter: DS.attr('boolean'),
  isActive: DS.attr('boolean')

});

Contact.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'Beth',
      lastName: "Hoskins",
      email: "bhoskins@charter.net",
      password: "1234",
      wantsNewsletter: true,
      isActive: true
    },
    {
      id: 2,
      firstName: 'Maya',
      lastName: "Angelou",
      email: "maya@charter.net",
      password: "1234",
      wantsNewsletter: true,
      isActive: true
    }

  ]
});

export default Contact;
