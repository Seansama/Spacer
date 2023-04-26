import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

const ClientSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setName] = useState("");
    const navigate = useNavigate();
    const title = 'Spacer';
    const link1 = '/'
    const label1 = 'Home'
    const link2 = '/role-selector'
    const label2 = 'Change Role'
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, username }),
            });
            if (response.ok) {
                navigate('/client-login')
            } else {
                throw new Error("Account not created. Please try again.");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <Navbar title={title} link1={link1} label1={label1} link2={link2} label2={label2}/>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "white"}}>
                <form onSubmit={handleSubmit} style={{width: "400px", padding: "1rem", borderRadius: "0.5rem", backgroundColor: "white"}}>
                    <h2 style={{textAlign: "center", color: "#75A2A5"}}>Create an Account</h2>
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

                    <button type="submit" style={{padding: "0.7rem", borderRadius: "0.8rem", backgroundColor: "#75A2A5", color: "#fff", cursor: "pointer", marginTop: "10px", width: '30%', opacity: '80%'}}>
                        Sign Up
                    </button>

                    <p style={{textAlign: "center", color: "#fff"}}>
                        Already have an existing account?{" "}
                        <Link to="/client-login" style={{color: "#32CD32"}}>
                            <button style={{border: "none", backgroundColor: "transparent", cursor: "pointer", color: "#75A2A5"}}>
                                Sign In here
                            </button>
                        </Link>{" "}
                    </p>
                </form>
            </div>
        </>
    );
};

export default ClientSignup;
