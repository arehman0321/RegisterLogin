let obj = JSON.parse( localStorage.getItem( 'list' ) ),
    email,
    pass,
    Evalid = false,
    Pvalid = false,
    num;

    console.log(obj);

function d (name)
{
    return document.querySelector(name);
}

function error ( a )
{
    return d('ul').innerHTML = a;
}

d('.login').addEventListener('click', () => {

    email = d( '.email' ).value.toLowerCase().trim();
    pass = d( '.pass' ).value;

    if( localStorage.length === 0 )
    {

        error(`<li>The account does not exist.\nPlease register an account.</li>`);

    }
    else
    {
        if( email === '' || pass === '' )
        {

            error(`<li>Some credentials are blank.\nPlease fill in all input feilds.</li>`);

        }
        else
        {

        obj.accounts.forEach( ( v, i ) => {

                if( email === v.email )
                {
                    num = i;
                    Evalid = true;
                    
                }
        
                if( pass === v.pass )
                {
        
                    Pvalid = true;
        
                }
        
            });
        
            if( Pvalid === true && Evalid === true)
            {
        
                let a = localStorage.setItem( 'account', JSON.stringify( obj.accounts[num] ) );
                obj = JSON.parse( localStorage.getItem( 'list' ) ),
                email,
                pass,
                Evalid = false,
                Pvalid = false,
                num;
                window.location.replace( '/Users/ar786/Desktop/R_L/views/Account.html' );
        
            }
            else if( Pvalid === false && Evalid === true)
            {
        
                error(`<li>The password is incorrect.\nPlease try again or reset password.</li>`);
                Evalid = false;
            
            }else
            {
                error(`<li>The account does not exist.\nPlease register an account.</li>`);
            }
        
        }
    }
});
 

d('.reset').addEventListener('click', () => {
    
    obj = JSON.parse( localStorage.getItem( 'list' ) ),
    email,
    pass,
    Evalid = false,
    Pvalid = false,
    num;
    window.location.replace( '/Users/ar786/Desktop/R_L/views/Reset.html' );

});

d('.register').addEventListener('click', () => {
    
    obj = JSON.parse( localStorage.getItem( 'list' ) ),
    email,
    pass,
    Evalid = false,
    Pvalid = false,
    num;
    window.location.replace( '/Users/ar786/Desktop/R_L/views/Register.html' );

});