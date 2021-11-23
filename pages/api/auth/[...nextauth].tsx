import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
let userAccount = null;

const prisma = new PrismaClient();

const configuration = {
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Providers.Credentials({
      id: "credentials",
      name: "Login",
      async authorize(credentials) {
        const user = await prisma.admin.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        if (user !== null) {
          userAccount = user;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (user.isActive === "1") {
        console.log("suuuu");
        return user;
      } else {
        console.log("sdfsdfds");
        return false;
        // throw console.error();
      }
    },
    async session(session, token) {
      if (userAccount !== null) {
        session.user = userAccount;
      } else if (
        typeof token.user !== typeof undefined &&
        (typeof session.user === typeof undefined ||
          (typeof session.user !== typeof undefined &&
            typeof session.user.userId === typeof undefined))
      ) {
        session.user = token.user;
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return token;
    },
  },
};
export default (req, res) => NextAuth(req, res, configuration);
