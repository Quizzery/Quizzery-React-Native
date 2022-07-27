import { useContext } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { correctChoiceContext } from './contextStore'

export default function Choices({A0, A1, A2, A3, correct, selectedChoice, setSelectedChoice, isTraversing, selectedChoices, shownQuestion, setModalVisible, correctAnswers, colors}) {

   const [ isCorrect, setIsCorrect ] = useContext(correctChoiceContext);
   const setChoiceHandler = (choice) => {
      if(!isTraversing) {
      setSelectedChoice(choice);
      setIsCorrect(choice == correct ? 1 : 0);
      }
      if(isTraversing && (selectedChoices[shownQuestion] == choice)){
        setIsCorrect(selectedChoices[shownQuestion] == correctAnswers[shownQuestion] ? 1 : 0);
        setModalVisible(true);
      }
   };

   const answerStyles = (choice, defaultStyle, selectStyle, traverseStyleCorrect, traverseStyleIncorrect) => { return (
    [defaultStyle, (selectedChoice == choice) && selectStyle,
      ((selectedChoices[shownQuestion] == choice) && isTraversing &&
       ((choice == correctAnswers[shownQuestion])? traverseStyleCorrect: traverseStyleIncorrect))]);}

   return (
      <ScrollView style={styles.answersContainer}>
      <Pressable style={answerStyles(1, [styles.answer, { borderColor: colors.border, }], [styles.selectedAnswer, { backgroundColor: colors.light,}], styles.selectedAnswerCorrect, styles.selectedAnswerIncorrect)} onPressIn={()=>setChoiceHandler(1)}>
        <View><Text style={answerStyles(1, [styles.letter, { color: colors.light}], [[styles.selectedLetter, { color: colors.dark,}], { color: colors.dark}], [styles.selectedLetterCorrection, { color: 'white'}], [styles.selectedLetterCorrection, { color: 'white'}])}>A</Text></View>
        <Text style={answerStyles(1, [styles.answerText, {color: colors.light,}], [styles.selectedAnswerText, { color: colors.dark,}], [styles.selectedAnswerTextCorrection, { color: 'white',}], [styles.selectedAnswerTextCorrection, { color: 'white',}])}>
          {A0}
        </Text>
      </Pressable>
      <Pressable style={answerStyles(2, [styles.answer, { borderColor: colors.border, }], [styles.selectedAnswer, { backgroundColor: colors.light,}], styles.selectedAnswerCorrect, styles.selectedAnswerIncorrect)} onPressIn={()=>setChoiceHandler(2)}>
      <View><Text style={answerStyles(2, [styles.letter, { color: colors.light}], [[styles.selectedLetter, { color: colors.dark,}], { color: colors.dark}], [styles.selectedLetterCorrection, { color: 'white'}], [styles.selectedLetterCorrection, { color: 'white'}])}>B</Text></View>
        <Text style={answerStyles(2, [styles.answerText, {color: colors.light,}], [styles.selectedAnswerText, { color: colors.dark,}], [styles.selectedAnswerTextCorrection, { color: 'white',}], [styles.selectedAnswerTextCorrection, { color: 'white',}])}>
          {A1}
        </Text>
      </Pressable>
      <Pressable style={answerStyles(3, [styles.answer, { borderColor: colors.border, }], [styles.selectedAnswer, { backgroundColor: colors.light,}], styles.selectedAnswerCorrect, styles.selectedAnswerIncorrect)} onPressIn={()=>setChoiceHandler(3)}>
      <View><Text style={answerStyles(3, [styles.letter, { color: colors.light}], [[styles.selectedLetter, { color: colors.dark,}], { color: colors.dark}], [styles.selectedLetterCorrection, { color: 'white'}], [styles.selectedLetterCorrection, { color: 'white'}])}>C</Text></View>
        <Text style={answerStyles(3, [styles.answerText, {color: colors.light,}], [styles.selectedAnswerText, { color: colors.dark,}], [styles.selectedAnswerTextCorrection, { color: 'white',}], [styles.selectedAnswerTextCorrection, { color: 'white',}])}>
          {A2}
        </Text>
      </Pressable>
      <Pressable style={answerStyles(4, [styles.answer, { borderColor: colors.border, }], [styles.selectedAnswer, { backgroundColor: colors.light,}], styles.selectedAnswerCorrect, styles.selectedAnswerIncorrect)} onPressIn={()=>setChoiceHandler(4)}>
      <View><Text style={answerStyles(4, [styles.letter, { color: colors.light}], [[styles.selectedLetter, { color: colors.dark,}], { color: colors.dark}], [styles.selectedLetterCorrection, { color: 'white'}], [styles.selectedLetterCorrection, { color: 'white'}])}>D</Text></View>
        <Text style={answerStyles(4, [styles.answerText, {color: colors.light,}], [styles.selectedAnswerText, { color: colors.dark,}], [styles.selectedAnswerTextCorrection, { color: 'white',}], [styles.selectedAnswerTextCorrection, { color: 'white',}])}>
          {A3}
        </Text>
      </Pressable>
      </ScrollView>
   );
}


const styles = StyleSheet.create({

   answersContainer: {
     marginHorizontal: 20,
     maxWidth: '90%',
     minWidth: '90%',
   },

    letter: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      marginLeft: 10,
    },
    selectedLetter: {
      fontFamily: 'Poppins-ExtraBold',
      fontSize: 23,
      marginLeft: 10,
    },
    selectedLetterCorrection: {
      
    },
   answer: {
     maxwidth: '30%',
     minWidth: '30%',
     paddingVertical: 10,
     marginVertical: 10,
     backgroundColor: 'rgba(0,0,0,0)',
     borderRadius: 20,
     borderWidth: 1.5,
     flexDirection: 'row',
     alignItems: 'center',
     paddingHorizontal: 10,
   },
   selectedAnswer: {
      
   },
   selectedAnswerCorrect: {
      backgroundColor: '#32c953',   // green
   },
    selectedAnswerIncorrect: {
      backgroundColor: '#c93232',   // red
    },
   answerText: {
    paddingHorizontal: 25,
    fontFamily: 'Poppins-Regular',
  },
   selectedAnswerText: {
      
      fontFamily: 'Poppins-Regular',
   },
   selectedAnswerTextCorrection: {
    
    fontFamily: 'Poppins-Regular',
 },
  
 });
 