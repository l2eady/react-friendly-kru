import Link from 'next/link'
import { useState } from 'react'
import MainLayout from "../../layouts/MainLayout"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState('')
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const handleResponse = (response) => {
        // success case
        if (response.status_code == undefined) {
            // got response but didn't match to any format
            // do something
            console.error(response)
        } else if (response.status_code === '01') {
            // got failed responese
            // show modal error
        } else if (response.status_code === '00') {
            // got success responese
            // do something
        }
    }
    const handleOnChange = (e) => {
        console.log(e.target.id)
        console.log(e.target.value)
        switch (true) {
            case (e.target.id === 'email'):
                setEmail(e.target.value)
                break
            case (e.target.id === 'password'):
                setPassword(e.target.value)
                break
            case (e.target.id === 'confirm_password'):
                setConfirmPassword(e.target.value)
                break
        }
    }

    const handleSubmit = () => {
        console.log("handleSubmit")
        const reqBody = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        axios
            .post("https://us-central1-friendly-kru.cloudfunctions.net/api/signup", reqBody)
            .then((response) => {
                console.log(response)

                setLoading(false);
                // history.push("/");
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data);
                setLoading(false);
            });
    }


    return (
        <MainLayout>
            {/* <div className="bg-grey-lighter min-h-screen flex flex-col"> */}
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <div className="mb-8  item-centers font-bold">
                        <h1 className="font-bold text-center text-4xl text-yellow-500">Friendly<span className="text-blue-500">Kru</span></h1>
                    </div>
                    <h1 className="mb-8 text-3xl text-center">ลงทะเบียน</h1>

                    <input
                        onChange={handleOnChange}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        id="email"
                        placeholder="Email" />

                    <input
                        onChange={handleOnChange}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        id="password"
                        placeholder="Password" />
                    <input
                        onChange={handleOnChange}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    {/* <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                        </a>
                        </div> */}
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    {/* <a className="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                    </a>. */}
                    <Link href="/login" className="text-blue-500"> Login</Link>
                </div>

                {/* </div> */}
            </div>
        </MainLayout>
    )
}



export default Signup 