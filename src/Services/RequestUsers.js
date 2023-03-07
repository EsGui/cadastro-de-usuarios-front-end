const requestUsers = {
    registerUsers: async ({ 
        email,
        password,
        confirmPassword,
    }) => {
        const url = "https://cadastro-de-usuarios-back-omwzvjz2b-esgui.vercel.app/registration"
        const request = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email, 
                password,
                confirmPassword,
            })
        });
        const response = await request.json()
        return response 
    },

    deleteUsers: async ({ email }) => {
        const url = "https://cadastro-de-usuarios-back-omwzvjz2b-esgui.vercel.app/delete-users"
        const request = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email,
            })
        });
        const response = await request.json()
        return response 
    },

    getUsers: async () => {
        const url = "https://cadastro-de-usuarios-back-omwzvjz2b-esgui.vercel.app/users";
        const request = await fetch(url);
        const response = await request.json();
        return response;
    }
}

export default requestUsers;
