const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button type="submit" onClick={() => props.removeFromBurger(ingredient.name)}>X</button>
                </li>
            ))}
        </ul>
    );
};

export default BurgerStack;