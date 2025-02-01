const cookieExtractor = (req) => {
    let token = null;
    if(req && req.cookies){
        token =  req.signedCookies["authCookie"];
    }
    
    return token;
};

export default cookieExtractor;