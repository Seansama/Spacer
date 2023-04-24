import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const AdminSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://booking-app-vvj0.onrender.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, username }),
            });
            if (response.ok) {
                navigate('/admin-login')
            } else {
                throw new Error("Account not created. Please try again.");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#181b1e"}}>
            <form onSubmit={handleSubmit} style={{width: "400px", padding: "1rem", borderRadius: "0.5rem", backgroundColor: "#181b1e"}}>
                <h2 style={{textAlign: "center", color: "#75A2A5"}}>Create an Administrator Account</h2>
                <div style={{width: "100%"}}>
                    <label htmlFor="name" style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5"}}>Username</label>
                    <input
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                        type="name"
                        placeholder="Username"
                        id="name"
                        style={{width: "100%", padding: "15px", borderRadius: "10px"}}
                    />
                </div>

                <div style={{width: "100%"}}>
                    <label htmlFor="email" style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5", paddingTop: "10px"}}>Email</label>
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
                    <label htmlFor="password" style={{display: "block", marginBottom: "0.5rem", color: "#75A2A5", paddingTop: "10px"}}>Password</label>
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

                <button type="submit" style={{padding: "0.7rem", borderRadius: "0.8rem", backgroundColor: "#75A2A5", color: "#fff", cursor: "pointer", marginTop: "10px"}}>
                    Sign Up
                </button>

                <p style={{textAlign: "center", color: "#fff"}}>
                    Already have an existing account?{" "}
                    <Link to="/admin-login" style={{color: "#32CD32"}}>
                        <button style={{border: "none", backgroundColor: "transparent", cursor: "pointer", color: "#75A2A5"}}>
                            Sign In here
                        </button>
                    </Link>{" "}
                </p>
            </form>
        </div>

    );
};

export default AdminSignup;
