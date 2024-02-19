import * as React from "react";
import { ExerciseCard } from "./ExerciseCard";
import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";

export default function ExerciseList() {
    const [totalScore, setTotalScore] = useState(0);
    const [data, setData] = useState([]);
    const [selectedExercises, setSelectedExercises] = useState([]);

    const getData = () => {
        fetch('chest.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(myJson => {
                // Initialize isChecked property for each exercise object
                const updatedData = myJson.map(exercise => ({ ...exercise, isChecked: false }));
                setData(updatedData);
            });
    }


    const handleToggleSwitch = (id) => {
        const updatedData = data.map(exercise => {
            if (exercise.id === id) {
                const newIsChecked = !exercise.isChecked;
                const scoreToAdd = newIsChecked ? exercise.score : -exercise.score;
                setTotalScore(totalScore + scoreToAdd);
                return { ...exercise, isChecked: newIsChecked };
            }
            return exercise;
        });
        setData(updatedData);
    };

    return (
        <div>
            <button onClick={getData}>Chest Workout</button>
            <SimpleGrid minChildWidth="300px" spacing="50px">
                {data.map((exercise) => (
                    <ExerciseCard
                        key={exercise.id}
                        exerciseName={exercise.name}
                        score={exercise.score}
                        onToggleSwitch={() => handleToggleSwitch(exercise.id)}
                    />
                ))}
            </SimpleGrid>
            <p>Total Score: {totalScore}</p>
        </div>
    )
}
