// ex1 use if 
function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    } else {
        return <h1>Please sign up.</h1>;
    }
}

//ex2 using ternary operator

function Greeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
        </div>
    );
}

// ex3 using AND operators
function Notification({ message }) {
    return (
        <div>
            {message && <p>{message}</p>}
        </div>
    );
}

//   ex4 using null 
function WarningBanner({ warn }) {
    if (!warn) {
        return null;
    }

    return <div className="warning">Warning!</div>;
}

// practical  example 

function UserGreeting({ user }) {
    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome back, {user.name}!</h1>
                    {user.isAdmin && <p>You have admin access.</p>}
                </>
            ) : (
                <h1>Please sign up.</h1>
            )}
        </div>
    );
}


// Pitfall
// Don’t put numbers on the left side of &&.

// To test the condition, JavaScript converts the left side to a boolean automatically. However, if the left side is 0, then the whole expression gets that value (0), and React will happily render 0 rather than nothing.

// For example, a common mistake is to write code like messageCount && <p>New messages</p>. It’s easy to assume that it renders nothing when messageCount is 0, but it really renders the 0 itself!

// To fix it, make the left side a boolean: messageCount > 0 && <p>New messages</p>.