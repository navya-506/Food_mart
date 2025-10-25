import './Card.css'
const Card=()=>{
    const data=[{img:'https://food-mart-template.vercel.app/images/product-thumb-11.jpg',title:<>Amber Jar<br/>Honey best nectar you wish to get</>},
                {img:'https://food-mart-template.vercel.app/images/product-thumb-12.jpg',title:<>Amber Jar<br/> Honey best nectar you wish to get</>},
                {img:'https://food-mart-template.vercel.app/images/product-thumb-13.jpg',title:<>Amber Jar<br/> Honey best nectar you wish to get</>},
                {img:'https://food-mart-template.vercel.app/images/product-thumb-14.jpg',title:<>Amber Jar<br/> Honey best nectar you wish to get</>},
            ]
    return<>
    <div>
        <h3>New Arrived Brands</h3>
        <div className='parent-card'>
        {data.map((value,index)=> <div key={index} className="card">
            <img src={value.img} alt='img'/>
            <p>{value.title}</p>
            </div>)}
            </div>
    </div>
    </>
}
export default Card