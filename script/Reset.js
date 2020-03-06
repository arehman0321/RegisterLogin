let obj = JSON.parse( localStorage.getItem( 'list' ) ),
    email,
    valid = false,
    num,
    pass,
    cpass;

console.log(num);

function d ( name )
{
    return document.querySelector( name );
}

function error ( a )
{
    return d('ul').innerHTML = a;
}

d('.one').addEventListener('click', () => {
    email = d('.email').value.toLowerCase().trim();

    if(localStorage.length === 0)
    {
        error(`<li>Account is not registered.</li>`);
    }
    else
    {
        if( email === '' )
        {

            error(`<li>Please enter your email to chnage the password.</li>`);

        }
        else
        {

            obj.accounts.forEach( ( v, i ) => {

                if( v.email === email )
                {

                    valid = true;
                    num = i;

                }

            });

            if( valid === true )
            {
                d('ul').innerHTML = ``;
                d('.part-one').classList.add('d-none');
                d('.part-two').classList.remove('d-none');

            }
            else
            {

                error(`<li>Account is not registered.</li>`);

            }

        }
    }
    
});

d('.two').addEventListener('click', () => {

    pass = d('.pass').value;
    cpass = d('.cpass').value;

    if( pass.length < 8 )
    {

        error(`<li>The password is too short.</li>`);

    }
    else
    {

        if( pass === cpass )
        {

            obj.accounts[num].pass = pass;

            localStorage.clear();

            localStorage.setItem( 'list', JSON.stringify( obj ) );

            window.location.replace( '/Users/ar786/Desktop/R_L/views/Login.html' );

        }
        else
        {

            error(`<li>Password does not match.</li>`);

        }

    }

});

d('.back').addEventListener('click', () => {

    num = null;
    valid = false;
    window.location.replace( '/Users/ar786/Desktop/R_L/views/Reset.html' );

});

d('.login').addEventListener('click', () => {

    num = null;
    valid = false;
    window.location.replace( '/Users/ar786/Desktop/R_L/views/Login.html' );
    
});

d('.register').addEventListener('click', () => {

    num = null;
    valid = false;
    window.location.replace( '/Users/ar786/Desktop/R_L/views/Register.html' );
    
});