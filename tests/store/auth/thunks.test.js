import { async } from "@firebase/util";
import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredencials, login, logout } from "../../../src/store/auth";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../../src/store/auth/thunks";
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
});
