import React, { useState, useEffect } from 'react';
import { View,
        Text,
        StyleSheet,
        TextInput,
        Platform,
        FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleNewAddSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        
        if(currentHour < 12) {
            setGreeting('Good Morning !');
        }
        else if(currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon !');
        }
        else {
            setGreeting('Good Night !');
        }
    }, []);

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
            Welcome, Diego
        </Text>

        <Text style={styles.greetings}>
            { greeting }
        </Text>

        <TextInput 
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#747495"
            onChangeText={setNewSkill}
        />

        <Button 
            title="Add"
            onPress={handleNewAddSkill}    
        />

        <Text style={[styles.title, { marginVertical: 50 }]}>
            My Skills
        </Text>

        <FlatList 
            data={mySkills}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <SkillCard 
                    skill={item.name}
                    onPress={() => handleRemoveSkill(item.id)}
                />
            )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22222B',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#2D2D39',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7 
    },
    greetings: {
        color: '#FFF'
    }
})