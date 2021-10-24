import { useSession } from "next-auth/client";
export default function Index() {
  const [session, loading] = useSession();

  const isSessionValid = (session) => {
    if (
      typeof session !== typeof undefined &&
      session !== null &&
      typeof session.user !== typeof undefined
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (!loading) {
    if (isSessionValid(session)) {
      return <div className="wrapper">Welcome {session.user.email}</div>;
    } else {
      return (
        <div className="wrapper">
          <p>You are not logged in</p>
        </div>
      );
    }
  } else {
    return null;
  }
}
