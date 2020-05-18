function d ( name )
{
return document.querySelector(name);
}

function error ( a )
{
    return d('ul').innerHTML = a;
}

var obj,
    fname,
    lname,
    email,
    pass,
    cpass,
    info,
    valid = true;

d('.register').addEventListener('click', () =>
{
    fname = d( '.first' ).value.trim();
    lname =  d( '.last' ).value.trim();
    email = d( '.email' ).value.toLowerCase().trim();
    pass =  d( '.pass' ).value.trim();
    cpass = d( '.cpass' ).value.trim();

    if( fname === '' || lname === '' || email === '' || pass === '' || cpass === '' ){

        error(`<li>Some credentials are missing.\nPlease fill all required feilds.</li>`);

    }else{

        d('ul').innerHTML = ``;

        info = {
            first: fname,
            last: lname,
            email: email,
            pass: pass
        };

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(info.email) === false)

            error(`<li>Email is invalid</li>`);

        else
        {

            if(localStorage.length === 0)
            {

                obj = { accounts:[] };

                if( pass.length < 8 )
                {

                    error(`<li>Password is too short</li>`);

                }
                else
                {
                    
                    if( pass === cpass )
                    {

                        obj.accounts.push( info );

                        localStorage.setItem( 'list', JSON.stringify( obj ) );
            
                        // console.log( `Data Made: ${ JSON.parse( localStorage.getItem( 'list') ) }` );
            
                        window.location.replace( '/Users/ar786/Desktop/R_L/views/login.html' );

                    }
                    else
                    {

                        error(`<li>Password does not match</li>`);

                    }

                }

            }
            else
            {

                obj = JSON.parse( localStorage.getItem( 'list' ) );

                obj.accounts.forEach( ( v ) => {

                    if( info.email === v.email )
                    {
                        valid = false;
                    }

                });

                if( valid === false )
                {

                    error(`<li>An acocunt with this email already exists.\nPlease try logging in or reset password.</li>`);
                    valid = true;

                }
                else
                {

                    if( pass.length < 8 )
                    {

                        error(`<li>The password is too short.</li>`);

                    }
                    else
                    {

                        if( pass === cpass)
                        {

                            localStorage.clear( 'list' );

                            obj.accounts.push( info );
                            
                            obj = localStorage.setItem( 'list', JSON.stringify( obj ) );
                            
                            console.log(`Data Exists: ${obj}`);

                            error(``);

                            window.location.replace( '/Users/ar786/Desktop/R_L/views/login.html' );

                        }
                        else
                        {

                            error(`<li>The password does not match.</li>`);

                        }

                    }

                }
                
            }

        }

    }
});

d('.login').addEventListener('click', () => {

    window.location.replace( '/Users/ar786/Desktop/R_L/views/login.html' );

});