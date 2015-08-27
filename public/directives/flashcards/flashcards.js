app.directive('flashCard', function(ScoreFactory){
	console.log('directive');
	return {
  restrict: 'E',
	templateUrl: '/directives/flashcards/flashcards.html',
  scope: {  
    card: '='
  },
  link: function(scope,elem,attr) {
      scope.answerQuestion = function (answer) {
      	 console.log("answer");
      if (scope.card.answered) return;
      scope.card.answered = true;
      scope.card.answeredCorrectly = answer.correct;
      if (answer.correct) ScoreFactory.correct++;
      else ScoreFactory.incorrect++;
    }
  }
  }

})