import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilDetails from "../components/profile/ProfileDetails";
import { userProfile } from "../feature/auth/profilService";

export default function Profil() {
  const dispatch = useDispatch();
  // state.user (user match to the key of reducer in the store)
  const { userToken } = useSelector((state) => state.user);

  
  /**
   * Automatically authenticate user if token is found
   * retrieve data of user
   */
  useEffect(() => {
    if (userToken) {
      dispatch(userProfile());
    }
  }, [userToken, dispatch]);

  return (
    <main className="main bg-dark">
      <ProfilDetails />
    </main>
  );
}
