{
    //

    const countWordOccurrences = (sentence: string, word: string): number => {
        const words = sentence.toLowerCase().split(' ');
        const count= words.filter(singleWord => singleWord === word.toLowerCase()).length;
        return count;
    };
    const result = countWordOccurrences("I love jui", "Ju")

    // console.log(result); 
    


    //
}