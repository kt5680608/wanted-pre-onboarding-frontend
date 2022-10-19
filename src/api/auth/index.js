const BASE_URL = process.env.REACT_APP_BASE_URL;

export const signupAPI = (email, password, type, getError, getToken) => {
  fetch(`${BASE_URL}/auth/${type}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        getToken(data.access_token);
      } else {
        if (data.message === "Unauthorized") {
          getError("로그인 정보가 일치하지 않습니다");
        } else {
          getError(data.message);
        }
      }
    });
};
