import React from 'react'
import './LoginPage.scss'
import doctorImage from '../../Assets/doctor-medicine.svg';
const LoginPage = () => {
    return (
        <div className="login--box">
            <div className='container-fluid login--container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 login--container-active'>
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <img src={doctorImage} alt="medicalImage" />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 login--container-inactive d-flex justify-content-center align-items-center'>
                        <div className='p-5 account--container d-flex justify-content-center'>
                            <div className='container'>
                                <h1 className="heading mt-3">CreateAccount</h1>
                                <div className="d-flex flex-column gap-3 main--input">
                                    <input placeholder='email' />
                                    <input placeholder='name' />
                                    <input placeholder='password' />
                                </div>
                                <div className='d-flex justify-content-center btn--container gap-4'>
                                    <button>
                                        Sign up
                                    </button>
                                    <button>
                                        SIgn in
                                    </button>
                                </div>
                            </div>
                            {/* <div className='container'>
                                <h1 className="heading mt-3">Signin Account</h1>
                                <div className="d-flex flex-column gap-3 main--input">
                                    <input placeholder='email' />
                                    <input placeholder='password' />
                                </div>
                                <div className='d-flex justify-content-center btn--container gap-4'>
                                    <button>
                                        Sign up
                                    </button>
                                    <button>
                                        SIgn in
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage