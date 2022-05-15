       
    //    Assignment 01     =>   Make  Email pattern


    let email = 'anis55@gmail.com';
    
    
    let testingEmail=/^[a-z A-Z 0-9]{4,}@gmail\.com$/;

    console.log(testingEmail.test(email));





   //   Assignment 02   =>  Make username pattern



    let user ='a$#@#';

    let testingUserName =/^[a-z A-Z 0-9 !@#$%^&* ]{5,}$/;

    console.log(testingUserName.test(user));



    //    Asssignment 03  => Make Bangladeshi phone number pattern   



    let phoneNumber  = '01852320729' ;



    let testingnumber =/^0[0-9]{10}$/


    console.log(testingnumber.test(phoneNumber));





    // Assignment 04 => Make   Password  pattern  



    let Passwords ='AAFGRGgdfda1441!$$%'


     let testpasswords =/^[a-z]{1,}[A-Z]{1,}[ 0-9 ]{1,}[!@#$%^&*()_+<>?/.,]{1,}$/i
     console.log(testpasswords.test(Passwords));




     // Assignment 05 => Make zip code parttern


     let zipcode = '4381'

     let testingZipcode = /^[0-9]{4}$/


     console.log(testingZipcode.test(zipcode));