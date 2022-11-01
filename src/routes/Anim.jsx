import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import 'animate.css'

class SignUp extends Component {
    state = {
        text: "",
        coloredText: "",
    }

    anim = () => {
        const time = 400
        setTimeout(() => {
            this.setState({
                text: "Responsible"
            })
            setTimeout(() => {
                this.setState({
                    text: "rhymes"
                })
                setTimeout(() => {
                    this.setState({
                        text: "with"
                    })
                    setTimeout(() => {

                        this.setState({
                            text: "Green"
                        })
                    }, time)
                }, time)
            }, time)
        }, time)
    }

    componentDidMount() {
        this.anim();
    }

    render() {
        return (
            <div className='flex justify-center items-center w-full h-screen bg-neutral-100'>
                <span className='text-7xl font-bold'>
                    {this.state.text}
                    <span className='text-green-500'>{this.state.coloredText}</span>
                </span>
            </div>
        );
    }
}

export default SignUp;
