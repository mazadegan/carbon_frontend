import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import 'animate.css'

import { Link } from 'react-router-dom';

import wind from '../media/Wind1.mp4';
import Nav from '../components/Nav/Nav';
import NavLink from '../components/Nav/NavLink';
import NavButton from '../components/Nav/NavButton';

class Landing extends Component {
    state = {}
    componentDidMount = () => {
        document.title = 'GreenMail | Home'
    }
    render() {
        return (
            <div className='flex w-full'>

                <Nav>
                    <NavLink route='/about'>About</NavLink>
                    <NavLink route='/login'>Log In</NavLink>
                    <NavButton route='/signup'>Get Started</NavButton>
                </Nav>

                <video autoPlay loop muted className='fixed w-screen'>
                    <source src={wind} type="video/mp4" />
                </video>

                <div className='flex items-center flex-col w-full z-10'>
                    <div className='flex flex-col w-full items-center justify-center bg-neutral-900 bg-opacity-60 h-screen relative'>
                        <div className='flex flex-col justify-center items-center space-y-8 w-full '>
                            <span className='text-7xl font-black text-white drop-shadow-lg leading-snug tracking-tighter'>Keep your customers up to date <br />...without destroying the planet.</span>
                            <span className='text-xl text-white leading-snug tracking-tighter text-center font-normal'>
                                <span className='font-extrabold text-green-500'>GreenMail</span> leverages the <span className='underline underline-offset-2 decoration-dotted decoration-1 hover:decoration-solid cursor-pointer'>Green Software Foundation's Carbon-Aware API</span>, <br /> reducing your carbon footprint without compromising your connection to your customers.
                            </span>
                            <span className='flex w-full justify-center space-x-4 pt-2'>
                                <Link to={'/signup'} className='flex items-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white text-xl font-semibold rounded-sm transition'>Get Started</Link>
                                <button className='flex items-center px-8 py-3 bg-neutral-600 hover:bg-neutral-700 text-white text-xl font-semibold rounded-sm transition'>Learn More</button>
                            </span>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className={'text-white text-4xl animate__animated animate__bounce animate__repeat-2 absolute bottom-16'}></FontAwesomeIcon>
                    </div>
                    <div className='flex flex-col w-full h-screen'>
                        <div className='flex w-full bg-white h-full'>
                            <div className='flex flex-col p-20 w-1/2 space-y-4 bg-neutral-200 h-full justify-center'>
                                <span className='text-3xl font-bold'>Why GreenMail?</span>
                                <span className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptate ex nisi similique quasi aspernatur quibusdam, assumenda soluta accusantium voluptates dignissimos, dolor placeat vitae dolorem possimus totam. Magni, soluta vitae!</span>
                            </div>
                            <div className='flex justify-center items-center p-20 w-1/2 h-full'>
                                <span className='text-2xl font-light'>Corporate Clipart Goes Here</span>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full bg-white h-full'>
                            <div className='flex justify-center items-center p-20 w-1/2 h-full'>
                                <span className='text-2xl font-light'>Corporate Clipart Goes Here</span>
                            </div>
                            <div className='flex flex-col p-20 w-1/2 space-y-4 bg-neutral-200 h-full justify-center'>
                                <span className='text-3xl font-bold'>How does it work?</span>
                                <span className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptate ex nisi similique quasi aspernatur quibusdam, assumenda soluta accusantium voluptates dignissimos, dolor placeat vitae dolorem possimus totam. Magni, soluta vitae!</span>
                            </div>
                        </div>

                    </div>
                    <div className='flex w-full bg-neutral-900 py-4'>
                        <div className='flex flex-col items-start w-1/2 p-16 space-y-8'>
                            <span className='text-7xl font-black text-white leading-tight tracking-tighter'>Responsible <br /> rhymes with <br /> <span className='text-green-500'>green.</span></span>
                            <span className='text-lg text-white font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptate ex nisi similique quasi aspernatur quibusdam!</span>
                            <Link to={'/signup'} className='flex items-center px-8 py-3 space-x-3 bg-neutral-600 hover:bg-green-500 text-white text-xl font-semibold rounded-sm transition'> <span>Get Started Today</span> <span><FontAwesomeIcon icon={faArrowRight} /> </span></Link>
                        </div>
                        <div className='flex flex-col justify-center items-center w-1/2 p-16 space-y-8'>
                            <div className='flex justify-center items-center w-full h-full bg-neutral-700 rounded-xl'>
                                <span className='text-2xl font-light text-white'>Corporate Clipart Goes Here</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full bg-black'>
                        <div className='flex flex-col px-32 pt-24 pb-12 space-y-2'>
                            <span className='text-xl text-white font-extrabold'>GreenMail</span>
                            <Link to={'/signup'} className='text-lg text-white font-light hover:underline cursor-pointer decoration-1 underline-offset-2'> <span>Sign Up</span> </Link>
                            <Link to={'/login'} className='text-lg text-white font-light hover:underline cursor-pointer decoration-1 underline-offset-2'> <span>Log In</span> </Link>
                        </div>
                        <div className='flex justify-center w-full py-12'>
                            <span className='flex items-center text-white space-x-2 text-sm'> <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> <span>GreenMail 2022</span> </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
