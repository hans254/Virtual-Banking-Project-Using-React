import iconImage from '../../images/pic3.jpg'; // Ensure the image exists

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Premium Bank',
    headline: 'Unlimited Transactions with Zero Fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/pic3.jpg'),
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo= {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or a computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: require('../../images/pic2.png'),
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Join Our Team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in uder 10 minutes. All you need is to add your information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../../images/pic1.png'),
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true,
}