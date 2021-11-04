import { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    signIn("credentials", {
      email,
      password,
      callbackUrl: `${window.location.origin}/dashboard`,
      redirect: false,
    }).then(function (result) {
      if (result.error !== null) {
        if (result.status === 401) {
          setLoginError(
            "Your username/password combination was incorrect. Please try again"
          );
        } else {
          setLoginError(result.error);
          //   //   console.log("error su");
          //   router.push(result.url);
        }
      } else {
        router.push(result.url);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {loginError}
      <label>
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
        />
      </label>
      <button type="submit">Submit login</button>
    </form>
  );
}

// import { getCsrfToken } from "next-auth/client";
// export default function SignIn({ csrfToken }) {
//   return (
//     <form method="post" action="/api/auth/callback/credentials">
//       {" "}
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />{" "}
//       <label>
//         {" "}
//         Username <input name="username" type="text" />{" "}
//       </label>{" "}
//       <label>
//         {" "}
//         Password <input name="password" type="password" />{" "}
//       </label>{" "}
//       <button type="submit">Sign in</button>{" "}
//     </form>
//   );
// }
// export async function getServerSideProps(context) {
//   return { props: { csrfToken: await getCsrfToken(context) } };
// }
