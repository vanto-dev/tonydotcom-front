import React, { useState } from "react";
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Stack,
    StackDivider,
    Text,
    Switch,
} from "@chakra-ui/react";

export const ExerciseCard = ({ exerciseName, score, onToggleSwitch }) => {
    const [sliderValue, setSliderValue] = useState(25);

    return (
        <div>
            <Card>
                <CardBody>
                    <Switch colorScheme='blue' onChange={onToggleSwitch} />
                    <Heading size="m" textTransform='uppercase'>{exerciseName}</Heading>
                    <Stack divider={<StackDivider />} spacing='2'>
                        <Box>
                            <Heading size='s'>
                                Score:
                            </Heading>
                            <Text pt='1' fontSize='sm'>
                                {score}
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <Slider max="50" aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                        <SliderMark
                            value={sliderValue}
                            textAlign='center'
                            bg='blue.500'
                            color='white'
                            mt='-10'
                            ml='-5'
                            w='12'
                        >
                            {sliderValue}
                        </SliderMark>
                        <SliderTrack />
                        <SliderFilledTrack />
                        <SliderThumb />
                    </Slider>
                </CardFooter>
            </Card>
        </div>
    );
};
