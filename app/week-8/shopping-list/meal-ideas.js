'use client';

import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

const MealIdeas = ({ ingredient }) => {
    const [mealIdeas, setMealIdeas] = useState([]);

    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMealIdeas(meals);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="flex flex-col items-center">
            {mealIdeas.length === 0 ? (
                <p>No meal ideas available for "{ingredient}".</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {mealIdeas.map((meal) => (
                        <div key={meal.idMeal} className="border border-gray-500 p-4 rounded-lg">
                            <div className="flex items-center">
                                <img 
                                    src={meal.strMealThumb} 
                                    alt={meal.strMeal} 
                                    className="w-16 h-16 mr-4 object-cover" 
                                />
                                <span className="text-lg">{meal.strMeal}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MealIdeas;
