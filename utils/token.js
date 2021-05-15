import KEY from './constants'

const setUserToken = (tokenStr) => {

    localStorage.setItem(KEY.TOKEN, tokenStr);

}

const getUserToken = () =>{
    return localStorage.getItem(KEY.TOKEN);
}