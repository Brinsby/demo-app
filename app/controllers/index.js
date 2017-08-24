import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.empty('emailAddress'),

  // actualEmailAddress: Ember.computed('emailAddress', function() {
  //   console.log('actualEmailAddress function is called!: ', this.get('emailAddress'));
  // }),

  // emailAddressChanged: Ember.observer('emailAddress', function () {
  //   console.log('Observer is called', this.get('emailAddress'));
  // }),

  actions:{
    saveInvitation(){
      // alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      // this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      // this.set('emailAddress','');

      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation',{
        email: email
      });

      newInvitation.save().then((response) =>{
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
      });

    }
  }

});
