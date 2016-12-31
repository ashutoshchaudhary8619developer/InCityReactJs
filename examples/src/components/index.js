import React, { Component, PropTypes } from 'react'
import { StepOne } from './stepone'
import { StepTwo } from './steptwo'
import { StepThree } from './stepthree'

const steps = 
    [
      {name: 'StepOne', component: <StepOne/>},
      {name: 'StepTwo', component: <StepTwo/>},
      {name: 'StepThree', component: <StepThree/>},
     
    ]

export { steps }