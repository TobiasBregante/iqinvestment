import WhatsappButton from './whatsapp.component'

const CardModule = ({ cardData }) => {
    return(
        <>
        <article id={ cardData.idReferenceHash } className="cardModulecontain col-12">
            <p className='title'>{ cardData.title }</p>
            <p>
                <img src={ cardData.img } alt={ cardData.title } />
            </p>
            <p className="description">{ cardData.text }</p>
            <WhatsappButton
                title='Contactenos' 
                message='Hola! Me interesan sus servicios.' 
                phone={549115598990} 
                background='success'
            />
        </article>
        </>
    )
}

export default CardModule