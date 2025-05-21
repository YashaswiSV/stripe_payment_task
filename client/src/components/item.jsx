import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';

const StripeProvider = ({childern}) =>{ 
    return (
        <Element stripe={stripePromise}>
            {children}


        </Element>
    )

}

export default StripeProvider;
