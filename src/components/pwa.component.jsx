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
                        img2='img/service3.jpg'
                        img3='img/service1.jpg' 
                    />
                </article>
                <SloganLegend sloganData='En lugar de horas extra, hacé dinero extra'/>
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
                <article className="col-12 titlePlans">
                    <h4>PLANES</h4>
                </article>
                <Card 
                    cardData={{
                        title: '📈 Determinación',
                        description: `
                        - Recibi  tu dinero por mes
                        `,
                        img: 'img/service1.jpg',
                        idService: 'service1'
                    }}
                />
                <Card 
                    cardData={{
                        title: '📈 Independencia',
                        description: `Esto es una demo, esto es una demo, esto es una demo.`,
                        img: 'img/service2.jpg',
                        idService: 'service2'
                    }}
                />
                <Card 
                    cardData={{
                        title: '📈 Bola de nieve',
                        description: `Esto es una demo, esto es una demo, esto es una demo.`,
                        img: 'img/service3.jpg',
                        idService: 'service3'
                    }}
                />
                <Spacing spacing='20vh'/>
                <CardModule cardData={{
                    title: 'Servicio 1',
                    text: `
                        El pago del 50%  anual dividido en comisiones mensuales iguales, 
                        en relacion al valor  que serapago durante un lapso de 12 meses, 
                        a partir de la primera comision  hasta la decima segunda y la 
                        devolucion del capital invertido en  el decimo tercer mes.
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