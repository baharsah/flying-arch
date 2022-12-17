import bcrypt from 'bcrypt'
import axios from 'axios'

export const registerUser = (data) => {


    var hashPass

    bcrypt.hash(data.password , "GaramDapur+l2phika.flower", function(err, hash) {
        hashPass = hash
    });

    axios.post('https://localhost:3001/user', {
            name: data.name,
            email: data.email,
            password : hashPass,
            phone : data.phone,
            address : data.address
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });






}