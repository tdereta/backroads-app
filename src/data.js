import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
    {
        id: 1,
        text: 'home',
        href: '#home'
    },
    {
        id: 2,
        text: 'about',
        href: '#about'
    },
    {
        id: 3,
        text: 'services',
        href: '#services'
    },
    {
        id: 4,
        text: 'tours',
        href: '#tours'
    }
]

export const socialLinks = [
    {
        id: 1,
        icon: 'fab fa-facebook',
        href: 'https://www.facebook.com',
    },
    {
        id: 2,
        icon: 'fab fa-twitter',
        href: 'https://www.twitter.com',
    },
    {
        id: 3,
        icon: 'fab fa-squarespace',
        href: 'https://www.squarespace.com',
    }
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-hiking',
        title: 'adventure',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        icon: 'fas fa-tree',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 3,
        icon: 'fas fa-socks',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]

export const tours = [
    {
        id: 1,
        img: tour1,
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 2100,
        date: 'august 26th, 2020',
        location: 'china',
        length: 6,
    },
    {
        id: 2,
        img: tour2,
        title: 'best of java',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 1400,
        date: 'october 1st, 2020',
        location: 'indonesia',
        length: 11,
    },
    {
        id: 3,
        img: tour3,
        title: 'Explore Hong Kong',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 5000,
        date: 'september 15th, 2020',
        location: 'hong kong',
        length: 8,
    },
    {
        id: 4,
        img: tour4,
        title: 'Kenya Highlights',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 3300,
        date: 'december 5th, 2019',
        location: 'kenya',
        length: 20,
    },
    {
        id: 5,
        img: tour5,
        title: 'Africa Adventure',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 7100,
        date: 'march 21th, 2019',
        location: 'somalia',
        length: 28,
    },
    {
        id: 6,
        img: tour6,
        title: 'monument of love',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 3400,
        date: 'july 10st, 2018',
        location: 'india',
        length: 15,
    }
]