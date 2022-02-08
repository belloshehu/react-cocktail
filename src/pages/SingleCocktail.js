import React, {useState} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  React.useEffect(()=>{
    async function getCocktail(){
      setLoading(true)
      try{
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if(data.drinks){
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instructions,
            strCategory: category,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name, image, info, instructions, glass, ingredients, category
          }
          setCocktail(newCocktail)
        }else{
          setCocktail(null)
        }
        setLoading(false)
      }catch(error){
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if(loading){
    return <Loading />
  }
  if(!cocktail){
    return <h2 className='section-center'>no cocktail to display</h2>
  }else{
    const {name, image, info, instructions, glass, ingredients, category} = cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>Go home</Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}/>
          <div className='info'>
            <p>
              <span className='drink-data'>name:</span>{name}
            </p>
            <p>
              <span className='drink-data'>category:</span>{category}
            </p>
            <p>
              <span className='drink-data'>glass:</span>{glass}
            </p>
            <p>
              <span className='drink-data'>info:</span>{info}
            </p>
            <p>
              <span className='drink-data'>instructions:</span>{instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients:</span>
              {
                ingredients.map((ingredient, index)=>{
                  return ingredient? <span>{ingredient}</span>: null;
                })
              }
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail
