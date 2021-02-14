import image from './assets/image.png'
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from "./classes/blocks";

const text = '-> The login will allow you to authenticate with user/password = demo/demo and then route you to the homepage dashboard\n' +
    '-> The homepage dashboard should have a gridview showing 10 major cities with heavy air traffic {Atlanta, New York LGA, Amsterdam, London, ...}\n' +
    '-> Clicking on any of the airports in your gridview above should display a modal form with the following\n' +
    '     - departing flights in the last x-minutes (x can be a combo dropdown)\n' +
    '     - arriving flights in the last x-minutes\n' +
    '     - flight info - ICAO number, logo, airline etc'

export const model = [
    new TitleBlock('Hello World from JS',{
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles:{
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text,{
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]