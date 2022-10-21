import { Component } from 'react';
import { faLeaf, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    state = {
        FullName: "",
        OrganizationName: "",
        Email: "",
        Password: "",
    }

    componentDidMount = () => {
        document.title = 'GreenMail | Sign Up'
    }

    doSignup = () => {
        let requestBody = {
            FullName: this.state.FullName,
            OrganizationName: this.state.OrganizationName,
            Email: this.state.Email,
            Password: this.state.Password,
        }

        axios.post('http://localhost:1234/signup/add', requestBody).then((resp) => {
            console.log(resp)
            if (resp.status === 200) {
                redirect('/login')
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    render() {
        return (
            <div className='flex justify-center items-center w-full h-screen bg-neutral-300'>
                <div className='fixed flex justify-between w-full h-12 bg-white shadow-sm top-0'>

                    <Link to={'/'} className='flex items-center h-full space-x-2 cursor-pointer'>
                        <span className='flex justify-center items-center h-12 w-12 bg-green-500'>
                            <span className='text-white text-2xl'>
                                <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                            </span>
                        </span>
                        <span className='text-xl font-bold'>GreenMail</span>
                    </Link>

                    <div className='flex items-center'>
                        <Link to='/' className='flex items-center h-full px-4 hover:bg-neutral-100 cursor-pointer'>Home</Link>
                    </div>

                </div>
                <div className='flex flex-col p-10 items-start w-1/3 bg-neutral-100 rounded space-y-3 shadow-sm'>
                    <div className='flex flex-col w-full space-y-1'>
                        <span className='flex font-bold text-4xl'>Sign Up</span>
                        <span className='text-xs'>or <Link to='/login' className='text-green-500 hover:underline hover:text-green-600 cursor-pointer'>log in to an existing account.</Link>
                        </span>
                    </div>
                    <div className='flex flex-col w-full'>
                        <span className='text-neutral-600'>Full Name</span>
                        <input className='w-full p-2 border rounded' type="text" onChange={(event) => { this.setState({ FullName: event.target.value }) }} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <span className='text-neutral-600'>Organization Name</span>
                        <input className='w-full p-2 border rounded' type="text" onChange={(event) => { this.setState({ OrganizationName: event.target.value }) }} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <span className='text-neutral-600'>Email</span>
                        <input className='w-full p-2 border rounded' type="text" onChange={(event) => { this.setState({ Email: event.target.value }) }} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <span className='text-neutral-600'>Password</span>
                        <input className='w-full p-2 border rounded' type="password" onChange={(event) => { this.setState({ Password: event.target.value }) }} />
                    </div>
                    <div className='flex w-full justify-between'>
                        <div className='flex items-center space-x-2'>
                            <span className='flex justify-center items-center w-5 h-5 rounded bg-green-500 space-x-2'>
                                <FontAwesomeIcon icon={faCheck} className='text-white'></FontAwesomeIcon>
                            </span>
                            <span>Remember me</span>
                        </div>
                        <button className='px-4 py-2 bg-green-500 rounded text-white font-semibold' onClick={this.doSignup}>Create an account</button>
                    </div>
                    <div className='flex'>
                        <span className='text-xs text-green-500 hover:underline hover:text-green-600 cursor-pointer'>Forgot your password?</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;