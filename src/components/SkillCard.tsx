import React from 'react';
import {
        Text,
        StyleSheet,
        TouchableOpacity,
        TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
   return(
    <TouchableOpacity 
        style={styles.buttonSkill}
        {...rest}
    >
        <Text style={styles.testSkill}>
            {skill}
        </Text>
    </TouchableOpacity>
   ); 
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#2D2D39',
        padding: 21,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    testSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})