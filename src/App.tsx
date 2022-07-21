import React from 'react';
import './App.scss'

function App() {
    return (
        <main className='container'>
            <div className='form-conatiner'>
                <header className='form-container__title'>
                    <h1 className='form-container__title-main css-rotation-text'>Sign up</h1>
                </header>
                <section className='form-container__content'>
                    <div className='form-container__content-title-subtitle'>
                        <h1 className='title'>New user</h1>
                        <p className='subtitle'>Use the form below to create your account.</p>
                    </div>
                    <div className='form-container__content-input'>
                        <div className='form-container__content-input-text'>
                            <label>First Name</label>
                            <input type="text" required/>
                        </div>
                        <div className='form-container__content-input-text'>
                            <label>Last Name</label>
                            <input type="text" required/>
                        </div>
                        <div className='form-container__content-input-text'>
                            <label>Nationality</label>
                            <input type="text" required/>
                        </div>
                        <div className='form-container__content-input-text'>
                            <label>Email</label>
                            <input type="text" required/>
                        </div>
                        <div className='form-container__content-input-text'>
                            <label>Date of Birth</label>
                            <input type="text" required/>
                        </div>
                        <div className='form-container__content-input-text'>
                            <label>Gender</label>
                            <input type="text" required/>
                        </div>
                        <div className='form-container__content-input-text'>
                            <label>Password</label>
                            <input type="text" required/>
                        </div>
                        <div className='form-container__content-input-text'>
                            <label>Confirm Password</label>
                            <input type="text" required/>
                        </div>
                    </div>
                    <div className='form-container__content-submit'>
                        <div className='form-container__content-login'>
                            <p>Have an account? <a>Login</a></p>
                        </div>
                        <div className='form-container__content-submit-btn'>
                            <button>Complete Signup</button>
                        </div>
                    </div>
                   
                </section>
            </div>
        </main>
    );
}

export default App;