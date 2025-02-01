export const renderHomeView = async (req, res) => {
    try {
        res.render("home", { title: "Pagina de inicio", styles: `<link rel="stylesheet" href="/api/public/css/style.css">` });
    } catch (error) {
        res.status(500).send(`<h1>Error</h1><h3>${error.message}</h3>`);
    }
};

export const renderRegisterView = async (req, res) => {
    try {
        res.render("register", { title: "Registro de Usuario", styles: `<link rel="stylesheet" href="/api/public/css/style.css">` });
    } catch (error) {
        res.status(500).send(`<h1>Error</h1><h3>${error.message}</h3>`);
    }
};

export const renderLoginView = async (req, res) => {
    try {
        res.render("login", { title: "Login de Usuario", styles: `<link rel="stylesheet" href="/api/public/css/style.css">` });
    } catch (error) {
        res.status(500).send(`<h1>Error</h1><h3>${error.message}</h3>`);
    }
};

