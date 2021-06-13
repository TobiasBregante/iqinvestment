import Body from './gadgets/_body'
import Carousel from './carousel.component'
import Card from './card.component'
import CardModule from './cardModule.component'
import SloganLegend from './sloganLegend.component'
import Spacing from './spacing.component'
import SwipeUp from './arrowAnimated.component'
import About from './about.component'

const PWAComponent = () => {
    return(
        <Body headProps={ { title: 'My Website' } }>
            <article className="row contain">
                <article className="card-contain col-12 col-sm-12 col-lg-12 col-xl-12 p-0">
                    <Carousel 
                        img1='img/service2.jpg' 
                        img2='img/service1.jpg' 
                        img3='img/service3.jpg'
                    />
                </article>
                <SloganLegend sloganData='una frase motivadora'/>
                <About aboutData={{ 
                    title: 'Sobre nosotros',
                    text: `
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                    `,
                    idReferenceHash: 'nosotros'
                }}/>
                <SwipeUp/>
                <Card 
                    cardData={{
                        title: 'Servicio 1',
                        description: `Esto es una demo, esto es una demo, esto es una demo.`,
                        img: 'img/service1.jpg',
                        idService: 'service1'
                    }}
                />
                <Card 
                    cardData={{
                        title: 'Servicio 2',
                        description: `Esto es una demo, esto es una demo, esto es una demo.`,
                        img: 'img/service2.jpg',
                        idService: 'service2'
                    }}
                />
                <Card 
                    cardData={{
                        title: 'Servicio 3',
                        description: `Esto es una demo, esto es una demo, esto es una demo.`,
                        img: 'img/service3.jpg',
                        idService: 'service3'
                    }}
                />
                <Spacing spacing='30vh'/>
                <CardModule cardData={{
                    title: 'Servicio 1',
                    text: `
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                    `,
                    img: 'img/service1.jpg',
                    idReferenceHash: 'service1'
                }}/>
                <CardModule cardData={{
                    title: 'Servicio 2',
                    text: `
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                    `,
                    img: 'img/service2.jpg',
                    idReferenceHash: 'service2'
                }}/>
                <CardModule cardData={{
                    title: 'Servicio 3',
                    text: `
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                        Esto es una demo, esto es una demo, esto es una demo.
                    `,
                    img: 'img/service3.jpg',
                    idReferenceHash: 'service3'
                }}/>
            </article>
        </Body>
    )
}

export default PWAComponent