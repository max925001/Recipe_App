const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const recipeContainer = document.querySelector('.recipe-container')





const fetchRecipes =  async (query) => {
    recipeContainer.innerHTML ="<h1>Fetching Recipe...</h1>"
const data =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
const response =  await data.json()
recipeContainer.innerHTML="";
// console.log(response.meals[0].strMealThumb
   response.meals.map((meal) =>{
// console.log(meal)
const recipeDiv = document.createElement('div')
recipeDiv.classList.add('recipe')
recipeDiv.innerHTML=
`<img src ="${meal.strMealThumb}">

<h1>${meal.strMeal}</h1>
<p><span>${meal.strArea}</span > Dish</p>
<p>Belong to <span>${meal.strCategory}</span> Category</p>



`
const buttons = document.createElement('button')
buttons.textContent = "View Recipe"
recipeDiv.appendChild(buttons)

buttons.addEventListener('click', () =>{

    openRecipe()
})

recipeContainer.appendChild(recipeDiv) // ishki help se data html me ja rha hai

   }) 
}


searchBtn.addEventListener('click' ,(e) =>{
    e.preventDefault()
    const searchinput =searchBox.value.trim()
    fetchRecipes(searchinput)
// console.log("clicked")

})