describe('Address Book', function () {
    var addressBook,
        thisContact;

    
    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to contact', function () {

       
        addressBook.addContact(thisContact);

      
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

   
    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);

       
        addressBook.deleteContact(0);

        
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});


describe('Async Address Book', function() {
    it('should grab initial contacts', function() {
        var addressBook = new AddressBook();

        
        beforeEach(function(done) {

           
            addressBook.getInitialContacts(function() {

                //kutsun välja done funktsiooni, mis annab meie funktsioonile teada, et asünkroonne päring on lõpetatud
                done();
            });
        });


        it('should grab inital contacts', function(done) {

             //eeldan, et kontaktide lisamine õnnestus
            expect(addressBook.initialComplete).toBe(true);
            done();
        });