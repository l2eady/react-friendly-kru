import { useState } from "react"
import MainLayout from "../../layouts/MainLayout"
import { useHistory } from "react-router-dom";
import axios from 'axios'
import setUserToken from '../../utils/token'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const handleSubmit = (e) => {
        setLoading(true)
        const reqBody = {
            email: email,
            password: password,
        }


        axios
            .post("https://us-central1-friendly-kru.cloudfunctions.net/api/login", reqBody)
            .then((response) => {
                console.log(response)

                // save user token to local storage
                setUserToken(response.data.token)
                

                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data);
                setLoading(false);
            });
    }
    const handleChange = (e) => {

        switch (true) {
            case (e.target.id) == "email":
                setEmail(e.target.value)
                break
            case (e.target.id) == "password":
                setPassword(e.target.value)
                break
            default:
                console.error(`${e.target.id} in handle change not match to any config`)
                break
        }
    }

    return (
        <MainLayout>
            <div className="font-sans min-h-screen  bg-gray-900 pt-24 pb-5">
                <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                    <h1 className="font-bold text-center text-4xl text-yellow-500">Friendly<span className="text-blue-500">Kru</span></h1>
                    <form action="#">
                        <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                            <h1 className="font-bold text-xl text-center">Sign in to your account</h1>
                            <div className="flex flex-col space-y-1">
                                <input onChange={handleChange} type="text" name="email" id="email" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Email" />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <input onChange={handleChange} type="password" name="password" id="password" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
                            </div>

                            <div className="relative">
                                <input type="checkbox" name="remember" id="remember" checked className="inline-block align-middle" />
                                <label className="inline-block align-middle" for="remember">Remember me</label>
                            </div>

                            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                                <a href="#" className="inline-block text-blue-500 hover:text-blue-800 hover:underline">Forgot your password?</a>
                                <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Log In</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </MainLayout>
    )

}


export default Login