const IngredientList = (props) => {
    return (
        <ul>
            {props.availableIngredients.map((ingredient) => (
                <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button type="submit" onClick={() => props.addToBurger(ingredient)}>+</button>
                </li>
            ))}
        </ul>
    );
};

export default IngredientList;
