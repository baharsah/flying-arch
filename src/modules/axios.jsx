
import axios from 'axios'

export const registerUser = (data) => {

    return axios.post('http://127.0.0.1:3001/users', {
            name: data.nama,
            email: data.email,
            password : data.pass,
            phone : data.phone,
            address : data.address
      })

}

export const checkUser = (user) => {


return axios.get('http://127.0.0.1:3001/users' , {
        params : {
        email : user
}

})


}


export const isAdmin = (user) => {

        var isAdminBool

        axios.get('http://127.0.0.1:3001/users' , {
                params: {
                        email : user
                }
        }).then((res) => {
                isAdminBool =  (res.data.isAdmin != null)
        })
        return isAdminBool
}

export const checkAuth = (user,password) => {

        var isPasswordCorrect


        return axios.get('http://127.0.0.1:3001/users' , {
                params : {
                email : user
        }
        
        }).then((res) => {
               isPasswordCorrect =  (res.data.password == password)
        }
                
        )
        
        
        }
        