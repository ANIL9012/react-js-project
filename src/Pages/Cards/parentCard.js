

import img5 from '../.././images/image-5.jpg'
import img6 from '../.././images/image-6.jpg'
import img7 from '../.././images/image-7.jpg'

import Card from './card.js'


function ParentCard(){
    return(
        <>
            <div class = "d-flex gap-3 m-3 justify-content-center">
            <Card title = "card1" dec="This is a card one" image = {img5} heading="Card1"/>
            <Card title = "card2" dec="This is a card two" image = {img6} heading="Card2"/>
            <Card title = "card1" dec="This is a card three" image = {img7} heading="Card3"/>
            </div>
        </>
    
    )
}

export default ParentCard;