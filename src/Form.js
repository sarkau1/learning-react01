import React, { useEffect } from 'react'
import {
  initializeData,
  updateDays,
  updateStates,
  validateEmail,
  validatePhoneNumber,
} from './script.js'

import { useForm } from 'react-hook-form'

const Form = () => {
  useEffect(() => {
    initializeData()
  })

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form action="" name="form1" onSubmit={handleSubmit(onSubmit)}>
      <h4>Student Name</h4>
      <div className="container name-group">
        <div>
          <input
            type="text"
            ref={register}
            name="firstName"
            ref={register({ required: true })}
          />
          <br />
          <label id="firstNameLabel" htmlFor="firstname">
            First Name
          </label>
          <br />
          {errors.firstName && (
            <span className="error">This field is required</span>
          )}
        </div>
        <div>
          <input type="text" name="middleName" />
          <br />
          <label id="middleNameLabel" htmlFor="middlename">
            Middle Name
          </label>
          <br />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            ref={register({ required: true })}
          />
          <br />
          <label id="lastNameLabel" htmlFor="lastname">
            Last Name
          </label>
          <br />
          {errors.lastName && (
            <span className="error">This field is required</span>
          )}
        </div>
      </div>
      <div className="container">
        <div className="date-group">
          <h4>Birth Date</h4>
          <div className="select">
            <select id="month" onChange={updateDays}></select>
            <br />
            <label id="monthLabel" htmlFor="month">
              Month
            </label>
          </div>
          <div className="select">
            <select id="day"></select>
            <br />
            <label id="dayLabel" htmlFor="day">
              Day
            </label>
          </div>
          <div className="select">
            <select id="year" onChange={updateDays}></select>
            <br />
            <label id="yearLabel" htmlFor="year">
              Year
            </label>
          </div>
        </div>
        <div className="gender-group">
          <h4 id="genderLabel">Gender</h4>
          <div className="select">
            <select id="gender"></select>
          </div>
        </div>
      </div>
      <div className="form-group margin-bottom-25">
        <h4>Address</h4>
        <input type="text" />
        <br />
        <label id="streetLabel" htmlFor="street">
          Street Address
        </label>
      </div>
      <div className="form-group margin-bottom-25">
        <input type="text" />
        <br />
        <label id="streetLineTwoLabel" htmlFor="streetLineTwoLabel">
          Street Address Line 2
        </label>
      </div>
      <div className="container form-group-into-two-collumn">
        <div className="select">
          <select id="city" onChange={updateStates}></select>
          <br />
          <label id="cityLabel" htmlFor="city">
            City
          </label>
        </div>

        <div className="select">
          <select id="state"></select>
          <br />
          <label id="stateAndProvinceLabel" htmlFor="state">
            State / Province
          </label>
        </div>
      </div>
      <div className="form-group margin-bottom-25">
        <input type="text" />
        <br />
        <label id="postCodeLabel" htmlFor="postcode">
          Postal / Zip Code
        </label>
      </div>
      <div className="container form-group-into-two-collumn">
        <div>
          <h4>Student E-mail</h4>
          <input
            id="email"
            type="text"
            placeholder="ex: myname@example.com"
            name="email"
            ref={register({ pattern: /\S+@\S+\.\S+/i })}
            // onChange={validateEmail(value)}
          />
          <br />

          {errors.email && (
            <span className="error">
              Insert correct email <br /> example@example.com
            </span>
          )}
          <div id="email-error" className="error"></div>
        </div>
        <div>
          <h4 id="mobileNumberLabel">Mobile Number</h4>
          <input
            id="mobileNumber"
            type="text"
            placeholder="(000) 000-0000"
            //  onChange={validatePhoneNumber(this.value, this.id)}
          />
          <div id="mobileNumber-error" className="error"></div>
        </div>
      </div>
      <div className="container form-group-into-two-collumn">
        <div>
          <h4 id="phoneNumberLabel">Phone Number</h4>
          <input
            id="phoneNumber"
            type="text"
            placeholder="(000) 000-0000"
            name="text1"
            // onChange={validatePhoneNumber(this.value, this.id)}
          />
          <div id="phoneNumber-error" className="error"></div>
        </div>
        <div>
          <h4 id="workNumberLabel">Work Number</h4>
          <input
            id="workNumber"
            type="text"
            placeholder="(000) 000-0000"
            //   onChange={validatePhoneNumber(this.value, this.id)}
          />
          <div id="workNumber-error" className="error"></div>
        </div>
      </div>
      <div className="form-group-into-two-collumn margin-bottom-25">
        <h4 id="companyLabel">Company</h4>
        <input type="text" />
      </div>
      <div className="form-group-into-two-collumn margin-bottom-25">
        <h4 id="coursesLabel">Courses</h4>
        <select id="course"></select>
      </div>
      <div className="form-group margin-bottom-15">
        <h4 id="additionalCommentsLabel">Additional Comments</h4>
        <textarea
          name=""
          id=""
          cols=""
          rows=""
          placeholder="Type here..."
        ></textarea>
      </div>
      <hr />
      <div className="container margin-top-15">
        <div>
          <button type="submit">Submit Application</button>
        </div>
        <div>
          <button>Clear Fields</button>
        </div>
      </div>
    </form>
  )
}

export default Form
