import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    editProfile: async (
      _,
      { userName, phoneNumber, organization, email, password: newPassword },
      { loggedInUser }
    ) => {
      console.log(loggedInUser);
      let uglyPassword = null;
      if (newPassword) {
        uglyPassword = await bcrypt.hash(newPassword, 10);
      }
      const updatedUser = await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
        userName,
        phoneNumber,
        organization,
          email,
          ...(uglyPassword && { password: uglyPassword }),
        },
      });
      if (updatedUser.id) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "Could not update profile.",
        };
      }
    },
  },
};