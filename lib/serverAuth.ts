import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest) => {
  try {
    const session = await getSession({ req });
    console.log("Session:", session);

    if (!session?.user?.email) {
      throw new Error("Not signed in");
    }

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      throw new Error("User not found in the database");
    }

    return { currentUser };
  } catch (error) {
    console.error("Authentication Error:", error);
    throw error; // Rethrow the error to maintain the promise rejection
  }
};

export default serverAuth;
