import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons";
import GDriveLogo from "./media/Google_Drive_icon.png";
import { auth, provider } from "./firebase";

function App() {
    // authentication
    const [user, setUser] = useState();

    const handleLogin = () => {
        if (!user) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            });
        }
    };
    return (
        <div className="app">
            {user ? (
                <>
                    <Header userPhoto={user.photoURL} />
                    <div className="app__main">
                        <SideBar />
                        <FilesView />
                        <SideIcons />
                    </div>
                </>
            ) : (
                <div className="app__login">
                    <img src={GDriveLogo} alt="Google Drive" />
                    <button onClick={handleLogin}>
                        Log in to Google Drive
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
