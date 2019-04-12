export const signupRequest = async(userData = {}) => fetch("https://comingoo-api.herokuapp.com/api/riders/registerRider", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ full_name: `${userData.first_name} ${userData.last_name}`, email: userData.email, phone: userData.phone_number, profile_picture_url: userData.profile_pic, fb_access_token: userData.access_token })
}).then(response => {
    if (response.status !== 201) {
        return response;
    }
    response.json();
}).then(response => {
    if (response.status !== 201) {
        const messageBody = response
            ._bodyText
            .toString()
            .split('":"');
        const message = messageBody[1]
            .toString()
            .split('"}');
        return { success: false, message: message[0] };
    }
    return { success: true };
}).catch(error => console.log("ERROR FROM API", error));
export const signinRequest = (endpoint, method = "get", body) => fetch(endpoint, {
    method,
    headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => error);
