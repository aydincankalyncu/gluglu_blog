import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const findUser = async (credentials) => {
  const result = await axios.post("http://localhost:3000/user/signin", {
    email: credentials.email,
    password: credentials.password
  });
  return result.data.data;
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        const userData =  await findUser(credentials);
        console.log(userData);
        if (userData) {
          if (userData.isPasswordMatches) {
            const user = userData.user;
            // await updateSession({user});
            return userData.user;
          } else {
            throw new Error("Wrong credentials");
          }
        }
        else{
          throw new Error("User not found");
        }
      },
    }),
  ],
  pages:{
    error: "/login"
  }
};
