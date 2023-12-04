export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    //Gửi kèm theo x-accesstoken chỗ header
    if (user && user.accessToken) {
      console.log(user.accessToken);
      return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      console.log("Khong co access token ko cho vo")
      return {};
    }
  }