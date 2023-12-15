import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak();

const Login = (onAuthenticatedCallback) => {
  keycloakInstance
    .init({
        onLoad: "login-required",
        checkLoginIframe: false
      })
    .then(function (authenticated) {
      if(authenticated) {
        console.log(keycloakInstance.token);
        console.log(keycloakInstance.tokenParsed);
        console.log(keycloakInstance.idToken);
        console.log(keycloakInstance.idTokenParsed);
        console.log(keycloakInstance.refreshToken);
        console.log(keycloakInstance.refreshTokenParsed);
        console.log(keycloakInstance.sessionId);
        console.log(keycloakInstance.subject);
        console.log(keycloakInstance.realmAccess);
        console.log(keycloakInstance.resourceAccess);
        onAuthenticatedCallback();
      } else alert("non authenticated");
    })
    .catch((e) => {
      console.dir(e);
      console.log(`keycloak init exception: ${e}`);
    });
};

const KeyCloakService = {
  CallLogin: Login,
};

export default KeyCloakService;