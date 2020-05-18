obj = JSON.parse( localStorage.getItem( 'account' ) );
console.log(obj);
function d ( name )
{
    return document.querySelector( name );

}

if( obj === null )
{

    d('button').classList.replace('logout', 'login');

    d('button').innerHTML = `Login`;
    
    d('.login').addEventListener('click', () => {

        window.location.replace(`/Users/ar786/Desktop/R_L/views/login.html`);

    });

}
else
{

    d('h1').innerHTML = `Welcome User: ${obj.first} ${obj.last}`;

    d('.logout').addEventListener('click', () => {
        
        d('.logout').innerHTML = ``;

        localStorage.removeItem('account');

        window.location.replace(`/Users/ar786/Documents/GitHub/Register_Login/R_L/views/Login.html`);

    });

}