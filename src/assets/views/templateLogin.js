const loginGoogle = () =>{
    console.log('holi');
}
export const templateLogin = () => {
    const containerLogin =
    document.createElement('div');

    const contentLogin = `<p>Login con Google</p>
        <button id="login">Login with Google</button>`
        containerLogin.innerHTML = contentLogin;

    const btn = 
    containerLogin.querySelector('#login');

    btn.addEventListener('click', () =>{
        loginGoogle();
    })
    return containerLogin;
}