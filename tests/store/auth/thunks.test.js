import { async } from "@firebase/util";
import {
  loginUserWithEmailPassword,
  logoutFirebase,
  signInWithGoogle,
} from "../../../src/firebase/providers";
import { checkingCredencials, login, logout } from "../../../src/store/auth";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startLogout,
} from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");
const dispatch = jest.fn();

beforeEach(() => jest.clearAllMocks());

describe("Pruebas en auth thunks", () => {
  test("Debe invocar el checkingAuthentication", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredencials());
  });

  test("startGoogleSignIn debe llamar el checkingCredencials y el login", async () => {
    const loginData = {
      ok: true,
      ...demoUser,
    };

    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredencials());

    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn debe llamar el checkingCredencials y el logout - Error", async () => {
    const loginData = {
      ok: false,
      errorMessage: "Un error en google",
    };

    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredencials());

    expect(dispatch).toHaveBeenCalledWith(logout(loginData));
  });

  test("startLoginUserWithEmailPassword debe de llamar el checkingCredencials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };

    const formData = { email: demoUser.email, password: 123456 };

    await loginUserWithEmailPassword.mockResolvedValue(loginData);

    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredencials());

    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogout debe de llamar logoutFirebase, clearNotes, logout", async () => {
    await startLogout()(dispatch);
    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout({}));
  });
});
