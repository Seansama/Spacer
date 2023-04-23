import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";


const ClientLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://booking-app-vvj0.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });

        if (response.ok) {
            setLoggedIn(true);
        } else {
            alert("Invalid email or password");
        }
    };

    if (loggedIn) {
        navigate('/spaces')
    }
    return (
        <div style={{backgroundColor: "#181b1e", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", padding: "1rem", borderRadius: "0.5rem", backgroundColor: "#181b1e"}}>
                <h2 style={{textAlign: "center", color: "#75A2A5"}}>Log In</h2>
                <div style={{width: "100%", paddingBottom: "25px"}}>
                    <label htmlFor="email" style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="your.email@gmail.com"
                        id="email"
                        name="email"
                        style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                    />
                </div>

                <div style={{width: "100%"}}>
                    <label htmlFor="password" style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                        style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                    />
                </div>

                <button type="submit" style={{padding: "0.7rem", borderRadius: "0.8rem", backgroundColor: "#75A2A5", color: "#fff", cursor: "pointer"}}>
                    Log In
                </button>

                <button style={{border: "none", backgroundColor: "transparent", cursor: "pointer", color: "#fff"}}>
                    Don't have an account?{" "}
                    <Link to="/client-signup" style={{color: "#75A2A5"}}>
                        Create here.
                    </Link>
                </button>
            </form>
        </div>
    )
}

export default ClientLogin;
