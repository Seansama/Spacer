import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()
    const title = 'Spacer';
    const link1 = '/'
    const label1 = 'Home'
    const link2 = '/role-selector'
    const label2 = 'Change Role'
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://spacer.onrender.com/admin_login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });

        if (response.ok) {
            const adminData = await response.json();
            setLoggedIn(true);
            localStorage.setItem('adminToken', adminData.token);
            //console.log(localStorage)
        } else {
            alert("Invalid email or password");
        }
    };

    if (loggedIn) {
        navigate('/admin-dashboard')
    }
    return (
        <>
            <Navbar title={title} link1={link1} label1={label1} link2={link2} label2={label2}/>
            <div style={{backgroundColor: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", padding: "1rem", borderRadius: "0.5rem", backgroundColor: "white", width: '30%'}}>
                    <h2 style={{textAlign: "center", color: "#75A2A5"}}>Administrator Log In</h2>
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

                    <button type="submit" style={{padding: "0.7rem", borderRadius: "0.8rem", backgroundColor: "#75A2A5", color: "#fff", cursor: "pointer",opacity: '80%', width: "40%"}}>
                        Log In
                    </button>

                    <button style={{border: "none", backgroundColor: "transparent", cursor: "pointer", color: "black"}}>
                        Don't have an administrator account?{" "}
                        <Link to="/admin-signup" style={{color: "#75A2A5"}}>
                            Create here.
                        </Link>
                    </button>
                </form>
            </div>
        </>
    )
};

export default AdminLogin;
